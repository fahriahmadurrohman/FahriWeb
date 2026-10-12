# Personal Website & Interactive Portfolio

Website portfolio pribadi yang dibuat dengan HTML, CSS, dan Vanilla JavaScript. Project ini dibuat untuk membantu pemula memahami bagaimana struktur HTML, styling CSS, dan interaksi JavaScript dapat bekerja bersama.

## Tujuan project

- Menampilkan profil pribadi dan deskripsi singkat.
- Menampilkan minat, hobi, dan perjalanan belajar.
- Menyediakan fitur to-do list interaktif dengan localStorage.
- Menyediakan playlist musik favorit dalam bentuk data yang mudah diubah.
- Menjadi contoh portfolio personal yang dapat dikembangkan ke tahap berikutnya.

## Struktur folder

```text
personal-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── todo.js
│   └── music.js
├── assets/
│   ├── images/
│   └── icons/
├── README.md
└── .gitignore (opsional)
```

## Cara menjalankan

1. Buka folder project di VS Code.
2. Jalankan extension Live Server atau buka file `index.html` menggunakan browser.
3. Jika Anda memerlukan server lokal untuk browser modern, jalankan perintah berikut di folder project:

```bash
python -m http.server 8000
```

Lalu buka http://localhost:8000.

## Fitur yang sudah dibuat

### 1. Hero section
Tujuannya adalah memberi identitas awal pada website. Di sini terdapat nama, status mahasiswa, deskripsi singkat, dan tombol navigasi.

Konsep JavaScript yang dipakai: tidak terlalu banyak. Yang paling penting adalah DOM dan navigasi anchor (`href="#about"`). HTML menyediakan struktur, CSS mengatur desain, dan JavaScript bisa digunakan nanti untuk menambahkan efek atau mengubah konten.

### 2. About section
Tujuannya adalah menceritakan diri, hobi, minat teknologi, serta perjalanan belajar.

Konsep yang dibahas: struktur data sederhana (object/array) tidak selalu diperlukan di sini, tetapi kita menekankan bahwa konten dapat dipisahkan dari layout. Di tahap awal, teks ditulis langsung ke HTML agar mudah dibaca pemula.

### 3. To-do list
Tujuannya adalah belajar JavaScript secara langsung melalui interaksi pengguna.

Konsep yang diperlukan:

- Event listener: cara menangkap kejadian seperti klik dan submit.
- Event handling: aksi yang dilakukan saat event terjadi.
- DOM manipulation: menambahkan, menghapus, dan mengubah elemen HTML.
- Array: digunakan untuk menyimpan daftar tugas.
- Object: tiap tugas bisa berupa object `{ id, text, completed }`.
- JSON.stringify: mengubah array/object menjadi string agar bisa disimpan di localStorage.
- JSON.parse: mengubah string dari localStorage menjadi array/object yang bisa dipakai JavaScript.
- localStorage: penyimpanan data di browser yang bertahan walau halaman direfresh.

Alur logika sebelum menulis kode:

1. Ambil nilai input pengguna.
2. Validasi input agar tidak kosong.
3. Masukkan tugas ke array.
4. Tampilkan tugas ke halaman.
5. Jika checkbox dicentang, ubah status selesai.
6. Jika tombol hapus ditekan, hapus tugas dari array.
7. Simpan data ke localStorage.
8. Muat data saat halaman dibuka.

### 4. Favorite music playlist
Tujuannya adalah menampilkan data lagu dalam format yang mudah diubah. Data lagu dibuat terpisah dari tampilan supaya saat ingin mengganti judul lagu atau artis, kita tidak harus mengubah banyak bagian HTML.

Konsep yang digunakan:

- Array of objects.
- Looping menggunakan `forEach`.
- DOM manipulation untuk membuat elemen baru.
- `textContent` untuk menampilkan teks secara aman.

### 5. Contact section
Tujuannya adalah menyiapkan placeholder kontak. Data ini bisa diganti nanti dengan email, GitHub, atau media sosial yang sebenarnya.

## Penjelasan hubungan HTML, CSS, dan JavaScript

- HTML adalah struktur halaman. Misalnya: hero, tentang, to-do, kontak.
- CSS adalah tampilan. Misalnya: warna gelap, jarak, ukuran, responsif, hover.
- JavaScript adalah interaksi. Misalnya: menambah tugas, menandai selesai, memperbarui DOM, menyimpan data.

Semakin sering Anda membiasakan diri membaca ketiga komponen ini, semakin mudah memahami cara kerja web.

## Catatan belajar

### Event listener
Event listener adalah cara JavaScript menunggu kejadian tertentu. Contoh: "ketika form dikirim, maka jalankan fungsi tambah tugas".

### DOM manipulation
DOM adalah struktur HTML yang ada di browser. Dengan JavaScript, kita bisa membaca, menambah, memperbarui, dan menghapus elemen.

### Array dan object
Array adalah daftar seperti `['membaca', 'belajar', 'ngoding']`. Object adalah data yang lebih terstruktur seperti `{ id: 1, text: 'Belajar JavaScript', completed: false }`.

### JSON.stringify dan JSON.parse

- `JSON.stringify(objek)` mengubah data JavaScript menjadi string.
- `JSON.parse(string)` mengubah string menjadi data JavaScript lagi.

Ini penting saat menyimpan ke localStorage karena localStorage hanya bisa menyimpan string.

### localStorage
`localStorage` adalah tempat penyimpanan di browser. Data yang disimpan akan tetap ada sampai dihapus. Ini lebih cocok untuk data kecil seperti daftar tugas.

## Latihan kecil

1. Tambahkan satu tugas baru dengan nama "Membuat halaman profil" dan pastikan tampil di daftar.
2. Ubah teks pada `placeholder` atau tombol agar lebih sesuai dengan gaya Anda.
3. Tambahkan satu lagu baru ke array playlist dan pastikan tampil di halaman.
4. Coba tambahkan fitur "Hapus semua tugas selesai" sebagai latihan lanjutan.

## Rencana pengembangan berikutnya

- Fitur pencarian lagu.
- Kategori tugas (pekerjaan, belajar, pribadi).
- Tema terang dan gelap.
- Filter to-do: semua, selesai, belum selesai.
- Backend sederhana di masa depan untuk data yang lebih kompleks.

## Kesimpulan

Project ini dibuat bukan hanya untuk hasil akhir, tetapi juga untuk memahami logika yang ada di balik website. Fokus utama adalah memahami alur sederhana: HTML sebagai struktur, CSS sebagai gaya, JavaScript sebagai interaksi, dan localStorage sebagai penyimpanan data browser.
