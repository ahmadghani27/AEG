# 🐳 DevOps: Cara Jalanin Mesin Ini

Yo, selamat datang di dapur rekaman. File ini bakal jelasin gimana cara project ini "dibungkus" dan "dikirim" pake teknologi container biar bisa jalan di mana aja tanpa alasan "di laptop gue jalan kok".

## 🏠 1. Cara Run di Laptop Sendiri (Lokal)

Ada dua cara buat jalanin mode production di laptop lu. Pilih salah satu aja, gak usah maruk.

### Cara Gampang (Pake Docker Compose)
Ini cara paling santuy. Cukup ketik satu mantra ini di terminal:

```bash
docker-compose up -d --build
```
*   `up`: Bangunin container.
*   `-d`: Detached (jalan di background, biar terminal lu gak keblok).
*   `--build`: Paksa build ulang imagenya biar fresh.

Terus buka browser, gas ke: `http://localhost:8080`.

### Cara Manual (Hardcore Mode)
Kalau lu hobi ngetik panjang:

1.  **Build Image:**
    ```bash
    docker build -t anti-porto-image .
    ```
2.  **Run Container:**
    ```bash
    docker run -d -p 8080:80 anti-porto-image
    ```
    *(Artinya: "Woy Docker, jalanin image tadi, sambungin port 8080 laptop gue ke port 80 punya lu")*

## 🧑‍🍳 2. Bedah Dockerfile (Multi-stage Build)

Kita pake teknik **Multi-stage build**. Bayangin kayak restoran:

*   **Stage 1 (Dapur Kotor):** 
    *   Di sini si koki (Node.js) masak code lu (`npm install` & `npm run build`).
    *   Dapurnya berantakan, banyak kulit bawang (node_modules dev dependencies) berserakan.
    *   Kita gak mau bawa sampah dapur ke meja makan kan?

*   **Stage 2 (Meja Saji):**
    *   Di sini pelayan (Nginx) cuma bawa piring bersih yang udah jadi makanan enak (folder `dist`).
    *   Hasilnya? Image container lu jadi super kecil dan ringan, karena gak bawa sampah "kulit bawang" tadi.

## 🤖 3. Alur CI/CD (Robot Otomatis)

Kita udah pasang robot penjaga di GitHub (`.github/workflows/ci-cd.yml`). Gini kerjanya:

1.  **Trigger:** Lu nge-push code baru ke branch `main`.
2.  **Robot Bangun:** Si robot Actions langsung melek.
3.  **Job: Linting:** Dia ngecek dulu, "Ini code ada yang typo atau ngelanggar aturan gak?". Kalau ada, dia teriak (error) dan stop proses.
4.  **Job: Build & Push:**
    *   Kalau code aman, dia bakal masakin (build Docker image).
    *   Terus dia bungkus rapi.
    *   Terakhir, paketnya dikirim ke **GHCR** (GitHub Container Registry) biar bisa diambil server mana aja.

Simpelnya: **Push Code -> Robot Cek -> Robot Bungkus -> Siap Deploy.**

## 🚑 4. Troubleshooting (P3K)

**Masalah:** "Port is already allocated"
**Solusi:** Ada aplikasi lain yang pake port 8080.
*   Cek siapa pelakunya, atau ganti port di `docker-compose.yml` (misal jadi `8081:80`).

**Masalah:** "Refesh halaman selain Home kok error 404?"
**Solusi:** Itu masalah SPA (Single Page App). Pastikan lu udah copy `nginx.conf` kita. Config itu tugasnya bilang ke server: *"Eh, kalau ada yang nyasar minta file aneh-aneh, balikin aja ke index.html biar React yang urus routingnya."*

---
*Happy Shipping!* 🚢
