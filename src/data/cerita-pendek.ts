import type { ImageMetadata } from "astro";

// =========================================
// PELITA DI TENGAH MALAM
// =========================================

import pelita1 from "../assets/image/1-14.png";
import pelita2 from "../assets/image/2-12.png";
import pelita3 from "../assets/image/3-12.png";
import pelita4 from "../assets/image/4-9.png";
import pelita5 from "../assets/image/5-9.png";
import pelita7 from "../assets/image/7-8.png";
import pelita8 from "../assets/image/8-7.png";

// =========================================
// GAK ADA KATA TERLAMBAT BUAT BELAJAR
// =========================================

import belajarCover from "../assets/image/1-1-1-768x768.jpg";
import belajar3 from "../assets/image/3-1-1-1024x1024.jpg";
import belajar4 from "../assets/image/4-1-1-1024x1024.jpg";
import belajar5 from "../assets/image/5-1-1-1024x1024.jpg";
import belajar6 from "../assets/image/6-2-1024x1024.jpg";
import belajar7 from "../assets/image/7-1024x1024.jpg";
import belajar8 from "../assets/image/8-1-1024x1024.jpg";

// =========================================
// TIPE DATA
// =========================================

export interface CeritaPendek {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateISO: string;
  image: ImageMetadata;
  images: ImageMetadata[];
}

// =========================================
// DATA CERITA PENDEK
// =========================================

export const ceritaPendek: CeritaPendek[] = [
  {
    slug: "pelita-di-tengah-malam",
    title: "Pelita di Tengah Malam",
    category: "Cerita Pendek",
    date: "24 Oktober 2025",
    dateISO: "2025-10-24",
    image: pelita7,
    images: [
      pelita1,
      pelita2,
      pelita3,
      pelita4,
      pelita5,
      pelita7,
      pelita8,
    ],
  },
  {
    slug: "gak-ada-kata-terlambat-buat-belajar",
    title: "Gak Ada Kata Terlambat Buat Belajar!",
    category: "Cerita Pendek",
    date: "10 Oktober 2025",
    dateISO: "2025-10-10",
    image: belajarCover,
    images: [
      belajarCover,
      belajar3,
      belajar4,
      belajar5,
      belajar6,
      belajar7,
      belajar8,
    ],
  },
];