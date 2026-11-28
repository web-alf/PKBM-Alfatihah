import type { ImageMetadata } from "astro";

import bayiGajahImage from "../assets/image/Bayi-Gajah-Warisan-Nusantara-300x171.webp";
import detoxMedsosImage from "../assets/image/Detox-Medsos-Sampai-Off-Gadget_-Hidden-Gem-Era-Digital-300x171.webp";

export interface ArtikelData {
  slug: string;
  title: string;
  category: string;
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

export const artikel: ArtikelData[] = [
  {
    slug: "bayi-gajah",
    title: "Bayi Gajah Warisan Nusantara",
    category: "Artikel",
    date: "9 Oktober 2025",
    dateISO: "2025-10-09",
    author: "yayasanalfatihah",
    writer: "Pak Bim",
    editor: "Ghina Shelda Aprelka",
    image: bayiGajahImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Pentingnya pendidikan lingkungan untuk mengenal dan menanamkan rasa cinta pada alam semesta sehingga dapat membentuk perilaku menjaga dan melindungi alam.",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/bayi-gajah/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com –</strong>
        Pentingnya pendidikan lingkungan untuk mengenal dan menanamkan rasa cinta pada alam semesta sehingga dapat membentuk perilaku menjaga dan melindungi alam untuk tetap seimbang. Kasus yang terjadi pada bayi gajah di taman nasional tesso nilo menunjukan bahwa harmonisasi antara manusia dan sesama makhluk hidup lainnya belum terbentuk dengan baik. keserakahan yang membuat rasa tidak pernah cukup atas apa yang telah dimiliki.
      </p>

      <p>
        Gajah Sumatera, satwa endemik dari Indonesia yang saat ini keberadaannya terbatas sehingga masuk ke dalam daftar satwa dilindungi. Siklus hidup gajah yang membutuhkan waktu kehamilan 22 bulan untuk satu kali kelahiran dengan rata-rata hidup 60 hingga 70 tahun.
      </p>

      <p>
        Namun ruang hidup gajah Sumatera saat ini semakin menyempit, banyak pembukaan lahan untuk berbagai kepentingan manusia seperti perkebunan dan pemukiman. Gajah memiliki jalur jelajah yang sudah terbentuk secara alamiah sejak lama yang menghubungkan sumber makanan, air dan tempat berlindung.
      </p>

      <p>
        Namun seringkali jalur jelajah ini terputus oleh pembangunan dan menyebabkan konflik manusia dan satwa. Bukankah gajah memiliki hak yang sama sebagai sesama makhluk hidup di muka bumi ini?
      </p>

      <p>
        Kasus kematian gajah cukup menyita perhatian beberapa waktu lalu terjadi di Malaysia. Bayi gajah yang mati karena tertabrak truk ketika menyebrang jalan dan kesedihan induk gajah membuatnya terdiam di samping truk, lalu berusaha mencoba untuk mengeluarkan bayinya yang berada di bawah truk.
      </p>

      <p>
        Berjam-jam induk gajah setia menemani jasad bayinya, hingga harus diberikan obat penenang untuk memindahkannya ke tempat yang lebih aman. Namun setelah berhasil dievakuasi keesokan harinya induk gajah ini kembali ke lokasi yang sama, seolah masih mencari anaknya.
      </p>

      <p>
        Kisah tragis ini terjadi karena terganggunya jalur jelajah gajah dengan adanya pembangunan jalan yang bagi manusia dengan adanya jalan ini akan mempermudah akses transportasi. Kisah lainnya juga terjadi di area pemukiman warga yang berdampingan langsung dengan hutan.
      </p>

      <p>
        Kawanan gajah masuk ke area pemukiman dan perkebunan warga hingga merusak sebagian fasilitas. Pengakuan warga yang kediamannya dikunjungi gajah ini menyampaikan gajah mengambil beberapa sumber makanan yang tersedia di area kebun maupun rumah.
      </p>

      <p>
        Kejadian ini membuat warga waspada akan kejadian serupa dan menyiapkan strategi untuk menghadapi kawanan gajah. Kenapa kasus ini penting untuk dibahas dan dipahami bersama? Gajah memiliki peran penting untuk keseimbangan alam.
      </p>

      <p>
        Daya jelajahnya yang luas membantu proses penyebaran biji dan regenerasi hutan yang membentuk ekosistem hutan yang sehat. keberadaan gajah sumatera menjadi satwa endemik kebanggan bangsa. Jika manusia sebagai makhluk yang memiliki akal dan pikiran dapat bersinergi dengan makhluk hidup lain disekitarnya maka seharusnya kita dapat memahami karakter alamiah gajah yang memiliki jalur jelajahnya.
      </p>

      <p>
        Oleh karena itu, kita dapat membatasi pembangunan sesuai dengan kata cukup dan jika pembangunan itu masih harus dilakukan maka dapat dianalisis dan dipersiapkan lebih baik sehingga kepentingan kita dan satwa lainnya dapat tetap terpenuhi tanpa mengorbankan salah satunya. Adapun alternatif yang dapat dilakukan yaitu dengan pembuatan koridor yang tidak akan memotong ataupun menghilangkan jalur jelajah gajah. monitoring dan pemahaman dalam menghadapi satwa liar yang ada disekitar kita sangat penting untuk membangun rasa memiliki dan saling menghormati antar makhluk hidup.
      </p>

      <p>
        Kisah gajah Sumatera ini menjadi refleksi kita bersama, sejauh apakah kita peduli terhadap sesama makhluk hidup? Mereka yang tidak bisa bersuara dengan lantang untuk mempertahankan ruang hidupnya. Maukah kita menjadi perantara suara bagi mereka yang tidak dapat bersuara dengan bahasa manusia?
      </p>
    `,
  },

  {
    slug: "detox-medsos-sampai-off-gadget",
    title: "Detox Medsos Sampai Off Gadget: Hidden Gem Era Digital",
    category: "Artikel",
    date: "9 Oktober 2025",
    dateISO: "2025-10-09",
    author: "yayasanalfatihah",
    writer: "Fahmi Salim",
    editor: "Suci Wulandari",
    image: detoxMedsosImage,

    excerpt:
      "Pkbm.alfatihahhomeschooling.com – Di kehidupan yang serba digital ini susah rasanya untuk terlepas dari yang namanya gadget atau handphone.",

    originalUrl:
      "https://pkbm.alfatihahhomeschooling.com/detox-medsos-sampai-off-gadget/",

    content: `
      <p>
        <strong>Pkbm.alfatihahhomeschooling.com –</strong>
        Di kehidupan yang serba digital ini susah rasanya untuk terlepas dari yang namanya gadget atau handphone. Akan tetapi pernahkah terpikir oleh kita untuk sesekali meninggalkan dunia gadget alias meninggalkan segala hiruk pikuk yang ada dalam kehidupan gadget tersebut?
      </p>

      <p>
        Tidak sekedar off medsos akan tetapi lebih ke benar-benar meninggalkan handphone alias off gadget seharian penuh. Menurut data dari laporan DataReportal per Oktober 2024, rata-rata orang di seluruh dunia menghabiskan waktunya 2 jam 19 menit (139 menit) per hari untuk mengakses media sosial. Khusus Indonesia menurut RRI.co.id (Mei 2024) dan Kompas.id (Januari 2025) masyarakat Indonesia menghabiskan waktu selama 3 jam 11 menit sampai 3 jam 14 menit per hari.
      </p>

      <p>
        GoodStats juga menyebutkan akses media sosial paling sering digunakan yaitu TikTok dan YouTube, mencapai 38 jam 26 menit untuk TikTok dan YouTube 31 jam 28 menit dengan rata-rata penggunaan bulanan. Data tersebut baru menunjukkan penggunaan medsos, beda lagi ketika digunakan untuk selain medsos. Yang mana menurut kesehatan waktu rekomendasi dalam ber-medsos adalah 30 menit. Berarti tandanya kita harus detox medsos ataupun yang lebih extrem off gadget. Tapi apakah ini positif atau justru sebaliknya.
      </p>

      <h2>Kolerasi Detox Medsos dengan Kehidupan Real Life</h2>

      <p>
        Belakangan ini ada sebuah trend yang sangat digemari oleh hampir seluruh kalangan, yang biasa kita kenal dengan istilah <em>hidden gem.</em> Salah satu penyebab adanya trend tersebut yakni untuk melepas penat atau <em>quality time</em> entah itu bersama keluarga bagi yang sudah berkeluarga atau hanya sekedar seru-seruan bareng temen.
      </p>

      <p>
        Bisa di-analogikan mengurangi medsos atau gadget itu seperti halnya kita melakukan <em>hidden gem</em> dalam kehidupan nyata alias <em>real life.</em> Ketika lelah atau penat dengan aktivitas yang gitu-gitu aja dalam 24/7 sampai <em>boring.</em> Sewajarnya kita mesti membutuhkan pelampiasan secara emosional & psikologis guna menjaga emosi & psikis yang kita miliki atau yang biasa dikenal dengan istilah <em>mental health</em>.
      </p>

      <p>
        Seperti halnya mengurangi aktivitas yang penuh distraksi dalam medsos umumnya gadget Andorra Kinara dalam bukunya <em>The Art of Stoicism</em> telah menyatakan “Pada awalnya, medsos digunakan sebagai sarana untuk terhubung kembali dengan saudara, teman, atau kerabat yang telah lama tidak berinteraksi dan berjauhan secara geografis.
      </p>

      <p>
        Namun, seiring berjalannya waktu, peran medsos telah beregeser menjadi sarana hiburan yang mana bila digunakan secara kurang tepat akan menyebabkan stres.” Bahkan lebih dari itu, medsos juga kini dijadikan sebagai ajang menampilkan pencapaian atau <em>achievement</em>. Sehingga secara tidak langsung ada sebagian orang yang merasa minder atas hal itu.
      </p>

      <p>
        Maka dari itu, di zaman yang serba digital ini kita tidak hanya membutuhkan <em>hidden gem</em> secara <em>real life</em> akan teapi kita juga membutuhkan <em>hidden gem</em> dari hiruk pikuknya gadget terutama kehidupan medsos. Tidak harus off gadget seharian penuh secara tiba-tiba, namun bisa dimulai secara bertahap.
      </p>

      <p>
        Mengawali dengan membatasi waktu penggunaan sosmed secara konsisten, lalu dengan mencoba beberapa jam tanpa sosmed, sampai seterusnya hingga kita menyadari manfaat yang telah diperoleh dari kegiatan tersebut.
      </p>

      <h2>Manfaat Detox Medsos</h2>

      <p>
        Dilihat dari segi manfaat, <em>hidden gem</em> secara <em>real life</em> mempunyai banyak manfaat terutama untuk kesehatan mental. Karena <em>hidden gem</em> ini seperti halnya kita menemukan peradaban baru, yang mana perabadan tersebut masih asri dari segi lingkungan ataupun suasana, begitu halnya ketika mengurangi aktivitas medsos.
      </p>

      <p>
        Ada beberapa manfaat sebenarnya yang tanpa kita sadari efeknya cukup luar biasa, tidak hanya dalam aspek emosi & psikis seperti:
      </p>

      <h3>1. Meningkatkan Kualitas Tidur</h3>

      <p>
        Dikutip dari Alodokter bahwa penggunaan medsos dapat meyebabkan penurunan kualitas dan kuantitas tidur bahkan insomnia. Ini dikarenakan emosi yang kamu rasakan ketika mengakses medsos, baik emosi positif maupun negatif sehingga rasa membuat tubuh tetap terjaga. Selain itu, paparan radiasi dari <em>gadget</em> menghambat pelepasan <em>hormon melatonin</em>, yaitu hormon yang memicu rasa kantuk.
      </p>

      <h3>2. Menjaga Hubungan Sosialisasi Sesama</h3>

      <p>
        Dampak ketergantungan medsos juga memengaruhi kita dalam kehidupan sosial atau interaksi terhadap orang-orang sekitar. Kehidupan medsos yang sejatinya adalah topeng sehingga kita melihat kehidupan medsos yang begitu <em>perfect</em> sampai kita lupa bahwa itu semua topeng alias telah di filter mana yang harus tampil di medsos mana yang harus dihapus, dan seakan kita telah lupa dengan kehidupan sebenarnya <em>(real life).</em>
      </p>

      <p>
        Dimana kehidupan yang sebenarnya sehat namun kita kurang <em>aware</em> terhadapnya, contoh ketika kita butuh bantuan yang pertama kali kita pintai adalah orang terdekat yang mana orang terdekat itu bukan dari medsos.
      </p>

      <h3>3. Produktivitas Meningkat</h3>

      <p>
        Poin yang gak kalah penting yakni, dengan detox medsos kita dapat lebih produktif dikarenakan aktivitas dalam medsos yang membuat kita sering kali menunda pekerjaan atau bahkan mager.
      </p>

      <h2>Tips Melakukan Detox Medsos</h2>

      <p>
        Untuk membantu agar bisa mendapat manfaat dari mengurangi atau bahkan sesekali off medsos atau gadget kita bisa melakukan berbagai tips berikut:
      </p>

      <ol>
        <li>
          Jauhkan gadget ketika dalam aktivitas penting yang tidak begitu membutuhkan gadget
        </li>

        <li>
          Tentukan batasan penggunaan medsos atau gadget secara konsisten
        </li>

        <li>
          Ganti waktu luang dengan membaca buku, menulis, bersih-bersih kamar, olahraga atau bahkan melakukan aktivitas yang berhubungan dengan alam
        </li>

        <li>
          Alihkan kegiatan scroll dengan menulis kegiatan random sehari-hari di buku catatan
        </li>
      </ol>

      <p>
        Walau pada realitanya kita tidaklah mudah untuk lepas begitu saja dari medsos apalagi gadget. Tapi setidaknya kita bisa memulainya tahap demi tahap secara konsisten istiqomah.
      </p>

      <p>
        Disini bukan untuk mengajak anti medsos akan tetapi lebih ke menggunakan medsos dan gadget secukupnya. Harapannya semoga kita bisa lebih sadar akan kebijakan dan kesehatan dalam bermain medsos dan gadget.
      </p>
    `,
  },
];