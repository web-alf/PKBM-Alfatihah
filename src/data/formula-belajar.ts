import type { ImageMetadata } from "astro";

import grammarImage from "../assets/image/grammar.webp";
import karyaIlmiahImage from "../assets/image/karyailmiah.webp";
import bahasaInggrisImage from "../assets/image/bahasainggris.webp";
import matematikaImage from "../assets/image/tipstrik.webp";
import fisikaImage from "../assets/image/peranfisika.webp";
import semestaImage from "../assets/image/semesta.webp";

export interface FormulaArticle {
  slug: string;
  title: string;
  category: string;
  topic: string;
  date: string;
  dateISO: string;
  author: string;
  writer: string;
  editor: string;
  image: ImageMetadata;
  excerpt: string;
  originalUrl: string;
  content: string;
}

export const formulaBelajar: FormulaArticle[] = [

  // ==========================================
  // ARTIKEL 1 — GRAMMAR DAN VOCABULARY
  // ==========================================

  {
    slug: "grammar-dan-vocabulary",

    title:
      "Grammar dan Vocabulary:Trik Jitu Menguasai Keduanya!",

    category: "Formula Belajar Cerdas",
    topic: "Bahasa",
    date: "9 Oktober 2025",
    dateISO: "2025-10-09",
    author: "yayasanalfatihah",
    writer: "Gita Novianti",
    editor: "Suci Wulandari",
    image: grammarImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Belajar bahasa Inggris sering dianggap sulit karena harus memahami grammar dan memperkaya kosakata (vocabulary).",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/grammar-dan-vocabulary/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com – </strong>Belajar bahasa Inggris sering dianggap sulit karena harus memahami grammar dan memperkaya kosakata (vocabulary). Tapi jangan khawatir! Dengan trik jitu ini, belajar bahasa Inggris jadi lebih mudah dan menyenangkan.
      </p>

      <h2>Tips Mudah Menguasai Grammar</h2>

      <p>
        Grammar adalah aturan dalam bahasa Inggris yang membantu kita berbicara dan menulis dengan benar. Berikut trik mudahnya:
      </p>

      <h3>1. Pahami Pola Kalimat Dasar</h3>

      <p>
        Kalimat dalam bahasa Inggris umumnya memiliki pola:
      </p>

      <ul>
        <li>
          <strong>S + V + O</strong> (Subjek + Verb + Objek)
          <ul>
            <li>
              Contoh: <strong>She eats an apple</strong> (Dia makan sebuah apel).
            </li>
          </ul>
        </li>
        <li>
          <strong>S + to be + adjective/noun</strong>
          <ul>
            <li>
              Contoh: <strong>They are happy</strong> (Mereka bahagia).
            </li>
          </ul>
        </li>
      </ul>

      <h3>2. Kuasai Tenses yang Paling Sering Dipakai</h3>

      <p>
        Tidak perlu menghafal semua tenses, cukup fokus pada yang sering digunakan:
      </p>

      <ul>
        <li>
          <strong>Simple Present</strong> → Untuk kebiasaan sehari-hari
          <ul>
            <li>
              Contoh: <strong>I study every day</strong> (Saya belajar setiap hari).
            </li>
          </ul>
        </li>
        <li>
          <strong>Simple Past</strong> → Untuk kejadian yang sudah berlalu
          <ul>
            <li>
              Contoh: <strong>She visited Bali last year</strong> (Dia mengunjungi Bali tahun lalu).
            </li>
          </ul>
        </li>
        <li>
          <strong>Simple Future</strong> → Untuk kejadian yang akan datang
          <ul>
            <li>
              Contoh: <strong>We will go to the park</strong> (Kami akan pergi ke taman).
            </li>
          </ul>
        </li>
      </ul>

      <h3>3. Gunakan Kata Hubung untuk Membuat Kalimat Lebih Menarik</h3>

      <p>
        Kata hubung (conjunctions) membantu membuat kalimat lebih kompleks:
      </p>

      <ul>
        <li><strong>And</strong> (dan): Menghubungkan dua ide positif.</li>
        <li><strong>But</strong> (tetapi): Menyatakan perbedaan.</li>
        <li><strong>Because</strong> (karena): Menjelaskan alasan.</li>
        <li><strong>So</strong> (jadi): Menyatakan akibat.</li>
      </ul>

      <h2>Cara Efektif Memperbanyak Vocabulary</h2>

      <p>
        Kosakata adalah kunci untuk memahami dan berbicara dalam bahasa Inggris dengan lancar. Berikut trik mudahnya:
      </p>

      <h3>1. Gunakan Teknik Mnemonik</h3>

      <p>
        Teknik ini membantu menghafal kata dengan asosiasi:
      </p>

      <ul>
        <li>
          <strong>BIG (besar) → </strong>Bayangkan gajah yang besar
        </li>
        <li>
          <strong>FAST (cepat) → </strong>Bayangkan mobil balap yang melaju kencang
        </li>
      </ul>

      <h3>2. Tulis dan Ucapkan Kosakata Baru Setiap Hari</h3>

      <p>
        Coba tulis 5 kata baru setiap hari, lalu gunakan dalam kalimat:
      </p>

      <ul>
        <li>
          <strong>Happy (bahagia)</strong> → I am happy today!
        </li>
        <li>
          <strong>Delicious (lezat)</strong> → This cake is delicious
        </li>
      </ul>

      <h3>3. Bermain Game dan Menonton Film Berbahasa Inggris</h3>

      <ul>
        <li>Gunakan aplikasi belajar bahasa seperti Duolingo atau Memrise.</li>
        <li>Tonton film dengan subtitle Inggris agar terbiasa dengan pengucapan kata.</li>
        <li>Mainkan teka-teki silang atau scrabble untuk meningkatkan kosakata.</li>
      </ul>

      <h2>Latihan Rutin Agar Makin Lancar</h2>

      <p>
        Berlatih adalah kunci utama dalam menguasai bahasa Inggris. Cobalah:
      </p>

      <ol>
        <li>Berbicara dengan teman atau di depan cermin</li>
        <li>Menulis jurnal harian dalam bahasa Inggris</li>
        <li>Mendengarkan lagu berbahasa Inggris dan memahami liriknya</li>
      </ol>

      <p>
        Dengan menerapkan trik-trik ini, kamu bisa belajar bahasa Inggris tanpa ribet! Yuk, mulai sekarang dan jadilah lebih percaya diri dalam berbahasa Inggris! 😊
      </p>
    `,
  },

  // ==========================================
  // ARTIKEL 2 — MENULIS KARYA ILMIAH
  // ==========================================

  {
    slug: "menulis-karya-ilmiah",

    title:
      "Menulis Karya Ilmiah: Ini Panduan Lengkapnya!",

    category: "Formula Belajar Cerdas",
    topic: "Karya Ilmiah",
    date: "9 Oktober 2025",
    dateISO: "2025-10-09",
    author: "yayasanalfatihah",
    writer: "Gita Novianti",
    editor: "Suci Wulandari",
    image: karyaIlmiahImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Menulis karya ilmiah adalah keterampilan penting bagi pelajar SMP. Dengan menulis karya ilmiah, kita belajar berpikir kritis, melakukan penelitian, dan menyajikan informasi secara sistematis.",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/menulis-karya-ilmiah/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com – </strong>Menulis karya ilmiah adalah keterampilan penting bagi pelajar SMP. Dengan menulis karya ilmiah, kita belajar berpikir kritis, melakukan penelitian, dan menyajikan informasi secara sistematis. Yuk, simak panduan lengkapnya!
      </p>

      <h2>Apa Itu Karya Ilmiah?</h2>

      <p>
        Karya ilmiah adalah tulisan yang berisi hasil pemikiran atau penelitian yang disusun secara sistematis dan berdasarkan fakta. Contohnya:
      </p>

      <ol>
        <li>Laporan penelitian</li>
        <li>Makalah</li>
        <li>Artikel ilmiah</li>
      </ol>

      <h2>Struktur Karya Ilmiah</h2>

      <p>
        Agar karya ilmiah mudah dipahami, ada struktur yang harus diikuti:
      </p>

      <h3>1. Pendahuluan</h3>

      <p>
        Berisi latar belakang, rumusan masalah, dan tujuan penelitian.
      </p>

      <ul>
        <li><strong>Latar Belakang</strong>: Mengapa topik ini penting untuk diteliti?</li>
        <li><strong>Rumusan Masalah</strong>: Pertanyaan utama yang akan dijawab dalam penelitian.</li>
        <li><strong>Tujuan Penelitian</strong>: Apa yang ingin dicapai dari penelitian ini?</li>
      </ul>

      <h3>2. Kajian Teori</h3>

      <p>
        Menjelaskan teori atau konsep yang mendukung penelitian.
      </p>

      <ul>
        <li>Menggunakan sumber dari buku, jurnal, atau artikel terpercaya.</li>
        <li>Meringkas informasi yang relevan dengan topik penelitian.</li>
      </ul>

      <h3>3. Metode Penelitian</h3>

      <p>
        Menjelaskan bagaimana penelitian dilakukan.
      </p>

      <ul>
        <li><strong>Metode</strong>: Apakah menggunakan wawancara, eksperimen, atau studi pustaka?</li>
        <li><strong>Alat dan bahan</strong>: Jika ada percobaan, alat apa saja yang digunakan?</li>
        <li><strong>Langkah-langkah</strong>: Bagaimana penelitian dilakukan dari awal hingga akhir?</li>
      </ul>

      <h3>4. Hasil dan Pembahasan</h3>

      <p>
        Menampilkan hasil penelitian dan membahasnya.
      </p>

      <ul>
        <li>Hasil bisa berupa data, tabel, atau grafik.</li>
        <li>Pembahasan menjelaskan makna dari hasil penelitian.</li>
      </ul>

      <h3>5. Kesimpulan dan Saran</h3>

      <p>
        Ringkasan dari penelitian dan rekomendasi untuk penelitian selanjutnya.
      </p>

      <ul>
        <li><strong>Kesimpulan</strong>: Jawaban dari rumusan masalah.</li>
        <li><strong>Saran</strong>: Hal yang bisa diperbaiki atau diteliti lebih lanjut.</li>
      </ul>

      <h2>Tips Menulis Karya Ilmiah</h2>

      <ol>
        <li>Gunakan bahasa yang baku dan jelas.</li>
        <li>Hindari plagiarisme, selalu cantumkan sumber referensi.</li>
        <li>Gunakan gambar, tabel, atau diagram jika diperlukan.</li>
        <li>Periksa kembali tulisan sebelum diserahkan.</li>
      </ol>

      <p>
        Menulis karya ilmiah membutuhkan latihan, tapi dengan mengikuti langkah-langkah ini, kamu bisa membuat karya ilmiah yang baik. Selamat mencoba! 😊
      </p>
    `,
  },

  // ==========================================
  // ARTIKEL 3 — PINTAR BAHASA INGGRIS
  // ==========================================

  {
    slug: "pintar-bahasa-inggris-sejak-dini",

    title:
      "Pintar Bahasa Inggris Sejak Dini",

    category: "Formula Belajar Cerdas",
    topic: "Bahasa Inggris",
    date: "9 Oktober 2025",
    dateISO: "2025-10-09",
    author: "yayasanalfatihah",
    writer: "Gita Novianti",
    editor: "Suci Wulandari",
    image: bahasaInggrisImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Belajar Bahasa Inggris alangkah baiknya dimulai sejak anak usia dini. Saat ini, Bahasa Inggris menjadi bahasa global yang harus dipahami oleh setiap orang.",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/pintar-bahasa-inggris-sejak-dini/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com – </strong>Belajar Bahasa Inggris alangkah baiknya dimulai sejak anak usia dini. Saat ini, Bahasa Inggris menjadi bahasa global yang harus dipahami oleh setiap orang agar meningkatkan bentuk komunikasinya di masa yang akan datang dengan berbagai orang di belahan dunia.
      </p>

      <h2>Pintar Bahasa Inggris</h2>

      <p>
        Untuk menjadi Pintar Berbahasa Inggris kita dapat mempelajari hal-hal berikut ini! yuk kita pelajari bersama!
      </p>

      <h2>Apa Itu Bahasa Inggris?</h2>

      <p>
        Bahasa Inggris adalah bahasa internasional yang penting untuk dipelajari sejak dini. Dengan menguasai bahasa Inggris, kita bisa lebih mudah berkomunikasi dengan orang dari berbagai negara dan memahami banyak hal baru. Yuk, kita pelajari cara mudah belajar Bahasa Inggris!
      </p>

      <h2>Mengapa Harus Belajar Bahasa Inggris?</h2>

      <ol>
        <li>Bahasa Inggris digunakan di banyak negara</li>
        <li>Membantu memahami lagu, film, dan cerita dalam bahasa Inggris</li>
        <li>Memudahkan dalam belajar ilmu pengetahuan</li>
        <li>Berguna saat berpergian ke luar negeri</li>
      </ol>

      <h2>Cara Mudah Belajar Bahasa Inggris</h2>

      <h3>1. Mengenal Kata-kata Sederhana</h3>

      <p>
        Mulailah dengan belajar kata-kata sederhana yang sering digunakan sehari-hari, seperti:
      </p>

      <ul>
        <li>Hello = Halo</li>
        <li>Thank you = Terima kasih</li>
        <li>Sorry = Maaf</li>
        <li>Please = Tolong</li>
      </ul>

      <h3>2. Bernyanyi Lagu dalam Bahasa Inggris</h3>

      <p>
        Menyanyikan lagu-lagu anak dalam bahasa Inggris adalah cara menyenangkan untuk belajar. Contohnya:
      </p>

      <ul>
        <li>“Twinkle, Twinkle, Little Star”</li>
        <li>“ABC Song”</li>
        <li>“Old MacDonald Had a Farm”</li>
      </ul>

      <h3>3. Menonton Kartun dan Film Berbahasa Inggris</h3>

      <p>
        Menonton kartun atau film dengan bahasa Inggris bisa membantu anak-anak mengenal pengucapan kata dan memperkaya kosakata mereka.
      </p>

      <h3>4. Bermain dengan Flashcard dan Game</h3>

      <p>
        Gunakan flashcard atau permainan sederhana untuk mengenali kata-kata baru. Contoh permainan:
      </p>

      <ul>
        <li>Tebak gambar dan sebutkan namanya dalam bahasa Inggris.</li>
        <li>Bermain teka-teki kata dalam bahasa Inggris.</li>
      </ul>

      <h3>5. Berlatih Percakapan Sederhana</h3>

      <p>
        Cobalah berbicara dalam bahasa Inggris dengan teman atau keluarga menggunakan kalimat-kalimat sederhana, seperti:
      </p>

      <ul>
        <li>“What is your name?” (Siapa namamu?)</li>
        <li>“My name is…” (Namaku…)</li>
        <li>“How are you?” (Apa kabar?)</li>
        <li>“I am fine, thank you.” (Aku baik, terima kasih.)</li>
      </ul>

      <h2>Latihan Bahasa Inggris Sehari-hari</h2>

      <p>
        Agar lebih pintar, cobalah lakukan ini setiap hari:
      </p>

      <ol>
        <li>Sebutkan benda-benda di sekitar dalam bahasa Inggris.</li>
        <li>Menulis kosakata baru yang dipelajari.</li>
        <li>Mengulang kata-kata bahasa Inggris saat bermain.</li>
      </ol>

      <p>
        Belajar bahasa Inggris itu menyenangkan jika dilakukan dengan cara yang menarik. Ayo mulai belajar sekarang agar semakin pintar! 😊
      </p>
    `,
  },

  // ==========================================
  // ARTIKEL 4 — MATEMATIKA
  // ==========================================

  {
    slug: "cara-mudah-memahami-matematika",

    title:
      "Cara Mudah Memahami Matematika: Trik Perkalian Dasar",

    category: "Formula Belajar Cerdas",
    topic: "Matematika",
    date: "9 Oktober 2025",
    dateISO: "2025-10-09",
    author: "yayasanalfatihah",
    writer: "Gita Novianti",
    editor: "Suci Wulandari",
    image: matematikaImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Matematika merupakan ilmu dasar yang harus dimiliki oleh setiap orang karena seluruh aspek kehidupan tidak jauh dari yang namanya matematika.",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/cara-mudah-memahami-matematika/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com – </strong>Matematika merupakan ilmu dasar yang harus dimiliki oleh setiap orang karena seluruh aspek kehidupan tidak jauh dari yang namanya matematika. Ilmu ini meliputi kemampuan untuk menghitung, menganalisis, dan berlogika.
      </p>

      <h2>Apa Itu Matematika?</h2>

      <p>
        Matematika adalah pelajaran yang menyenangkan, terutama jika kita tahu triknya! Salah satu materi penting dalam matematika adalah perkalian. Yuk, kita pelajari bersama trik-trik mudah untuk memahami perkalian dasar!
      </p>

      <h2>Mengenal Konsep Perkalian</h2>

      <p>
        Pertama mari kita coba berkenalan dengan perkalian, Perkalian adalah cara cepat untuk menjumlahkan angka yang sama berulang kali. Contohnya:
      </p>

      <ul>
        <li><strong>2 × 3</strong> artinya <strong>2 + 2 + 2 = 6</strong></li>
        <li><strong>4 × 5</strong> artinya <strong>4 + 4 + 4 + 4 + 4 = 20</strong></li>
      </ul>

      <p>
        Jadi, perkalian bisa dianggap sebagai penjumlahan berulang!
      </p>

      <h2>Trik Mudah Perkalian</h2>

      <p>
        Dalam perkalian juga terdapat beberapa trik nya lho!! apa saja trik nya? berikut ini adalah trik-trik yang ada di dalam perkalian!
      </p>

      <h3>1. Trik Perkalian dengan Angka 0 dan 1</h3>

      <ul>
        <li>
          Setiap angka dikalikan dengan <strong>0</strong> hasilnya selalu <strong>0</strong>.
          <ul>
            <li>Contoh: <strong>5 × 0 = 0</strong>, <strong>9 × 0 = 0</strong></li>
          </ul>
        </li>
        <li>
          Setiap angka dikalikan dengan <strong>1</strong> hasilnya selalu <strong>angka itu sendiri</strong>.
          <ul>
            <li>Contoh: <strong>7 × 1 = 7</strong>, <strong>3 × 1 = 3</strong></li>
          </ul>
        </li>
      </ul>

      <h3>2. Trik Perkalian dengan Angka 2</h3>

      <ul>
        <li>
          Cara mudahnya adalah menambah angka itu sendiri.
          <ul>
            <li>Contoh: <strong>2 × 4</strong> = <strong>4 + 4 = 8</strong></li>
            <li>Contoh: <strong>2 × 7</strong> = <strong>7 + 7 = 14</strong></li>
          </ul>
        </li>
      </ul>

      <h3>3. Trik Perkalian dengan Angka 5</h3>

      <ul>
        <li>
          Jika angka yang dikalikan dengan 5 adalah <strong>genap</strong>, hasilnya berakhiran <strong>0</strong>.
          <ul>
            <li>Contoh: <strong>5 × 4 = 20</strong>, <strong>5 × 6 = 30</strong></li>
          </ul>
        </li>
        <li>
          Jika angka yang dikalikan dengan 5 adalah <strong>ganjil</strong>, hasilnya berakhiran <strong>5</strong>.
          <ul>
            <li>Contoh: <strong>5 × 3 = 15</strong>, <strong>5 × 7 = 35</strong></li>
          </ul>
        </li>
      </ul>

      <h3>4. Trik Perkalian dengan Angka 9</h3>

      <p>
        Gunakan trik jari tangan! Misalnya, untuk <strong>9 × 3</strong>:
      </p>

      <ol>
        <li>Rentangkan semua jari</li>
        <li>Lipat jari ketiga dari kiri</li>
        <li>Jari yang tersisa di kiri adalah 2 dan di kanan ada 7</li>
        <li>Hasilnya <strong>27</strong>!</li>
      </ol>

      <h3>5. Trik Perkalian dengan Angka 10</h3>

      <ul>
        <li>
          Hanya perlu menambahkan <strong>0</strong> di belakang angka tersebut.
          <ul>
            <li>Contoh: <strong>10 × 4 = 40</strong>, <strong>10 × 8 = 80</strong></li>
          </ul>
        </li>
      </ul>

      <h2>Latihan Perkalian Sederhana</h2>

      <p>
        Bagaimana kawan-kawan, sudahkah kalian memahami perkalian dalam Matematika? seru kan! nah, agar kita bisa menjadi semakin jago dalam perkalian selain kita harus rajin menghafal kita juga harus rajin berlatih. berikut ini ada soal-soal latihan perkalian coba kerjakan ya!
      </p>

      <p>Coba hitung dengan cepat:</p>

      <ol>
        <li><strong>6 × 5 = ?</strong></li>
        <li><strong>9 × 2 = ?</strong></li>
        <li><strong>7 × 3 = ?</strong></li>
        <li><strong>10 × 9 = ?</strong></li>
        <li><strong>5 × 8 = ?</strong></li>
      </ol>

      <p>
        Ayo kita sering berlatih agar semakin cepat menghitung perkalian! Semakin sering latihan, semakin pintar kita dalam matematika. Terus Semangat Belajarnya ya kawan-kawan!
      </p>

      <p>Coba hitung dengan cepat:</p>

      <ol>
        <li><strong>6 × 5 = ?</strong></li>
        <li><strong>9 × 2 = ?</strong></li>
        <li><strong>7 × 3 = ?</strong></li>
        <li><strong>10 × 9 = ?</strong></li>
        <li><strong>5 × 8 = ?</strong></li>
      </ol>

      <p>
        Ayo sering berlatih agar semakin cepat menghitung perkalian! Semakin sering latihan, semakin pintar kita dalam matematika. Semangat belajar! 😊
      </p>
    `,
  },

  // ==========================================
  // ARTIKEL 5 — PERAN FISIKA
  // ==========================================

  {
    slug: "peran-fisika",

    title:
      "Peran Fisika dalam Terciptanya Energi dan Gerak Kehidupan",

    category: "Formula Belajar Cerdas",
    topic: "Fisika",
    date: "26 September 2025",
    dateISO: "2025-09-26",
    author: "yayasanalfatihah",
    writer: "Gita Novianti",
    editor: "Suci Wulandari",
    image: fisikaImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Berbicara mengenai fisika, terkadang otak kita seketika terasa pusing. Tak jarang pula beberapa orang mempertanyakan sebenarnya untuk apa fisika itu ada?",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/peran-fisika/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com – </strong>Berbicara mengenai fisika, terkadang otak kita seketika terasa pusing. Tak jarang pula beberapa orang mempertanyakan sebenarnya untuk apa fisika itu ada ? selain untuk membuat kehidupan ini tambah rumit. Eits, tapi jangan salah.
      </p>

      <p>
        Peran fisika sangatlah penting dalam kehidupan sehari-hari lhoo, terutama dalam hal energi dan gerak. Konsep-konsep fisika seperti energi, gerak, dan gaya merupakan dasar bagi teknologi dan inovasi yang mempermudah kehidupan kita.
      </p>

      <h2>Energi dalam Kehidupan</h2>

      <p>
        Dalam kehidupan kita akan selalu membutuhkan energi. Energi berfungsi dalam mendukung manusia untuk melakukan berbagai macam aktifitas. macam-macam energi yang ada di dalam kehidupan diantaranya:
      </p>

      <ol>
        <li>Energi Matahari: fisika menjelaskan proses perubahan energi matahari menjadi energi listrik melalui panel surya.</li>
        <li>Energi angin: turbin angin mengubah energi kinetik angin menjadi energi listrik.</li>
        <li>Energi nuklir: reaksi nuklir menghasilkan energi listrik melalui pembangkit listrik tenaga nuklir.</li>
      </ol>

      <h2>Gerak dalam Kehidupan</h2>

      <p>
        Setelah energi didapat baik manusia maupun benda-benda yang ada di dunia akan dapat bergerak. berikut ini beberapa macam gerak yang ada dalam kehidupan:
      </p>

      <ol>
        <li>Gerak kendaraan: fisika menjelaskan prinsip gerak kendaraan, seperti gaya gesek dan gaya gravitasi</li>
        <li>Gerak robot: teknologi robotika menggunakan konsep fisika untuk mengontrol gerakan robot.</li>
        <li>Gerak manusia: fisika mempelajari gerakan manusia, seperti gerakan otot dan sendi.</li>
      </ol>

      <h2>Peran Fisika dalam Teknologi</h2>

      <p>
        Fisika berperan dalam terciptanya teknologi yang dimana teknologi itu dapat mempermudah kehidupan. Beberapa teknologi yang ada karena fisika diantaranya:
      </p>

      <ol>
        <li>Teknologi energi terbarukan: fisika mengembangkan teknologi energi terbarukan seperti panel surya dan turbin angin.</li>
        <li>Transportasi: fisika meningkatkan efisiensi dan keamanan kendaraan.</li>
        <li>Kedokteran: fisika digunakan dalam peralatan medis seperti MRI dan CT scan.</li>
      </ol>

      <h2>Konsep Fisika yang Mendasari</h2>

      <ol>
        <li>Hukum newton: mengatur gerakan dan gaya</li>
        <li>Hukum termodinamika: mengatur energi dan panas</li>
        <li>Teori relativitas: mengatur waktu dan ruang</li>
      </ol>

      <h2>Manfaat Fisika dalam Kehidupan</h2>

      <ol>
        <li>Meningkatkan efisiensi: fisika membantu menghemat energi dan sumber daya.</li>
        <li>Meningkatkan keamanan: fisika meningkatkan keselamatan transportasi dan industri.</li>
        <li>Mengembangkan teknologi: fisika memicu inovasi dan kemajuan.</li>
      </ol>
    `,
  },

  // ==========================================
  // ARTIKEL 6 — EKSPLORASI ALAM SEMESTA
  // ==========================================

  {
    slug: "eksplorasi-alam-semesta",

    title:
      "Eksplorasi Alam Semesta: Inilah Rahasia dan Keindahannya",

    category: "Formula Belajar Cerdas",
    topic: "Sains",
    date: "26 September 2025",
    dateISO: "2025-09-26",
    author: "yayasanalfatihah",
    writer: "Gita Novianti",
    editor: "Suci Wulandari",
    image: semestaImage,

    excerpt:
      "Pkbm.alfatihahhomeshooling.com – Eksplorasi alam merupakan kegiatan mengamati, mempelajari, dan menjelajahi alam untuk memahami fenomena alam, menemukan sumber daya alam, dan mengembangkan pengetahuan tentang lingkungan.",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/eksplorasi-alam-semesta/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeshooling.com – </strong>Eksplorasi alam merupakan kegiatan mengamati, mempelajari, dan menjelajahi alam untuk memahami fenomena alam, menemukan sumber daya alam, dan mengembangkan pengetahuan tentang lingkungan. Bumi yang merupakan satu-satunya planet yang terdapat makhluk hidup didalamnya merupakan bagian dan salah satu planet yang ada di alam semesta.
      </p>

      <p>
        Alam semesta menyimpan begitu banyak misteri yang menarik untuk dieksplorasi. Dari bintang-bintang kecil yang bersinar di langit saat malam hari, planet-planet unik selain Bumi, nah mari kita jelajahi keindahan serta rahasia apa saja yang terdapat di alam semesta.
      </p>

      <h2>Struktur Alam Semesta</h2>

      <ol>
        <li>Galaksi: sekumpulan bintang, planet, dan gas yang terikat oleh gravitasi</li>
        <li>Nebula: awan gas dan debu yang menyatu. Nebula ini merupakan cikal bakal terbentuknya bintang</li>
        <li>Planet: benda-benda besar di langit yang mengorbit pada bintang</li>
        <li>Bintang: sumber cahaya dan panas. Ternyata selain matahari bintang juga merupakan sumber dari cahaya dan panas</li>
      </ol>

      <h2>Rahasia Alam Semesta</h2>

      <p>
        Berbicara mengenai rahasia maka tentu saja rahasia adalah segala sesuatu yang tidak bisa kita ketahui kebenaran jawabannya. Diantara banyaknya rahasia semesta ada beberapa rahasia yang umumnya banyak dipikirkan dan ditemukan beberapa orang.
      </p>

      <ol>
        <li>Asal usul alam semesta: bisa disebut dengan teori big bang menjelaskan bahwa alam semesta terbentuk dari ledakan besar 13,8 miliar tahun lalu.</li>
        <li>Misteri lubang hitam: lubang hitam ini sendiri diketahui sebagai lubang hitam yang ada di luar angkasa yang memiliki gravitasi yang sangat kuat.</li>
        <li>Pertanyaan tentang makhluk lain: benarkah terdapat makhluk lain di alam semesta: atau apakan kita merupakan satu-satunya makhluk yang ada di alam semesta ini?</li>
      </ol>

      <h2>Keindahan Alam Semesta</h2>

      <p>
        Disamping menyimpang begitu banyak rahasia, alam semesta juga memiliki keindahan. diantaranya,
      </p>

      <ol>
        <li>Gugus Bintang Pleiades: kumpulan bintang yang masih muda dan indah</li>
        <li>Cincin Saturnus: salah satu fenomena alam yang spektakuler</li>
        <li>Aurora Borealis: sebuah cahaya utara yang mempesona</li>
      </ol>

      <h2>Teknologi Eksplorasi</h2>

      <p>
        Terdapat beberapa teknologi yang dapat kita gunakan untuk bereksplorasi mengenai semesta
      </p>

      <ol>
        <li>Teleskop: alat untuk mengamati bintang dan planet</li>
        <li>Pesawat Antariksa: kendaraan untuk menjelajahi ruang angkasa</li>
        <li>Satelit: alat untuk mengumpulkan data tentang alam semesta</li>
      </ol>

      <h2>Fakta Menarik</h2>

      <ol>
        <li>Alam semesta terus mengembang</li>
        <li>Bintang terjauh yang terlihat dari bumi adalah GN-z11</li>
        <li>Planet terpanas di tata surya kita adalah Venus</li>
      </ol>
    `,
  },
];