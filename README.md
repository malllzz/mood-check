Prototipe Fitur "Mood Check-In" - Emergency Call

Prototipe ini dibuat sebagai bagian dari proses seleksi internship Front-End Engineer di Emergency Call. Tujuannya adalah untuk mendemonstrasikan user flow sederhana dari fitur "Mood Check-In" sesuai dengan skenario yang diberikan.

1. Arsitektur Sederhana & Alasan Pemilihan Framework
Arsitektur:
Aplikasi ini adalah Single Page Application (SPA) sederhana yang dibuat dalam satu komponen React utama (App.jsx). Aplikasi ini tidak memiliki backend dan hanya berfokus pada interaksi antarmuka pengguna (UI/UX).

Framework: ReactJS dan Tailwind CSS
Saya memilih ReactJS karena:
- Pengelolaan State yang Efisien: React memudahkan pengelolaan state UI yang dinamis. Untuk prototipe ini, useState sudah sangat cukup untuk melacak mood yang dipilih, teks pengguna, dan status submit form.
- Berbasis Komponen: Kemampuan React untuk memecah UI menjadi komponen-komponen kecil (seperti RecommendationCard) membuat kode lebih bersih, mudah dibaca, dan mudah dikelola.
- Conditional Rendering: React memiliki kemampuan yang baik dalam menampilkan UI yang berbeda berdasarkan state. Hal tersebut digunakan untuk beralih antara tampilan form check-in dan tampilan sukses/rekomendasi setelah pengguna menekan submit.
- Ekosistem: React memiliki ekosistem yang besar dan merupakan skillset yang relevan dan ingin saya kembangkan lebih dalam selama masa internship di Emergency Call.

Saya memilih Tailwind CSS karena:
- Prototyping Cepat: Pendekatan utility-first memungkinkan untuk membangun antarmuka kustom dengan cepat tanpa harus berpindah-pindah ke file CSS terpisah dan konsistensi desain dapat lebih terjaga.
- Responsif: Desain responsif lebih mudah diimplementasikan menggunakan prefix bawaan Tailwind (seperti sm:, max-w-md).

2. Penjelasan Logika State Management dan Alur Interaksi
Logika state aplikasi ini sangat terpusat dan dikelola oleh hook useState bawaan React:
1) selectedMood (tipe: object | null):
- Menyimpan seluruh objek mood yang dipilih pengguna (misal: { emoji: '😊', label: 'Senang' }).
- Bernilai null saat awal atau setelah di-reset.
- State ini digunakan untuk memberi highlight visual pada emoji yang dipilih dan sebagai validasi untuk mengaktifkan tombol submit.

2) feelingText (tipe: string):
- Menyimpan teks yang diketik pengguna di dalam <textarea>.
- Merupakan controlled component standar.

3) isSubmitted (tipe: boolean):
- Merupakan state utama yang mengontrol alur aplikasi.
- false (default): Menampilkan form "Mood Check-In".
- true: Menampilkan notifikasi sukses dan placeholder "Recommendation Cards".
- Nilainya diubah menjadi true di dalam handler handleSubmit.

Alur Interaksi:
1) Pengguna memilih emoji. State selectedMood diperbarui.
2) Tombol "Submit" menjadi aktif (disabled={!selectedMood}).
3) Pengguna (opsional) mengisi textarea. State feelingText diperbarui setiap kali ada ketikan.
4) Pengguna menekan "Submit".
5) Fungsi handleSubmit mengubah isSubmitted menjadi true.
6) React secara otomatis me-render ulang UI untuk menampilkan tampilan "Sukses" karena adanya conditional rendering ({isSubmitted ? ... : ...}).

3. Pendekatan Desain untuk User Comfort & Mental Wellness
Desain prototipe ini dibuat untuk mendukung kenyamanan pengguna, terutama mereka yang mungkin sedang merasa cemas:
1) Palet Warna yang Menenangkan: Sesuai instruksi, aplikasi menggunakan warna dominan abu-abu muda (#F5F6FA) dan putih (#FFFFFF) untuk menciptakan kesan bersih dan tenang. Warna biru (#4D90FE) hanya digunakan sebagai aksen untuk tombol aksi utama, memberikan arahan yang jelas tanpa terlalu mencolok.
2) Interaksi yang Jelas & Sederhana: Alurnya dibuat linear. Pengguna hanya perlu satu klik (emoji) untuk bisa lanjut. Penggunaan emoji yang besar dan familiar mengurangi beban kognitif (pengguna tidak perlu membaca banyak teks untuk mengidentifikasi perasaan).
3) Bahasa yang Empatik: Teks seperti "Bagaimana perasaanmu hari ini?" dan "Terima kasih telah mengungkapkan!" dipilih untuk memberikan kesan suportif dan memvalidasi perasaan pengguna.
4) Banyak Whitespace (Ruang Kosong): Desain kartu utama memiliki banyak padding dan margin (ruang kosong) di sekeliling elemen. Hal tersebut agar mencegah UI terasa sempit atau penuh sesak, yang bisa memicu kecemasan.
5) Akses Cepat ke Bantuan: Sesuai skenario, setelah pengguna selesai check-in, mereka tidak dibiarkan "menggantung". Aplikasi langsung memberikan placeholder aksi yang jelas ("Bicara dengan AI" / "Jadwalkan Sesi"), memberikan rasa aman bahwa bantuan selalu tersedia jika diperlukan.