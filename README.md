
# 🐾 Game Edukasi Hewan Peliharaan

Game edukasi interaktif untuk anak usia **5–6 tahun** dengan tema hewan peliharaan yang lucu dan berwarna cerah. Game ini bertujuan mengembangkan kemampuan kognitif anak melalui aktivitas mencocokkan, mengelompokkan, serta berpikir logis menggunakan permainan labirin.

## ✨ Fitur Utama

| Level | Aktivitas | Deskripsi |
|-------|-----------|-----------|
| **Level 1** | Mencocokkan | Anak mencocokkan hewan dengan makanannya (drag & drop) |
| **Level 2** | Mengelompokkan | Mengelompokkan hewan berdasarkan jenis makanan (herbivora/karnivora) |
| **Level 3** | Labirin (Maze) | Membantu kelinci menemukan jalan menuju wortel melalui labirin hutan |

### Fitur Interaktif
- 🔊 Narasi suara ramah anak
- 👏 Feedback langsung (tepuk tangan jika benar, motivasi jika salah)
- 🎨 Animasi dan visual cerah yang menarik
- 🌳 Background bertema hutan yang menyenangkan

## 🛠️ Teknologi

- [Astro](https://astro.build/) — Framework web modern
- HTML, CSS, JavaScript — Kode inti
- Web Speech API — Narasi suara

## 📁 Struktur Proyek

```
├── public/
│   ├── favicon.svg
│   ├── assets/images/       # Gambar background
│   └── sounds/              # File audio (narasi, efek suara)
├── src/
│   ├── components/          # Komponen reusable (BackButton, FeedbackOverlay)
│   ├── layouts/             # Layout utama
│   ├── pages/               # Halaman (index, level1, level2, level3)
│   ├── styles/              # CSS global
│   └── utils/               # Audio helper & data hewan
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Cara Menjalankan

### Prasyarat
- [Node.js](https://nodejs.org/) versi 22.12.0 atau lebih baru

### Instalasi & Jalankan

```bash
# 1. Clone repository
git clone https://github.com/<username>/game-edukasi-hewan.git
cd game-edukasi-hewan

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser dan akses `http://localhost:4321`

### Build untuk Production

```bash
npm run build
npm run preview
```

## 🎯 Tujuan Pembelajaran

- Mengenal jenis hewan peliharaan
- Mengetahui makanan hewan
- Mengelompokkan berdasarkan ciri
- Melatih berpikir logis dan pemecahan masalah
- Meningkatkan fokus dan konsentrasi

## 📝 Catatan

- Tidak ada unsur kekerasan
- Navigasi sederhana dan ramah anak
- Dapat dimainkan secara mandiri atau dengan pendamping
- Menggunakan pendekatan belajar sambil bermain

## 📄 Lisensi

MIT License
