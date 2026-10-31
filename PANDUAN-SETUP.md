# AIO Store — Katalog Digital Flipbook

## Tampilan untuk customer

Website tampil seperti buku digital: di HP **satu halaman**; di laptop **dua halaman**. Geser jari atau tekan tombol panah untuk membalik halaman. Ketuk flyer untuk memperbesar atau download JPEG. Tombol **Bagikan katalog ke WA** membuka WhatsApp dan menyisipkan link katalog. Tautan yang dibagikan bisa diakses siapa saja.

## Instal di GitHub Pages

1. Buka https://github.com/new lalu buat repository bernama `aio-katalog-flyer`, pilih **Public**, klik **Create repository**. Kalau repository lama `aio-katalog-flyer` sudah dibuat, pakai yang ada.
2. Download dan **extract** ZIP ini. Di repository buka **Add file > Upload files**, lalu upload **isi folder**, bukan folder pembungkusnya. Pastikan `index.html` dan `_config.yml` ada di root, serta folder `flyers` dan `assets` ikut terupload.
3. Jika sebelumnya sudah upload versi katalog galeri, timpa file `index.html` dan `_config.yml` dengan versi baru. File lama di folder `assets` boleh tetap ada, tetapi tidak dipakai.
4. Pilih **Commit changes**.
5. Buka **Settings > Pages**, pada **Build and deployment** pilih **Deploy from a branch**, branch **main**, folder **/(root)**, lalu **Save**.
6. Buka **Visit site**, biasanya di alamat `https://USERNAME.github.io/aio-katalog-flyer/`. GitHub Pages kadang butuh beberapa menit untuk menyelesaikan deploy. Cek tab **Actions** untuk status.

## Ganti dan tambah flyer JPEG

1. Masuk repository > folder `flyers` > **Add file > Upload files**.
2. Upload flyer `.jpg` atau `.jpeg`, kemudian **Commit changes**.
3. Katalog otomatis mendeteksi semua JPEG di `flyers` pada build berikutnya. **Tidak perlu mengubah HTML, JSON, atau JavaScript**.
4. Urutan buku berdasarkan nama file secara alfabetis. Gunakan `01__flyer-tv.jpg`, `02__flyer-ac.jpg`, `03__flyer-kulkas.jpg` dan seterusnya agar halaman sesuai urutan.
5. Hapus file contoh `01__contoh-flyer.jpg` dan upload flyer asli sebelum membagikan ke customer.
6. Setelah GitHub Pages selesai deploy, refresh browser untuk melihat perubahan.

**Penting:** hanya `.jpg` dan `.jpeg` dari folder `flyers` yang otomatis dimasukkan. Gunakan gambar vertikal (portrait) dengan lebar sekitar 1200–1600px agar terbaca di HP. Hindari JPEG terlalu besar supaya halaman cepat dibuka. Semua flyer dan isi website GitHub Pages ini bersifat **publik**, jangan unggah informasi rahasia.

## Cara share ke WhatsApp

Dari HP, buka situs katalog lalu klik **Bagikan katalog ke WA**. Kamu juga bisa salin URL dan kirim manual lewat WhatsApp. Saat customer mengetuk URL, katalog terbuka seperti buku. Tombol di website juga mempermudah pelanggan membagikan ke orang lain.

## Preview WhatsApp

Website dilengkapi metadata Open Graph dan file `assets/preview-wa.jpg` agar WhatsApp dapat menampilkan preview saat membaca tautan publik. Tampilan preview dan waktunya diperbarui ditentukan oleh cache WhatsApp. Kalau URL baru belum menghasilkan thumbnail, pastikan website sudah public dan dapat dibuka dari HP, kemudian coba kirim lagi setelah deploy.

## Tidak perlu server atau database

Katalog ini berisi HTML/Jekyll + gambar saja. Tidak memakai login, checkout, API, database, atau biaya hosting terpisah pada GitHub Pages untuk repository publik.
