# 🛠️ Development Cheat Sheet: Anti-Porto V5

Waduh, lupa lagi sama kodingan sendiri? Santai, ini panduan biar lu inget lagi sama "otak" di balik project ini.

## 🚀 1. Tech Stack Breakdown (Kenapa Pake Ini?)

*   **Vite:** *The Speedster.* Kita pake ini karena `create-react-app` udah kuno dan lemot. Vite nge-serve file lu pake native ES modules, jadi start server-nya kedip mata doang udah jalan.
*   **React:** *The Brain.* Library UI paling populer. Kita pake ini biar UI-nya modular (bisa dipotong-potong jadi component).
*   **Tailwind CSS:** *The Stylist.* Utitlity-first CSS. Gak perlu mikirin nama class aneh-aneh kayak `.wrapper-kanan-bawah`. Langsung hajar di JSX: `p-4 bg-red-500`. Sat set wat wet.
*   **Framer Motion:** *The Magician.* Ini kunci biar web lu gak kaku kayak web kecamatan. Dia yang handle animasi smooth (layout animations, exit transitions) yang susah banget kalau dibikin pake CSS biasa.

## 📂 2. Folder Structure Deep Dive (`src/`)

Ini peta harta karun lu, jangan sampe nyasar:

*   **`assets/`**: Gudang file statis. Logo, icon SVG, gambar meme, masuk sini.
*   **`components/`**: **Pecahan Lego.**
    *   *`home/`*: Spesial buat komponen yang CUMA muncul di Home (Hero, Widgets).
    *   *`Layout.jsx`*: Kerangka utama website (Navbar + Footer). Semua halaman dimasukin ke dalem sini.
    *   *Basic Components*: Kayak Widget, Button, dsb.
*   **`pages/`**: **Halaman Utuh.**
    *   `Home.jsx`: Halaman depan (Bento Grid).
    *   `Profile.jsx`, `Experience.jsx`, `Projects.jsx`: Halaman sisanya. Tiap file ini mewakili satu route URL.
*   **`utils/`** (Kalau ada): Tempat naruh fungsi pembantu (helper functions) biar component gak semrawut.

## 🧠 3. How It Works (Alur Kerja)

### Routing Logic (Jalan Raya)
Kita pake `react-router-dom`.
1.  **`App.jsx`** itu pusat trayek angkotnya.
2.  Di situ kita definisiin: "Kalau user ke `/projects`, tolong panggil komponen `Projects.jsx`".
3.  Semua rute itu dibungkus `Layout`, makanya Navbar selalu nongol di atas gak peduli lagi di halaman mana.

### Data Flow (Hero & Widgets)
*   **Bento Grid (`Hero.jsx`)**: Ini gak ngambil data dari API beneran (kecuali Jokes). Struktur grid-nya manual pake CSS Grid (`grid-template-areas`).
*   **Widgets**:
    *   `DevJokesWidget`: Pake `useEffect` buat fetch jokes pas komponen pertama kali muncul (mount).
    *   `StatusWidget`: Masih statis, tapi siap dikasih logic real-time kalau mau.

## 🎨 4. Styling Logic (Tailwind + Framer)

### Theme Configuration (`App.css`)
Cek file `App.css`, di situ "Jantung" warnanya.
*   Variabel kayak `--bg-primary`, `--accent-color` itu kuncinya.
*   Tailwind kita pake mode standar, tapi kita gabungin sama CSS Variables biar gampang switch **Dark Mode** ke **Light Mode**. Ganti satu variabel, berubah se-website.

### Animation System (Rule V8)
Kita punya aturan ketat soal interaksi (cek `Hero.jsx` bagian `whileHover`):
*   **Home/Hero**: **DILARANG GERAK**. Cuma boleh border yang nyala.
*   **Internal Pages**: Gerak dikit banget (**2px** max).
*   **Kecepatan**: Semua transisi diset **150ms** (`duration-150`). Jangan diubah jadi lambat, nanti rasanya "berat".

---
*Udah inget kan? Sekarang lanjut ngoding lagi!* 💻
