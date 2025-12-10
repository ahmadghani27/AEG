# 🚀 Panduan Deploy ke GitHub Pages

Mau website lu online gratis di `username.github.io/repo-name`? Ikuti tutorial sat-set ini.

## Step 1: Install Package `gh-pages`
Package ini tugasnya nge-push folder hasil build (`dist`) ke branch khusus (`gh-pages`) di GitHub.

Buka terminal di folder project, ketik:
```bash
npm install gh-pages --save-dev
```

## Step 2: Update `package.json`
Buka file `package.json`, tambahkan/edit bagian ini:

1.  **Tambahkan Homepage:** (PENTING! Ganti usernamenya)
    ```json
    "homepage": "https://<USERNAME_GITHUB_LU>.github.io/<NAMA_REPO_LU>",
    ```

2.  **Tambahkan Scripts:** (Di dalam object `"scripts"`)
    ```json
    "scripts": {
      // ... script lain
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
    *   `predeploy`: Jalan otomatis sebelum deploy (buat nge-build dulu).
    *   `deploy`: Jalanin package `gh-pages` buat upload folder `dist`.

## Step 3: Config `vite.config.js`
Buka file `vite.config.js`, tambahkan properti `base`. Ini biar asset (css/js) gak 404 pas di-load.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/<NAMA_REPO_LU>/", // <--- TAMBAHIN INI (Contoh: "/anti-porto/")
})
```

## Step 4: Settings di GitHub
1.  Push semua kode lu ke GitHub dulu:
    ```bash
    git add .
    git commit -m "Siap deploy"
    git push origin main
    ```
2.  Pergi ke halaman repository lu di GitHub.
3.  Klik tab **Settings** > Pilih menu **Pages** di sidebar kiri.
4.  Pastikan *Source* diatur ke **Deploy from a branch**.
5.  (Nanti setelah jalanin Step 5, balik ke sini buat pastiin branch-nya terpilih `gh-pages`).

## Step 5: Eksekusi Deploy 🚀
Ketik mantra sakti ini di terminal:

```bash
npm run deploy
```

Tunggu sebentar. `gh-pages` bakal nge-build project lu dan nge-push ke branch `gh-pages`.
Kalau sukses ada tulisan "Published".

## Step 6: Cek Website
Balik ke **Settings > Pages** di GitHub. Tunggu beberapa menit, nanti bakal hijau dan ada link website lu. Klik dan pamerin ke temen lu! 🎉
