Link Demo (GitHub Pages): https://malllzz.github.io/mood-check/

Prototipe Fitur "Mood Check-In" - Emergencyy Call

Prototipe ini dibuat sebagai bagian dari proses seleksi internship Front-End Engineer di Emergencyy Call. Tujuannya adalah untuk mendemonstrasikan user flow sederhana dari fitur "Mood Check-In" sesuai dengan skenario yang diberikan.

1. Arsitektur Sederhana & Alasan Pemilihan Framework

Aplikasi ini adalah SPA (Single Page Application) sederhana yang berfokus pada UI/UX, dibangun menggunakan ReactJS dan Tailwind CSS. React dipilih karena manajemen state yang efisien (useState), arsitektur berbasis komponen (RecommendationCard), dan conditional rendering untuk mengubah tampilan. Serta ReactJS memiliki ekosistem yang besar sehingga relevan untuk pengembangan skill di internship ini. Tailwind CSS dipilih untuk prototyping yang cepat dan konsistensi desain melalui pendekatan utility-first dan prefix responsive.

2. Penjelasan Logika State Management dan Alur Interaksi

Logika state dikelola oleh hook useState. Tiga state utama melacak mood yang dipilih (selectedMood), teks opsional (feelingText), dan status submit (isSubmitted). Alurnya interaksinya yaitu pengguna memilih mood (mengaktifkan tombol submit), lalu menekan submit. Hal tersebut akan mengubah state isSubmitted menjadi true, yang secara otomatis merender ulang UI untuk menampilkan halaman sukses dan card rekomendasi.

3. Pendekatan Desain untuk User Comfort & Mental Wellness

Desain prototipe ini mendukung kenyamanan pengguna dengan palet warna yang menenangkan sesuai instruksi yaitu #F5F6FA, #FFFFFF, #4D90FE. Interaksi dibuat sederhana (satu klik emoji) dan menggunakan bahasa yang empatik untuk emberikan kesan suportif dan memvalidasi perasaan pengguna. Penggunaan whitespace yang cukup mencegah UI terasa sesak, dan akses cepat ke bantuan ("Bicara dengan AI" / "Jadwalkan Sesi") setelah submit memberikan rasa aman kepada pengguna.
