export interface GaleriVideo {
  id: string;
  title: string;
  category: "genuk" | "tutor";
  url: string;
  embedUrl: string;
}

const genukIds = [
  "1xwWU89IB3GK29nmmjkjGSw2Nq1zHukJw",
  "13esJFFlyOFtnTcP1-523z_RUgdw1A2NB",
  "1pOKBu3G30BYSzQi24gOu8nBHERTOCp1y",
];

const tutorIds = [
  "191r0AtctzEn6yEyPu9DLUonY_zldkfHv",
  "1nqcGyoTtcRz9Lt_n9JdM2Xn5DTEOQ_9f",
  "1ev48MHgJdFKMymzF9EgWz6NCmf6JGdSP",
  "1CWM7TPr-sWX-kv9G3JXQOdPvwhT32Ffg",
  "1Xq0l_gkxLmzgqTJPy7RmuyAF3FAwp9rV",
  "16onN60xWghpHaTC_IgJeY2KMvK7Vz5tK",
  "1GsrBKrvrU0DVI657O9jPxWxTOvrkudo8",
  "1iqPAL122fXn1oJIJyl8P9ucWu8ViGiuM",
  "1S_JPR_UVbfgAH9iYWS4Ggkz69tnmaGAQ",
  "1dS1pYjHZNzlilY9STIuKxzhTe0sukG54",
  "1UJwHOclxr0_BykeeCtsDf2solR3h9SJU",
];

export const galeriVideo: GaleriVideo[] = [
  ...genukIds.map((id, index): GaleriVideo => ({
    id,
    title: `Video Santri Genuk ${index + 1}`,
    category: "genuk",
    url: `https://drive.google.com/file/d/${id}/view`,
    embedUrl: `https://drive.google.com/file/d/${id}/preview`,
  })),

  ...tutorIds.map((id, index): GaleriVideo => ({
    id,
    title: `Video Santri ${index + 1}`,
    category: "tutor",
    url: `https://drive.google.com/file/d/${id}/view`,
    embedUrl: `https://drive.google.com/file/d/${id}/preview`,
  })),
];

export const videoCategories = [
  {
    id: "genuk",
    name: "PKBM Cabang Genuk",
    count: genukIds.length,
  },
  {
    id: "tutor",
    name: "Video Santri dari Tutor",
    count: tutorIds.length,
  },
];