# 🧠 Cheat Sheet: Bedah Kodingan Sendiri

Yo, ini contekan biar lo gak lupa sama project lo sendiri. Project ini tuh **Anti-Porto**, portofolio yang interaktif abis pake gaya Bento Grid ala-ala command center.

## 🛠️ Tech Stack: Kenapa Pake Ini?

1.  **Vite:**
    *   *Kenapa?* Karena `create-react-app` itu lemot parah. Vite itu **sat-set**, hot reload-nya ngebut kayak pake nitro.
    *   *Fungsinya:* Buat jalanin server lokal & bundling code pas mau deploy.

2.  **React:**
    *   *Kenapa?* Standard industri, bang. Component-based bikin kita bisa bikin lego UI.
    *   *Fungsinya:* Otak dari semua UI lo.

3.  **Tailwind CSS:**
    *   *Kenapa?* Nulis CSS manual itu capek. Tailwind bikin styling langsung di class HTML, gak perlu bolak-balik file `.css`.
    *   *Fungsinya:* "Make it pretty" dengan utility classes.

4.  **Framer Motion:**
    *   *Kenapa?* Buat bikin animasi yang `smooth` dan `snappy` (kayak lift 4px pas hover itu loh).
    *   *Fungsinya:* Animasiin komponen React tanpa bikin sakit kepala pake CSS keyframes.

## 📂 Bedah Struktur Folder (`src`)

Biar gak nyasar di rumah sendiri, ini peta folder lo:

*   **`src/`**
    *   **`assets/`**: Gudang gambar, font, atau file statis lain.
    *   **`components/`**: **Pecahan Lego.** Isinya potongan UI kecil-kecil yang bisa dipake ulang.
        *   `Layout.jsx`: Wrapper utama biar Navbar/Footer nempel terus.
        *   `ThemeToggle.jsx`: Saklar Dark/Light mode.
        *   `home/`: Komponen spesifik buat halaman Home (Hero Bento Grid, Widget Jokes, dll) biar gak numpuk.
    *   **`pages/`**: **Halaman Utama.** Ini yang bakal dirender pas URL ganti.
        *   `Home.jsx`, `Projects.jsx`, `Experience.jsx`, `Profile.jsx`.
    *   **`App.jsx`**: "Router Central". Di sini kita atur jalan raya, URL `/projects` bakal nampilin `Projects.jsx`.

## ⚙️ How It Works (Logika Simpel)

1.  **Routing (Jalan Raya):**
    *   Kita pake `react-router-dom`.
    *   Pas user klik link di Navbar, halaman gak di-refresh total (SPA - Single Page App).
    *   Cuma konten tengahnya doang yang diganti sesuai isi folder `pages/`.

2.  **Bento Grid Data Flow:**
    *   *Static Props:* Di `Hero.jsx`, data Bento Panel itu rata-rata hardcoded atau static statenya.
    *   *Widget Jokes:* Itu satu-satunya yang semi-dinamis, dia bisa fetch joke baru (kalau API disambungin) atau pake data dummy lokal di `useEffect`.

## 🎨 Styling Logic

*   **Variables:** Cek `App.css`, di situ gudang variabel warna (`--bg-primary`, `--accent-color`).
    *   *Kenapa variable CSS?* Biar gampang ganti tema Dark/Light mode cuma dengan ganti value variable-nya.
*   **Interaction System (V8):**
    *   Ingat aturan suci kita: **150ms transition**, **4px lift**, **No Glow**.
    *   Semua ini diatur di properti `transition` & `whileHover` Framer Motion di tiap komponen.

---
*Dah, itu intinya. Jangan lupa minum air putih.* 🥤
