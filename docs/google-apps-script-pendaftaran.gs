/**
 * Backend formulir pendaftaran PKBM Alfatihah (Google Apps Script Web App).
 * Tempel di Apps Script yang TERIKAT ke Google Sheets tujuan (Extensions > Apps Script),
 * lalu Deploy > New deployment > Web app:
 *   - Execute as : Me
 *   - Who has access : Anyone
 * Setiap mengubah kode, buat versi deployment baru.
 */

var SPREADSHEET_ID = "1AvrVaqR4FLga_O4FyfwoxGLDFKBwRh1tcWYf5H-3_-M";
var SHEET_NAME = "Pendaftaran";
var HEADERS = [
  "Timestamp",
  "Nama Lengkap",
  "Tempat Lahir",
  "Tanggal Lahir",
  "Jenis Kelamin",
  "Alamat Domisili",
  "Nomor WhatsApp",
  "Pilihan Program",
  "Pilihan Metode Belajar",
];

var PROGRAMS = [
  "Kejar Paket A",
  "Kejar Paket B",
  "Kejar Paket C",
  "Homeschooling",
  "Kelas Online",
];
var METHODS = ["Tatap Muka", "Virtual", "Hybrid (Tatap Muka dan Virtual)"];
var GENDERS = ["Laki-Laki", "Perempuan"];

var MIN_ELAPSED_MS = 3000; // pengisian < 3 detik dianggap bot
var MAX_PER_PHONE_PER_HOUR = 3; // batas kiriman per nomor WA per jam

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Mencegah rumus (=, +, -, @) dieksekusi Sheets dari input pengguna.
function safe_(value) {
  var s = String(value == null ? "" : value).trim();
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function validate_(p) {
  var errors = [];
  var nama = (p.nama_lengkap || "").trim();
  var tempat = (p.tempat_lahir || "").trim();
  var alamat = (p.alamat_domisili || "").trim();
  var wa = (p.nomor_whatsapp || "").trim();

  if (nama.length < 2 || nama.length > 100) errors.push("nama_lengkap");
  if (tempat.length < 2 || tempat.length > 80) errors.push("tempat_lahir");
  if (alamat.length < 5 || alamat.length > 500) errors.push("alamat_domisili");
  if (!/^\+?[0-9\s-]{9,18}$/.test(wa)) errors.push("nomor_whatsapp");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.tanggal_lahir || "")) {
    errors.push("tanggal_lahir");
  } else {
    var d = new Date(p.tanggal_lahir + "T00:00:00");
    if (isNaN(d.getTime()) || d > new Date() || d.getFullYear() < 1900) {
      errors.push("tanggal_lahir");
    }
  }
  if (GENDERS.indexOf(p.jenis_kelamin) < 0) errors.push("jenis_kelamin");
  if (PROGRAMS.indexOf(p.pilihan_program) < 0) errors.push("pilihan_program");
  if (METHODS.indexOf(p.metode_belajar) < 0) errors.push("metode_belajar");
  return errors;
}

function getSheet_() {
  var ss = SPREADSHEET_ID ? SpreadsheetApp.openById(SPREADSHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var p = (e && e.parameter) || {};

    // Honeypot terisi / terlalu cepat: pura-pura sukses agar bot tidak belajar.
    if ((p.website || "").length > 0) return json_({ ok: true });
    var elapsed = Number(p.elapsed_ms);
    if (isFinite(elapsed) && elapsed < MIN_ELAPSED_MS) {
      return json_({ ok: false, message: "Terlalu cepat, coba lagi." });
    }

    var errors = validate_(p);
    if (errors.length) {
      return json_({ ok: false, message: "Data tidak valid.", fields: errors });
    }

    lock.waitLock(10000);

    // Rate limit sederhana per nomor WhatsApp.
    var cache = CacheService.getScriptCache();
    var key = "wa_" + p.nomor_whatsapp.replace(/\D/g, "");
    var count = Number(cache.get(key) || 0);
    if (count >= MAX_PER_PHONE_PER_HOUR) {
      return json_({ ok: false, message: "Terlalu banyak pengiriman." });
    }
    cache.put(key, String(count + 1), 3600);

    getSheet_().appendRow([
      new Date(),
      safe_(p.nama_lengkap),
      safe_(p.tempat_lahir),
      safe_(p.tanggal_lahir),
      safe_(p.jenis_kelamin),
      safe_(p.alamat_domisili),
      "'" + p.nomor_whatsapp.trim(), // awalan ' = simpan sebagai teks
      safe_(p.pilihan_program),
      safe_(p.metode_belajar),
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, message: "Terjadi kesalahan server." });
  } finally {
    try {
      lock.releaseLock();
    } catch (e2) {}
  }
}

// Cek cepat dari browser: harus menampilkan {"ok":true,...}
function doGet() {
  return json_({ ok: true, service: "pendaftaran-pkbm" });
}
