# 💕 Valentine Web - Surat Cinta Digital

Website Valentine interaktif bertema romantis dengan warna pastel. Dibuat dengan Next.js (App Router) dan JSX.

## 🎯 Fitur

- ✨ Single Page dengan scroll navigation
- 💌 Animasi amplop yang bisa dibuka
- 🖼️ Gallery foto kenangan
- 🎵 Section playlist musik
- 💕 Floating hearts animation
- 🎨 Tema warna pastel yang lembut

## 🗂️ Struktur Project

```
valentine-web/
│
├─ src/
│   ├─ app/
│   │   ├─ page.jsx        ← Halaman utama
│   │   ├─ layout.jsx      ← Layout global
│   │   └─ globals.css     ← Styling global
│   │
│   ├─ components/
│   │   ├─ HeroSection.jsx     ← Landing section
│   │   ├─ LoveLetter.jsx      ← Surat cinta
│   │   ├─ Envelope.jsx        ← Animasi amplop
│   │   ├─ MemoriesSection.jsx ← Gallery foto
│   │   ├─ PlaylistSection.jsx ← Playlist musik
│   │   ├─ FloatingHearts.jsx  ← Animasi hati melayang
│   │   └─ Footer.jsx          ← Footer/closing
│   │
│   ├─ assets/
│   │   └─ images/
│   │       └─ memories/   ← Simpan foto kenangan di sini
│   │
│   └─ utils/              ← Helper functions (opsional)
│
├─ public/
│   └─ memories/           ← Folder alternatif untuk foto
│
└─ package.json
```

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka http://localhost:3000
```

## 🎨 Library yang Digunakan

- **Next.js 15** - Framework React
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasi
- **Lucide React** - Icons

## 📝 Cara Kustomisasi

### 1. Ganti Teks Surat Cinta
Edit file `src/components/LoveLetter.jsx`, cari variabel `letterContent`

### 2. Tambah Foto Kenangan
1. Simpan foto di folder `public/memories/`
2. Edit `src/components/MemoriesSection.jsx`
3. Update array `memories` dengan path foto kamu

### 3. Ganti Playlist
Edit file `src/components/PlaylistSection.jsx`, update array `songs`

### 4. Embed Spotify Playlist
Di `PlaylistSection.jsx`, ganti placeholder dengan iframe Spotify:
```jsx
<iframe 
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" 
  width="100%" 
  height="380" 
  frameBorder="0" 
  allow="encrypted-media"
/>
```

## 🎨 Palet Warna

| Warna | Hex Code |
|-------|----------|
| Pink Light | #FFE4EC |
| Pink Medium | #FFB6C1 |
| Pink Dark | #FF69B4 |
| Rose | #FFB7C5 |
| Cream | #FFF5F5 |
| Lavender | #E6E6FA |
| Peach | #FFDAB9 |
| Coral | #FF7F7F |

## 🔤 Font

- **Dancing Script** - Untuk teks cursive/romantis
- **Quicksand** - Untuk body text

## 💕 Happy Valentine's Day!

Made with ❤️ for someone special
