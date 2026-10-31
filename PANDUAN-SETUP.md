# PANDUAN SETUP — AIO Katalog Flyer di GitHub Pages

## A. Buat repository GitHub

1. Masuk ke https://github.com/new
2. **Repository name:** `aio-katalog-flyer` (wajib nama ini, sesuai `_config.yml`).
3. Pilih **Public** (dibutuhkan pada GitHub Free).
4. Klik **Create repository**. Hindari membuat README otomatis agar tidak bentrok saat unggah.

## B. Upload paket website — tanpa terminal

1. Unduh dan **extract** file ZIP `aio-katalog-flyer.zip` di komputer.
2. Buka repository `aio-katalog-flyer` yang baru dibuat.
3. Klik **Add file > Upload files**.
4. Drag **seluruh isi** folder `aio-katalog-flyer` ke area upload, bukan folder pembungkusnya: `index.html`, `_config.yml`, `README.md`, `PANDUAN-SETUP.md`, folder `assets` dan `flyers`. Pastikan struktur folder terjaga. GitHub mendukung drag-and-drop folder beserta isi pada browser yang mendukung.
5. Klik **Commit changes**. Pastikan branch `main`.

Jika drag folder gagal, unggah lewat halaman file per folder atau gunakan GitHub Desktop. Terpenting: `index.html` dan `_config.yml` berada di **root repository**.

## C. Nyalakan GitHub Pages

1. Di repository, klik **Settings > Pages**.
2. Bagian **Build and deployment > Source** pilih **Deploy from a branch**.
3. **Branch:** `main`. **Folder:** `/(root)`.
4. Klik **Save**.
5. Setelah build berhasil, klik **Visit site**. Alamatnya akan berbentuk: `https://USERNAME.github.io/aio-katalog-flyer/`.
6. Jika belum tampil, cek menu **Actions** untuk status build. Publikasi dapat memerlukan beberapa menit.

## D. Tambah/ubah flyer JPEG kapan pun

1. Buka repository > folder `flyers`.
2. Klik **Add file > Upload files**.
3. Pilih gambar `.jpg` atau `.jpeg`. Contoh: `ac__promo-ac-sharp.jpg`.
4. Klik **Commit changes**.
5. GitHub Pages otomatis build ulang. Refresh website setelah deployment selesai.
6. Hapus `tv__contoh-flyer.jpg` sebelum membagikan katalog ke pelanggan.

### Kategori otomatis dari nama file

`tv__` = TV & Audio | `ac__` = AC | `kulkas__` = Kulkas | `mesin-cuci__` = Mesin Cuci | `promo__` = Promo Spesial.

Teks sesudah `__` adalah judul. Misal `kulkas__promo-lg-november.jpg` akan tampil sebagai **Promo Lg November** di kategori **Kulkas**.

**Jika tidak ingin kategori**, nama file cukup `flyer-november.jpg`; otomatis berada di kategori **Lainnya**.

### Ubah gambar

- Ganti file lama dengan nama yang **persis sama** agar link tidak berubah (GitHub akan membuat commit terbaru).
- Atau hapus gambar lama dan upload gambar baru; link lama mungkin tidak berlaku.

### Batasan dan keamanan

- GitHub Pages membuat website **publik**. Jangan unggah data rahasia.
- Untuk katalog yang hanya memuat JPEG, gunakan resolusi yang tetap terbaca, umumnya lebar 1200–1600 px dan ukuran file ideal di bawah sekitar 2 MB agar cepat di HP. Ukuran ini rekomendasi, bukan batas layanan.
- File flyer langsung dapat diakses melalui URL gambar; website tidak menyimpan data pelanggan.
- Jika membuat repository dengan nama lain, sesuaikan `baseurl` di `_config.yml` menjadi `/nama-repository-lain` sebelum publish.
- Jangan upload file `.nojekyll` karena website ini menggunakan Liquid/Jekyll untuk menemukan semua flyer otomatis.
