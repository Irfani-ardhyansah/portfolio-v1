# Portfolio Website — Wireframe & Design Spec

## Tujuan
- Sarana cari freelance / job opportunity
- Showcase kemampuan hard skill (backend engineering, system architecture) sekaligus soft skill (leadership, komunikasi, stakeholder management)
- Project client tidak bisa dipublish detail/nama — tampilkan sebagai "work highlights" generik + foto dokumentasi (rapat, jadi pembicara)

## Tech Stack
- **Framework:** Astro (static site generation, island architecture untuk bagian interaktif)
- **Styling:** Tailwind CSS
- **Konten:** Markdown/MDX untuk project & tulisan
- **Deploy:** Vercel / Netlify / Cloudflare Pages
- Tanpa backend/database — pure static, fokus di UI/UX

## Style Direction
**Vibe:** Dark & techy (developer vibe)

- Background dasar: dark navy / almost-black (contoh: `#0a0e14`)
- Satu accent color terang untuk CTA & highlight (pilihan: cyan, green, atau purple neon — sesuaikan dengan preferensi saat eksekusi warna)
- Font body: sans-serif clean (contoh: Inter, Geist)
- Font aksen: monospace untuk nama/tag skill/angka (kesan terminal/developer) — contoh: JetBrains Mono, Fira Code
- Elemen visual: subtle grid/dot background pattern, glow effect saat hover, card dengan border tipis + slight glassmorphism
- Border radius kecil-menengah (kesan modern, bukan playful/rounded penuh)

## Intro Animation (Opsional, Signature Element)
Terminal-style boot loading sebelum masuk ke hero:
- Browser-window frame (dot merah/kuning/hijau di pojok kiri atas, kayak macOS terminal)
- Baris-baris loading muncul satu per satu dengan delay (~500ms), format: `> loading [nama modul] ... [ok]`
- Urutan modul yang di-load (mix hard skill & soft skill, JANGAN cuma hard skill):
  1. backend engineering
  2. system architecture
  3. communication & stakeholder management
  4. leadership: 1.5yr as point of contact, project client (tanpa nama client)
  5. compiling profile
- Setelah semua baris selesai, transisi ke hero section (fade out terminal, fade in hero)
- UX note: simpan status di `sessionStorage` supaya intro cuma muncul sekali per sesi, sediakan tombol "skip" kecil untuk visitor yang sudah pernah lihat

## Page Structure (Section by Section)

### 1. Navbar + Hero
- Logo/nama (kiri), menu: About, Work, Services, Contact (kanan)
- Headline (nama + role, contoh: "Irfan — Web Developer")
- Subheadline singkat (value proposition, gabungan hard + soft skill)
- 2 CTA button: "Lihat project" & "Hire me" / "Contact"

### 2. About + Tech Stack
- Deskripsi singkat (~2-3 kalimat) tentang pengalaman (4 tahun web dev, fokus backend + kadang frontend)
- Badge/tag list tech stack: Laravel, React, MySQL, AWS SQS, dll

### 3. Work Highlights
- Grid 3 kolom (card)
- Tiap card: foto project/screenshot (yang boleh dipublish) atau ilustrasi, judul singkat, deskripsi role (TANPA nama client & data sensitif)
- Fokus ke: challenge teknis yang diselesaikan, dampak/hasil

### 4. Beyond Code — Leadership & Collaboration (Section Baru, Penting)
Bagian ini untuk jual soft skill secara eksplisit, jangan cuma jadi badge kecil di hero.
- Konteks: 1.5 tahun jadi Point of Contact (POC) untuk project client, jembatan antara tim engineering dan pihak client
- Foto dokumentasi: saat rapat/diskusi dengan client, saat jadi pembicara
- 2-3 poin konkret & measurable (isi nanti sesuai data asli), contoh format:
  - Jumlah/tipe stakeholder yang dihandle
  - Tipe keputusan/negosiasi yang dimediasi
  - Hasil dari komunikasi (on-time delivery, minim miskomunikasi, dll)
- Layout saran: foto besar di satu sisi, poin-poin di sisi lain (split layout), atau foto sebagai background dengan overlay card berisi poin

### 5. Services (opsional, kalau mau tawarin jasa freelance spesifik)
- Grid 3 card: contoh "Backend Architecture", "PDF/Report System", "API Integration"
- Tiap card: judul + deskripsi singkat 1-2 kalimat

### 6. Contact
- CTA singkat + tombol langsung ke WhatsApp/email, atau form simple
- Bisa tambahkan social links (GitHub, LinkedIn)

## Layout Wireframe Reference (Low-Fidelity)

```
┌─────────────────────────────────────┐
│ logo            about work services  │
│                        contact       │
│                                       │
│         [headline besar]             │
│         [subheadline]                │
│      [CTA 1]      [CTA 2]            │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ about + tech stack                   │
│ [deskripsi singkat]                  │
│ [badge][badge][badge][badge]         │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ work highlights                      │
│ [card] [card] [card]                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ beyond code (leadership section)     │
│ [foto besar]   [poin 1]              │
│                [poin 2]              │
│                [poin 3]              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ services (opsional)                  │
│ [card] [card] [card]                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ contact                              │
│ [CTA + link]                         │
└─────────────────────────────────────┘
```

## Notes
- Semua nama client TIDAK boleh disebut di mana pun — termasuk di alt text image, meta tag, atau case study
- Warna final (hex value spesifik) belum ditentukan di sini — ditentukan saat proses eksekusi desain
