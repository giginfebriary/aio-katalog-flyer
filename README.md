# AIO Store — Katalog Flyer Online

Katalog JPEG statis untuk **GitHub Pages**. Cukup unggah gambar baru ke folder `flyers/`: kartu katalog, kategori, dan pencarian akan terbentuk otomatis saat GitHub Pages selesai build.

**Baca `PANDUAN-SETUP.md` untuk langkah klik demi klik (tanpa command line).**

## Nama file yang disarankan

- `tv__promo-samsung-november.jpg` → kategori TV & Audio, judul Promo Samsung November.
- `ac__promo-sharp-1-pk.jpeg` → kategori AC, judul Promo Sharp 1 Pk.
- `kulkas__promo-kulkas-lg.jpg` → kategori Kulkas.
- `mesin-cuci__promo-front-loading.jpg` → kategori Mesin Cuci.
- `promo__promo-akhir-tahun.jpg` → kategori Promo Spesial.
- `flyer-tanpa-kategori.jpg` → kategori Lainnya.

Kategori tambahan otomatis dikenali berdasarkan teks sebelum `__`. Gunakan huruf kecil, tanpa spasi, dan tanda hubung `-`. Format yang diterima: JPG, JPEG, PNG, WEBP.

## Pengaturan

- `_config.yml` berisi nama website dan `baseurl` (`/aio-katalog-flyer`).
- `assets/style.css` berisi desain dan warna.
- `assets/app.js` berisi pencarian, filter, galeri layar penuh, unduh, dan bagikan.

Tidak perlu database, server, API token, ataupun biaya hosting pada GitHub Pages untuk repository publik.

**Catatan:** Situs statis ini tidak menyediakan upload langsung di halaman katalog. Upload/replace dilakukan lewat repository GitHub. Gambar beserta kode situs bersifat publik. Link download menggunakan atribusi `download` pada tautan gambar; browser tertentu dapat membuka gambar dahulu, lalu pengguna menyimpannya secara manual.
