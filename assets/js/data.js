window.SILabData = (() => {
  const lesson = ({
    id,
    course,
    title,
    icon,
    color = "blue",
    duration,
    definition,
    keyPoints,
    goal,
    problem,
    analogy,
    explanation,
    concepts,
    campusNotes,
    codeLabel,
    code,
    lineNotes,
    exercise,
    recall,
    debug,
    quiz
  }) => ({
    id,
    course,
    title,
    icon,
    color,
    duration,
    definition,
    keyPoints,
    goal,
    problem,
    analogy,
    explanation,
    concepts,
    campusNotes,
    codeLabel,
    code,
    lineNotes,
    exercise,
    recall,
    debug,
    quiz
  });

  const lessons = [
    lesson({
      id: "pancasila-dasar-negara",
      course: "Pendidikan Pancasila",
      title: "Pancasila sebagai dasar negara dan ideologi",
      icon: "bi-bank",
      color: "blue",
      duration: "18 menit",
      definition:
        "Pancasila adalah dasar negara, pandangan hidup, dan ideologi bangsa Indonesia yang menjadi sumber nilai bagi hukum, kebijakan, dan perilaku warga negara.",
      keyPoints: [
        "Ketuhanan Yang Maha Esa",
        "Kemanusiaan yang adil dan beradab",
        "Persatuan Indonesia",
        "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
        "Keadilan sosial bagi seluruh rakyat Indonesia"
      ],
      goal: "Memahami kedudukan Pancasila sebagai dasar negara, pandangan hidup, dan ideologi terbuka.",
      problem:
        "Mahasiswa sering menghafal lima sila, tetapi belum mampu menjelaskan dampaknya pada hukum, etika publik, dan kehidupan kampus.",
      analogy:
        "Pancasila seperti sistem operasi bangsa. Undang-undang, kebijakan, dan perilaku warga berjalan lebih stabil saat mengikuti nilai dasarnya.",
      explanation:
        "Pancasila menjadi sumber nilai bagi penyelenggaraan negara. Sebagai ideologi terbuka, nilainya tetap, tetapi penerapannya dapat menyesuaikan perkembangan ilmu, teknologi, ekonomi, dan budaya.",
      concepts: [
        { term: "Dasar negara", detail: "Pancasila menjadi landasan penyusunan hukum dan arah penyelenggaraan negara." },
        { term: "Pandangan hidup", detail: "Nilai Pancasila menjadi pedoman warga dalam mengambil keputusan sehari-hari." },
        { term: "Ideologi terbuka", detail: "Nilai dasarnya tidak berubah, sedangkan cara penerapannya adaptif terhadap zaman." }
      ],
      campusNotes: [
        "Jawaban ujian sebaiknya tidak berhenti pada hafalan sila, tetapi menunjukkan hubungan antara nilai, kebijakan, dan contoh nyata.",
        "Gunakan istilah nilai dasar, nilai instrumental, dan nilai praksis saat membahas penerapan Pancasila.",
        "Dalam diskusi akademik, pisahkan fakta kasus, nilai Pancasila yang relevan, dan argumentasi solusinya."
      ],
      codeLabel: "kerangka-analisis.md",
      code: `Topik: Etika penggunaan media sosial mahasiswa

Fakta:
- Informasi palsu menyebar cepat di grup kelas.
- Sebagian mahasiswa membagikan tanpa memeriksa sumber.

Nilai Pancasila:
- Sila 2: menghormati martabat orang lain.
- Sila 3: menjaga persatuan dan tidak memecah belah.
- Sila 5: bertanggung jawab terhadap dampak sosial.

Sikap:
- Cek sumber.
- Hindari menyebarkan data pribadi.
- Koreksi informasi dengan bahasa yang santun.`,
      lineNotes: [
        "Mulai dari fakta agar analisis tidak berubah menjadi opini kosong.",
        "Hubungkan fakta dengan sila yang relevan, bukan semua sila secara otomatis.",
        "Akhiri dengan sikap konkret yang bisa dilakukan mahasiswa."
      ],
      exercise: "Ambil satu kasus di lingkungan kampus, lalu buat analisis nilai Pancasila memakai format fakta, nilai, dan sikap.",
      recall: "Jelaskan perbedaan Pancasila sebagai dasar negara dan Pancasila sebagai pandangan hidup.",
      debug: {
        question: "Apa kelemahan jawaban: 'Pancasila penting karena harus dihafal dan selalu dibaca saat upacara'?",
        hint: "Cari apakah jawaban itu sudah menjelaskan fungsi Pancasila dalam kehidupan bernegara.",
        solution:
          "Jawaban tersebut terlalu ritual dan belum konseptual. Pancasila perlu dijelaskan sebagai sumber nilai bagi hukum, kebijakan, dan perilaku warga negara."
      },
      quiz: {
        question: "Makna Pancasila sebagai ideologi terbuka adalah...",
        options: [
          "Nilai dasarnya dapat diganti kapan saja",
          "Nilai dasarnya tetap, penerapannya dapat menyesuaikan zaman",
          "Pancasila hanya berlaku dalam upacara resmi",
          "Pancasila tidak berhubungan dengan hukum"
        ],
        answer: 1,
        explanation: "Ideologi terbuka menjaga nilai dasar, tetapi cara penerapannya dapat berkembang sesuai konteks."
      }
    }),
    lesson({
      id: "pancasila-sejarah-konstitusi",
      course: "Pendidikan Pancasila",
      title: "Sejarah perumusan dan kedudukan konstitusional",
      icon: "bi-journal-richtext",
      color: "amber",
      duration: "20 menit",
      definition:
        "Sejarah perumusan Pancasila adalah proses lahirnya kesepakatan dasar negara melalui sidang, gagasan tokoh, dan kompromi kebangsaan menjelang kemerdekaan.",
      goal: "Menjelaskan proses perumusan Pancasila dan hubungannya dengan Pembukaan UUD 1945.",
      problem:
        "Sejarah perumusan sering dipahami sebagai urutan tanggal, padahal yang lebih penting adalah gagasan dan kompromi kebangsaan di baliknya.",
      analogy:
        "Perumusan Pancasila seperti menyusun kontrak besar bersama. Banyak kepentingan bertemu, lalu disepakati prinsip yang bisa menaungi semua pihak.",
      explanation:
        "Pancasila lahir dari proses historis menjelang kemerdekaan. Nilainya ditempatkan dalam Pembukaan UUD 1945 sehingga menjadi landasan konstitusional negara Indonesia.",
      concepts: [
        { term: "BPUPKI dan PPKI", detail: "Forum penting dalam pembahasan dasar negara dan persiapan kemerdekaan." },
        { term: "Piagam Jakarta", detail: "Naskah historis yang menunjukkan dinamika kompromi para pendiri bangsa." },
        { term: "Pembukaan UUD 1945", detail: "Memuat rumusan Pancasila dan tujuan negara secara konstitusional." }
      ],
      campusNotes: [
        "Saat menjawab soal sejarah, hubungkan tokoh, forum, gagasan, dan alasan perubahan rumusan.",
        "Kedudukan Pancasila kuat karena berada dalam Pembukaan UUD 1945, bukan sekadar dokumen politik biasa.",
        "Gunakan kronologi hanya sebagai dasar untuk menjelaskan makna kebangsaan."
      ],
      codeLabel: "timeline-pancasila.md",
      code: `29 Mei - 1 Juni 1945
BPUPKI membahas dasar negara.

22 Juni 1945
Panitia Sembilan menyusun Piagam Jakarta.

18 Agustus 1945
PPKI menetapkan UUD 1945 dan rumusan Pancasila dalam Pembukaan.

Kesimpulan:
Pancasila adalah hasil dialog, kompromi, dan kesepakatan nasional.`,
      lineNotes: [
        "Tanggal membantu menempatkan peristiwa secara runtut.",
        "Piagam Jakarta penting untuk memahami proses kompromi.",
        "18 Agustus 1945 menegaskan rumusan konstitusional yang dipakai negara."
      ],
      exercise: "Buat peta konsep yang menghubungkan BPUPKI, Panitia Sembilan, Piagam Jakarta, PPKI, dan Pembukaan UUD 1945.",
      recall: "Mengapa memahami kompromi dalam perumusan Pancasila penting untuk mahasiswa?",
      debug: {
        question: "Apa yang keliru dari pernyataan: 'Pancasila dibuat oleh satu orang saja sehingga tidak perlu diperdebatkan'?",
        hint: "Ingat bahwa proses perumusan melibatkan forum dan banyak gagasan.",
        solution:
          "Pernyataan itu menghapus proses kolektif. Pancasila lahir melalui dialog para pendiri bangsa, forum resmi, dan kompromi nasional."
      },
      quiz: {
        question: "Rumusan Pancasila yang berlaku secara konstitusional terdapat dalam...",
        options: ["Pembukaan UUD 1945", "Buku pelajaran sekolah", "Pidato kampanye", "Peraturan organisasi kampus"],
        answer: 0,
        explanation: "Rumusan Pancasila tercantum dalam Pembukaan UUD 1945."
      }
    }),
    lesson({
      id: "pancasila-etika-kampus",
      course: "Pendidikan Pancasila",
      title: "Etika warga negara di lingkungan kampus digital",
      icon: "bi-people",
      color: "green",
      duration: "16 menit",
      definition:
        "Etika warga negara adalah cara berpikir dan bertindak yang menunjukkan tanggung jawab, kejujuran, penghormatan, dan kepedulian terhadap orang lain dalam kehidupan bersama.",
      goal: "Menerapkan nilai Pancasila pada perilaku akademik, diskusi, organisasi, dan ruang digital.",
      problem:
        "Kampus modern memakai grup chat, LMS, media sosial, dan aplikasi kolaborasi. Nilai kewargaan harus tetap bekerja di ruang digital itu.",
      analogy:
        "Ruang digital kampus seperti aula besar. Walau tidak bertatap muka, setiap pesan tetap punya dampak sosial.",
      explanation:
        "Etika Pancasila di kampus terlihat dalam kejujuran akademik, penghormatan perbedaan, musyawarah, tanggung jawab digital, dan kepedulian pada keadilan.",
      concepts: [
        { term: "Integritas akademik", detail: "Tidak plagiarisme, tidak memalsukan data, dan mencantumkan sumber." },
        { term: "Musyawarah", detail: "Mengambil keputusan organisasi dengan dialog, bukan tekanan mayoritas semata." },
        { term: "Literasi digital", detail: "Memeriksa informasi, menjaga privasi, dan bertanggung jawab pada jejak digital." }
      ],
      campusNotes: [
        "Kasus kampus yang kuat untuk dianalisis: plagiarisme, perundungan digital, konflik organisasi, dan penyalahgunaan data.",
        "Gunakan bahasa akademik: tindakan, nilai yang dilanggar, dampak, dan rekomendasi.",
        "Nilai Pancasila tidak hanya normatif, tetapi bisa dipakai sebagai alat analisis masalah sosial."
      ],
      codeLabel: "rubrik-etika.md",
      code: `Rubrik analisis etika kampus

1. Apa tindakan yang terjadi?
2. Siapa pihak yang terdampak?
3. Nilai Pancasila apa yang relevan?
4. Risiko akademik dan sosialnya apa?
5. Sikap atau kebijakan apa yang lebih tepat?`,
      lineNotes: [
        "Pertanyaan pertama menjaga analisis tetap berbasis fakta.",
        "Pihak terdampak membantu melihat isu keadilan dan tanggung jawab.",
        "Rekomendasi membuat analisis berakhir pada tindakan."
      ],
      exercise: "Analisis kasus plagiarisme tugas kelompok dengan rubrik lima pertanyaan di atas.",
      recall: "Berikan contoh integritas akademik yang sesuai dengan nilai Pancasila.",
      debug: {
        question: "Mengapa 'asal tidak ketahuan dosen' bukan ukuran etika akademik?",
        hint: "Etika tidak hanya bergantung pada pengawasan.",
        solution:
          "Ukuran etika adalah tanggung jawab dan kejujuran, bukan sekadar takut sanksi. Integritas akademik tetap berlaku meskipun tidak sedang diawasi."
      },
      quiz: {
        question: "Contoh penerapan integritas akademik adalah...",
        options: ["Menyalin tugas teman", "Menghapus sumber kutipan", "Mencantumkan sumber data", "Membeli jawaban quiz"],
        answer: 2,
        explanation: "Mencantumkan sumber adalah bagian dari kejujuran akademik."
      }
    }),
    lesson({
      id: "pancasila-studi-kasus",
      course: "Pendidikan Pancasila",
      title: "Studi kasus: teknologi, data, dan keadilan sosial",
      icon: "bi-shield-check",
      color: "blue",
      duration: "22 menit",
      definition:
        "Etika teknologi dalam perspektif Pancasila adalah cara menilai dan merancang penggunaan data, aplikasi, dan layanan digital agar tetap manusiawi, adil, bertanggung jawab, dan tidak merugikan masyarakat.",
      goal: "Menganalisis masalah teknologi informasi dengan perspektif Pancasila.",
      problem:
        "Mahasiswa SI akan mengelola sistem, data, dan layanan digital. Keputusan teknis dapat memengaruhi keadilan, privasi, dan akses masyarakat.",
      analogy:
        "Sistem informasi seperti jalan raya digital. Desainnya bisa memudahkan semua orang atau hanya menguntungkan kelompok tertentu.",
      explanation:
        "Pancasila dapat menjadi kerangka etis untuk menilai sistem digital: manusia harus dihormati, masyarakat dijaga, keputusan perlu transparan, dan manfaat teknologi harus adil.",
      concepts: [
        { term: "Privasi data", detail: "Data pribadi harus dikumpulkan seperlunya, dilindungi, dan digunakan secara sah." },
        { term: "Akses setara", detail: "Layanan digital perlu memperhatikan pengguna dengan koneksi, perangkat, dan kemampuan berbeda." },
        { term: "Akuntabilitas", detail: "Pengelola sistem harus mampu menjelaskan keputusan, risiko, dan dampaknya." }
      ],
      campusNotes: [
        "Untuk mahasiswa SI, etika teknologi bukan materi tambahan; ia melekat pada desain sistem.",
        "Gunakan nilai kemanusiaan, persatuan, musyawarah, dan keadilan saat menilai fitur teknologi.",
        "Studi kasus profesional biasanya menuntut solusi: prosedur data, desain aksesibel, dan komunikasi risiko."
      ],
      codeLabel: "checklist-etika-si.md",
      code: `Checklist fitur aplikasi kampus

[ ] Data yang diminta benar-benar diperlukan.
[ ] Pengguna tahu untuk apa datanya dipakai.
[ ] Aplikasi tetap bisa dipakai di layar kecil.
[ ] Ada jalur bantuan saat pengguna gagal login.
[ ] Keputusan sistem bisa dijelaskan kepada pengguna.`,
      lineNotes: [
        "Data minimal mengurangi risiko penyalahgunaan.",
        "Transparansi membuat pengguna memahami konsekuensi.",
        "Aksesibilitas adalah bagian dari keadilan layanan digital."
      ],
      exercise: "Pilih satu aplikasi kampus, lalu nilai dengan checklist etika SI di atas.",
      recall: "Bagaimana sila kelima dapat diterapkan pada desain sistem informasi?",
      debug: {
        question: "Apa risiko dari aplikasi kampus yang memaksa semua mahasiswa memakai perangkat mahal?",
        hint: "Hubungkan dengan akses setara dan keadilan sosial.",
        solution:
          "Risikonya adalah ketimpangan akses. Sistem yang baik mempertimbangkan variasi perangkat, koneksi, dan kemampuan pengguna agar layanan tetap adil."
      },
      quiz: {
        question: "Dalam perspektif Pancasila, desain sistem informasi sebaiknya...",
        options: [
          "Mengutamakan fitur sebanyak mungkin tanpa melihat dampak",
          "Memperhatikan martabat manusia, akses, dan keadilan",
          "Mengumpulkan semua data agar terlihat lengkap",
          "Menutup semua informasi dari pengguna"
        ],
        answer: 1,
        explanation: "Nilai Pancasila menuntut teknologi yang manusiawi, bertanggung jawab, dan adil."
      }
    }),
    lesson({
      id: "english-reading",
      course: "Bahasa Inggris I",
      title: "Academic reading untuk teks teknologi",
      icon: "bi-book",
      color: "green",
      duration: "18 menit",
      definition:
        "Academic reading adalah keterampilan membaca teks akademik secara terarah untuk menemukan gagasan utama, detail penting, dan makna tersirat tanpa menerjemahkan semua kata.",
      goal: "Membaca teks akademik pendek dengan strategi skimming, scanning, dan inferensi makna.",
      problem:
        "Mahasiswa SI akan sering bertemu dokumentasi, artikel teknologi, dan paper berbahasa Inggris. Membaca kata demi kata membuat proses lambat.",
      analogy:
        "Membaca akademik seperti mencari rute di peta. Kamu tidak perlu melihat setiap rumah, tetapi harus tahu tujuan, jalan utama, dan tanda penting.",
      explanation:
        "Skimming dipakai untuk memahami ide umum. Scanning dipakai untuk mencari informasi spesifik. Inferensi membantu menebak makna dari konteks kalimat.",
      concepts: [
        { term: "Skimming", detail: "Membaca cepat judul, kalimat awal paragraf, dan kata kunci untuk menangkap topik." },
        { term: "Scanning", detail: "Mencari angka, istilah, nama, atau detail tertentu tanpa membaca semua bagian." },
        { term: "Context clues", detail: "Petunjuk makna dari kata sekitar, contoh, kontras, atau definisi dalam kalimat." }
      ],
      campusNotes: [
        "Saat membaca dokumentasi teknologi, cari purpose, requirements, steps, dan warnings.",
        "Catat vocabulary teknis dalam bentuk frasa, misalnya data privacy, user authentication, dan cloud storage.",
        "Jangan menerjemahkan seluruh teks sebelum tahu tujuan membaca."
      ],
      codeLabel: "reading-notes.txt",
      code: `Text: Cloud storage allows users to keep data on remote servers.

Skimming:
Topic = cloud storage
Main idea = users can store data outside local devices

Scanning:
Key term = remote servers
Benefit = access from different devices

Inference:
Remote means not located on the user's own device.`,
      lineNotes: [
        "Pisahkan topik dari detail agar catatan lebih rapi.",
        "Key term membantu vocabulary teknis.",
        "Inferensi memakai konteks, bukan tebak acak."
      ],
      exercise: "Cari satu paragraf dokumentasi teknologi, lalu buat catatan skimming, scanning, dan inference.",
      recall: "Kapan kamu memakai skimming dan kapan memakai scanning?",
      debug: {
        question: "Mengapa membaca dokumentasi dari awal sampai akhir tanpa tujuan sering tidak efektif?",
        hint: "Pikirkan perbedaan membaca untuk ide umum dan mencari detail.",
        solution:
          "Dokumentasi biasanya dipakai untuk kebutuhan spesifik. Tentukan dulu informasi yang dicari, lalu gunakan skimming atau scanning."
      },
      quiz: {
        question: "Strategi untuk mencari informasi spesifik seperti angka versi atau nama fitur adalah...",
        options: ["Skimming", "Scanning", "Memorizing", "Guessing without context"],
        answer: 1,
        explanation: "Scanning digunakan untuk mencari informasi spesifik secara cepat."
      }
    }),
    lesson({
      id: "english-grammar",
      course: "Bahasa Inggris I",
      title: "Grammar dasar: sentence pattern dan tenses",
      icon: "bi-type",
      color: "amber",
      duration: "20 menit",
      definition:
        "Grammar dasar adalah aturan penyusunan kata dalam kalimat agar subjek, kata kerja, objek, pelengkap, dan waktu kejadian tersampaikan dengan jelas.",
      goal: "Menyusun kalimat bahasa Inggris dasar dengan subjek, verb, object/complement, dan tenses yang tepat.",
      problem:
        "Banyak tulisan mahasiswa sulit dipahami bukan karena vocabulary kurang, tetapi karena pola kalimat dan tense tidak konsisten.",
      analogy:
        "Kalimat seperti struktur database sederhana. Jika kolom utamanya kosong, pembaca tidak tahu siapa melakukan apa.",
      explanation:
        "Kalimat bahasa Inggris akademik minimal memiliki subject dan verb. Simple present cocok untuk fakta umum, simple past untuk kejadian lampau, dan present continuous untuk aktivitas yang sedang berlangsung.",
      concepts: [
        { term: "Subject", detail: "Pelaku atau topik utama kalimat, misalnya the system, users, atau students." },
        { term: "Verb", detail: "Aksi atau keadaan, misalnya stores, analyzes, is, dan becomes." },
        { term: "Tense consistency", detail: "Gunakan tense secara konsisten sesuai waktu kejadian." }
      ],
      campusNotes: [
        "Dalam laporan praktikum, simple present sering dipakai untuk menjelaskan cara kerja sistem.",
        "Simple past dipakai untuk menjelaskan kegiatan yang sudah dilakukan dalam eksperimen.",
        "Hindari kalimat tanpa verb seperti 'The database in the server'. Tambahkan verb: 'The database is in the server'."
      ],
      codeLabel: "sentence-patterns.txt",
      code: `Subject + Verb + Object
The system stores student data.

Subject + Verb + Complement
The interface is simple.

Simple past for report activity
We tested the login feature yesterday.

Present continuous for current activity
The team is designing a prototype.`,
      lineNotes: [
        "Pola SVO menunjukkan pelaku, aksi, dan objek.",
        "Complement menjelaskan keadaan subjek.",
        "Tense dipilih berdasarkan waktu kegiatan."
      ],
      exercise: "Tulis lima kalimat tentang aplikasi kampus memakai subject, verb, dan object/complement yang jelas.",
      recall: "Apa perbedaan penggunaan simple present dan simple past dalam laporan teknologi?",
      debug: {
        question: "Apa yang kurang dari kalimat 'The application very useful for students'?",
        hint: "Cari verb atau linking verb.",
        solution: "Kalimat itu tidak memiliki verb. Bentuk yang benar: 'The application is very useful for students'."
      },
      quiz: {
        question: "Kalimat yang memiliki pola grammar paling tepat adalah...",
        options: [
          "The system store data yesterday",
          "The system stores data every day",
          "The system storing data every day",
          "The system data every day"
        ],
        answer: 1,
        explanation: "Subject tunggal 'the system' memakai verb 'stores' untuk simple present."
      }
    }),
    lesson({
      id: "english-writing",
      course: "Bahasa Inggris I",
      title: "Academic paragraph dan email profesional",
      icon: "bi-envelope-paper",
      color: "blue",
      duration: "22 menit",
      definition:
        "Academic writing adalah keterampilan menulis ide secara terstruktur, sedangkan email profesional adalah pesan resmi yang jelas tujuan, sopan, dan mudah ditindaklanjuti.",
      goal: "Menulis paragraf akademik singkat dan email profesional dengan struktur yang jelas.",
      problem:
        "Di kampus, mahasiswa perlu mengirim email ke dosen, menulis ringkasan, dan membuat paragraf laporan. Nada dan struktur menentukan profesionalitas.",
      analogy:
        "Paragraf akademik seperti mini argument. Ada klaim utama, bukti, penjelasan, lalu penutup.",
      explanation:
        "Paragraf yang baik memiliki topic sentence, supporting details, dan concluding sentence. Email profesional memiliki subject jelas, salam, tujuan, detail, penutup, dan identitas.",
      concepts: [
        { term: "Topic sentence", detail: "Kalimat pembuka yang menyatakan ide utama paragraf." },
        { term: "Supporting details", detail: "Data, alasan, contoh, atau penjelasan yang mendukung ide utama." },
        { term: "Professional tone", detail: "Bahasa sopan, langsung, dan tidak terlalu santai." }
      ],
      campusNotes: [
        "Subject email sebaiknya spesifik, misalnya 'Permission Request for Database Assignment Submission'.",
        "Paragraf akademik jangan hanya berisi opini; tambahkan alasan atau contoh.",
        "Gunakan connector sederhana seperti therefore, however, for example, dan in addition."
      ],
      codeLabel: "email-template.txt",
      code: `Subject: Request for Assignment Feedback

Dear Sir/Madam,

I am writing to ask for feedback on my database assignment.
I have attached the revised file and highlighted the parts I changed.

Thank you for your time.

Best regards,
Student Name
Information Systems - Semester 1`,
      lineNotes: [
        "Subject menjelaskan tujuan email sejak awal.",
        "Kalimat pembuka langsung menyebut keperluan.",
        "Penutup sopan dan identitas membantu dosen mengenali pengirim."
      ],
      exercise: "Buat email bahasa Inggris untuk meminta izin terlambat mengumpulkan tugas karena alasan yang jelas dan sopan.",
      recall: "Sebutkan tiga bagian utama paragraf akademik.",
      debug: {
        question: "Apa masalah dari email yang hanya berisi 'Sir, tugas saya telat. Please check.'?",
        hint: "Perhatikan subject, alasan, detail, dan nada profesional.",
        solution:
          "Email itu terlalu singkat dan kurang profesional. Tambahkan subject, salam, tujuan jelas, alasan, tindakan yang diminta, ucapan terima kasih, dan identitas."
      },
      quiz: {
        question: "Topic sentence berfungsi untuk...",
        options: ["Menutup paragraf", "Menyatakan ide utama paragraf", "Mencantumkan daftar pustaka", "Mengganti semua detail"],
        answer: 1,
        explanation: "Topic sentence menyatakan ide utama yang akan dikembangkan dalam paragraf."
      }
    }),
    lesson({
      id: "english-speaking",
      course: "Bahasa Inggris I",
      title: "Speaking: self introduction dan presentation basics",
      icon: "bi-mic",
      color: "green",
      duration: "18 menit",
      definition:
        "Speaking akademik dasar adalah kemampuan menyampaikan identitas, ide, dan penjelasan singkat dalam bahasa Inggris dengan struktur pembuka, isi, dan penutup yang mudah diikuti.",
      goal: "Menyampaikan perkenalan diri dan presentasi singkat dengan struktur yang rapi.",
      problem:
        "Presentasi bahasa Inggris terasa sulit saat mahasiswa tidak menyiapkan urutan ide dan frasa transisi.",
      analogy:
        "Presentasi seperti navigasi aplikasi. Audiens butuh menu awal, isi yang runtut, dan tanda bahwa pembahasan selesai.",
      explanation:
        "Speaking akademik tidak harus memakai kalimat rumit. Yang penting jelas, terstruktur, dan bisa dipahami. Gunakan opening, point sequence, transition, dan closing.",
      concepts: [
        { term: "Opening", detail: "Menyapa audiens dan menyebut topik." },
        { term: "Signposting", detail: "Frasa penanda seperti first, next, finally, dan to conclude." },
        { term: "Delivery", detail: "Kecepatan bicara, artikulasi, kontak mata, dan jeda." }
      ],
      campusNotes: [
        "Untuk presentasi 3 menit, siapkan 3 poin utama saja agar tidak melebar.",
        "Buat cue card berisi kata kunci, bukan naskah panjang yang dibaca penuh.",
        "Latih pronunciation istilah SI seperti algorithm, database, information system, dan entrepreneurship."
      ],
      codeLabel: "presentation-script.txt",
      code: `Good morning everyone.
My name is Raka, and I am an Information Systems student.

Today, I will explain three reasons why data privacy matters.
First, privacy protects users from misuse.
Second, privacy builds trust in digital services.
Finally, privacy supports ethical technology.

To conclude, data privacy is not only technical.
It is also about responsibility.`,
      lineNotes: [
        "Opening menyebut nama dan konteks.",
        "Kalimat agenda memberi peta untuk audiens.",
        "Signposting membuat urutan mudah diikuti."
      ],
      exercise: "Rekam presentasi 1 menit tentang alasan memilih jurusan Sistem Informasi memakai opening, tiga poin, dan closing.",
      recall: "Sebutkan empat frasa signposting yang bisa dipakai saat presentasi.",
      debug: {
        question: "Mengapa membaca teks panjang dari slide membuat presentasi kurang efektif?",
        hint: "Audiens butuh penjelasan, bukan sekadar teks yang dibacakan ulang.",
        solution:
          "Slide sebaiknya berisi kata kunci. Pembicara menjelaskan inti dengan bahasa sendiri agar presentasi terasa natural dan mudah diikuti."
      },
      quiz: {
        question: "Frasa 'To conclude' biasanya digunakan untuk...",
        options: ["Membuka presentasi", "Memulai contoh pertama", "Menandai kesimpulan", "Meminta izin keluar kelas"],
        answer: 2,
        explanation: "'To conclude' adalah signpost untuk bagian penutup atau kesimpulan."
      }
    }),
    lesson({
      id: "logic-proposition",
      course: "Logika & Algoritma",
      title: "Proposisi, operator logika, dan truth table",
      icon: "bi-diagram-2",
      color: "blue",
      duration: "24 menit",
      definition:
        "Proposisi adalah pernyataan yang dapat dinilai benar atau salah, sedangkan operator logika digunakan untuk menggabungkan atau membalik nilai benar-salah tersebut.",
      goal: "Memahami proposisi, negasi, konjungsi, disjungsi, implikasi, dan tabel kebenaran.",
      problem:
        "Program komputer sering mengambil keputusan berdasarkan kondisi benar atau salah. Tanpa logika dasar, kondisi program mudah keliru.",
      analogy:
        "Operator logika seperti aturan masuk laboratorium. Misalnya harus punya kartu dan sudah memakai jas lab.",
      explanation:
        "Proposisi adalah pernyataan yang bernilai benar atau salah. Operator AND, OR, NOT, dan IF-THEN membantu menyusun keputusan yang lebih kompleks.",
      concepts: [
        { term: "Proposisi", detail: "Pernyataan yang dapat dinilai benar atau salah, bukan pertanyaan atau perintah." },
        { term: "Konjungsi AND", detail: "Bernilai benar jika semua kondisi benar." },
        { term: "Disjungsi OR", detail: "Bernilai benar jika minimal satu kondisi benar." }
      ],
      campusNotes: [
        "Truth table membantu menguji semua kombinasi kondisi sebelum menulis algoritma.",
        "Dalam pemrograman, salah memilih AND dan OR dapat membuat validasi gagal.",
        "Gunakan simbol sederhana: p, q, not p, p and q, p or q, p -> q."
      ],
      codeLabel: "truth-table.txt",
      code: `p = mahasiswa membawa kartu
q = mahasiswa memakai jas lab

p AND q bernilai benar hanya jika:
p = true
q = true

Contoh aturan:
Jika p AND q, maka mahasiswa boleh masuk lab.`,
      lineNotes: [
        "p dan q mewakili proposisi yang bisa dinilai benar atau salah.",
        "AND membutuhkan kedua kondisi benar.",
        "Aturan keputusan dibangun dari hasil logika."
      ],
      exercise: "Buat truth table untuk kondisi 'login berhasil jika email valid AND password benar'.",
      recall: "Apa perbedaan operator AND dan OR dalam pengambilan keputusan?",
      debug: {
        question: "Apa masalah jika aturan login ditulis 'email valid OR password benar'?",
        hint: "Pikirkan apakah pengguna boleh masuk hanya dengan salah satu data benar.",
        solution:
          "Aturan itu terlalu longgar. Login seharusnya membutuhkan email valid dan password benar, sehingga operator yang tepat adalah AND."
      },
      quiz: {
        question: "p AND q bernilai benar ketika...",
        options: ["p benar dan q salah", "p salah dan q benar", "p dan q sama-sama benar", "p dan q sama-sama salah"],
        answer: 2,
        explanation: "Konjungsi AND hanya benar jika semua proposisi penyusunnya benar."
      }
    }),
    lesson({
      id: "logic-decomposition",
      course: "Logika & Algoritma",
      title: "Dekomposisi masalah dan pola input-proses-output",
      icon: "bi-boxes",
      color: "green",
      duration: "20 menit",
      definition:
        "Dekomposisi masalah adalah teknik memecah masalah besar menjadi bagian kecil, lalu menata alurnya dengan pola input, proses, dan output.",
      goal: "Memecah masalah menjadi bagian kecil dan menyusun pola input, proses, output.",
      problem:
        "Pemula sering langsung menulis kode tanpa tahu data masuk, proses, dan hasil yang diinginkan. Akibatnya solusi berantakan.",
      analogy:
        "Menyelesaikan masalah seperti memasak. Kamu perlu bahan, langkah memasak, dan hasil akhir yang jelas.",
      explanation:
        "Dekomposisi memecah masalah besar menjadi langkah kecil. Model IPO membantu menentukan apa yang diterima sistem, bagaimana diproses, dan apa hasilnya.",
      concepts: [
        { term: "Input", detail: "Data yang masuk ke sistem atau algoritma." },
        { term: "Process", detail: "Langkah pengolahan, perhitungan, validasi, atau keputusan." },
        { term: "Output", detail: "Hasil yang diberikan kepada pengguna atau proses berikutnya." }
      ],
      campusNotes: [
        "Sebelum flowchart, tulis dulu IPO agar batas masalah jelas.",
        "Output harus bisa dicek. Hindari output abstrak seperti 'sistem bagus'.",
        "Setiap proses sebaiknya memakai input yang memang tersedia."
      ],
      codeLabel: "ipo-nilai.txt",
      code: `Masalah:
Menentukan kelulusan mahasiswa dari nilai akhir.

Input:
- nilai_akhir

Process:
- Jika nilai_akhir >= 60, status = "Lulus"
- Jika tidak, status = "Tidak lulus"

Output:
- status kelulusan`,
      lineNotes: [
        "Masalah ditulis singkat agar fokus.",
        "Input hanya data yang diperlukan.",
        "Proses berisi aturan keputusan yang jelas."
      ],
      exercise: "Buat IPO untuk aplikasi sederhana penghitung total belanja dan diskon.",
      recall: "Mengapa output perlu didefinisikan sebelum menulis algoritma?",
      debug: {
        question: "Apa masalah dari proses 'hitung hasil' tanpa menjelaskan rumus atau aturan?",
        hint: "Proses harus cukup jelas agar bisa dijalankan ulang.",
        solution:
          "Proses terlalu kabur. Algoritma perlu langkah eksplisit, misalnya total = harga * jumlah, lalu diskon = total * 10%."
      },
      quiz: {
        question: "Dalam model IPO, data yang dimasukkan pengguna disebut...",
        options: ["Input", "Process", "Output", "Interface"],
        answer: 0,
        explanation: "Input adalah data yang diterima sebelum proses dilakukan."
      }
    }),
    lesson({
      id: "logic-pseudocode-flowchart",
      course: "Logika & Algoritma",
      title: "Pseudocode dan flowchart",
      icon: "bi-signpost-split",
      color: "amber",
      duration: "24 menit",
      definition:
        "Pseudocode adalah rancangan langkah algoritma dengan bahasa sederhana, sedangkan flowchart adalah gambaran alur algoritma memakai simbol visual.",
      goal: "Menulis algoritma dengan pseudocode dan menerjemahkannya menjadi flowchart.",
      problem:
        "Sebelum menulis kode, mahasiswa perlu cara netral untuk menjelaskan langkah solusi agar mudah didiskusikan.",
      analogy:
        "Pseudocode seperti resep, flowchart seperti peta perjalanan. Keduanya menjelaskan langkah yang sama dengan bentuk berbeda.",
      explanation:
        "Pseudocode menulis langkah algoritma dengan bahasa terstruktur. Flowchart memakai simbol untuk start/end, input/output, process, dan decision.",
      concepts: [
        { term: "Sequence", detail: "Langkah berjalan berurutan dari atas ke bawah." },
        { term: "Selection", detail: "Algoritma memilih cabang berdasarkan kondisi." },
        { term: "Iteration", detail: "Algoritma mengulang langkah selama syarat tertentu terpenuhi." }
      ],
      campusNotes: [
        "Pseudocode harus cukup jelas untuk diterjemahkan ke bahasa pemrograman apa pun.",
        "Flowchart decision biasanya memiliki dua cabang: ya dan tidak.",
        "Jangan membuat flowchart terlalu penuh; pecah menjadi subproses jika rumit."
      ],
      codeLabel: "pseudocode-login.txt",
      code: `START
INPUT email
INPUT password

IF email is valid AND password is correct THEN
  DISPLAY "Login berhasil"
ELSE
  DISPLAY "Email atau password salah"
END IF

END`,
      lineNotes: [
        "START dan END menandai batas algoritma.",
        "INPUT menyebut data yang dibaca.",
        "IF membuat cabang keputusan berdasarkan kondisi."
      ],
      exercise: "Tulis pseudocode dan flowchart untuk menentukan bilangan ganjil atau genap.",
      recall: "Apa perbedaan sequence, selection, dan iteration?",
      debug: {
        question: "Apa yang kurang jika decision pada flowchart hanya punya cabang 'ya' tanpa 'tidak'?",
        hint: "Setiap kondisi punya kemungkinan benar dan salah.",
        solution:
          "Cabang keputusan belum lengkap. Decision sebaiknya menjelaskan tindakan saat kondisi benar dan saat kondisi salah."
      },
      quiz: {
        question: "Simbol flowchart untuk percabangan biasanya disebut...",
        options: ["Terminator", "Decision", "Input", "Connector"],
        answer: 1,
        explanation: "Decision dipakai untuk kondisi yang bercabang."
      }
    }),
    lesson({
      id: "logic-array-search",
      course: "Logika & Algoritma",
      title: "Array, pencarian, dan kompleksitas sederhana",
      icon: "bi-list-ol",
      color: "blue",
      duration: "26 menit",
      definition:
        "Array adalah struktur data untuk menyimpan banyak nilai dalam urutan tertentu, dan pencarian adalah proses menemukan data yang dibutuhkan dari kumpulan nilai tersebut.",
      goal: "Memahami penyimpanan data berurutan, pencarian linear, dan ide efisiensi algoritma.",
      problem:
        "Data jarang hanya satu nilai. Sistem informasi mengelola daftar mahasiswa, transaksi, produk, dan nilai.",
      analogy:
        "Array seperti rak bernomor. Mencari barang bisa dilakukan dari awal sampai ketemu, tetapi cara itu makin lama saat rak makin besar.",
      explanation:
        "Array menyimpan banyak nilai dalam satu struktur berurutan. Linear search memeriksa item satu per satu. Kompleksitas membantu memperkirakan pertumbuhan waktu saat data membesar.",
      concepts: [
        { term: "Array", detail: "Kumpulan data berurutan yang diakses dengan indeks." },
        { term: "Linear search", detail: "Pencarian dari elemen pertama hingga target ditemukan atau data habis." },
        { term: "Kompleksitas O(n)", detail: "Waktu pencarian tumbuh sebanding dengan jumlah data." }
      ],
      campusNotes: [
        "Untuk semester awal, fokus pada logika indeks dan perulangan sebelum optimasi lanjutan.",
        "Jelaskan best case, worst case, dan average case dengan contoh sederhana.",
        "Data yang sudah terurut membuka peluang algoritma lebih efisien seperti binary search."
      ],
      codeLabel: "linear-search.js",
      code: `const nimList = ["23001", "23002", "23003", "23004"];
const target = "23003";
let ditemukan = false;

for (let i = 0; i < nimList.length; i++) {
  if (nimList[i] === target) {
    ditemukan = true;
    break;
  }
}

console.log(ditemukan ? "NIM ditemukan" : "NIM tidak ditemukan");`,
      lineNotes: [
        "Array menyimpan daftar NIM.",
        "Loop memeriksa setiap indeks.",
        "break menghentikan pencarian setelah target ditemukan."
      ],
      exercise: "Ubah contoh menjadi pencarian nama mahasiswa dalam daftar lima nama.",
      recall: "Mengapa linear search disebut O(n)?",
      debug: {
        question: "Apa risiko jika loop memakai i <= nimList.length?",
        hint: "Indeks terakhir array adalah length - 1.",
        solution:
          "Loop akan mencoba membaca indeks di luar array pada iterasi terakhir. Gunakan i < nimList.length."
      },
      quiz: {
        question: "Pada array berisi 10 item, indeks item pertama adalah...",
        options: ["0", "1", "9", "10"],
        answer: 0,
        explanation: "Dalam banyak bahasa pemrograman, array dimulai dari indeks 0."
      }
    }),
    lesson({
      id: "ptik-computer-system",
      course: "Pengantar Teknologi Informasi & Komunikasi",
      title: "Sistem komputer: hardware, software, dan brainware",
      icon: "bi-pc-display",
      color: "blue",
      duration: "20 menit",
      definition:
        "Sistem komputer adalah kesatuan hardware, software, dan brainware yang bekerja bersama untuk menerima, mengolah, menyimpan, dan menghasilkan informasi.",
      goal: "Mengenali komponen sistem komputer dan perannya dalam layanan informasi.",
      problem:
        "Mahasiswa SI perlu memahami komputer bukan hanya perangkat, tetapi sistem yang terdiri dari mesin, program, data, prosedur, dan manusia.",
      analogy:
        "Sistem komputer seperti dapur restoran. Ada alat, resep, bahan, koki, dan prosedur kerja yang saling bergantung.",
      explanation:
        "Hardware menjalankan instruksi fisik, software mengatur proses digital, data menjadi bahan olahan, brainware mengoperasikan dan mengambil keputusan.",
      concepts: [
        { term: "Hardware", detail: "CPU, RAM, storage, input, output, dan perangkat jaringan." },
        { term: "Software", detail: "Sistem operasi, aplikasi, driver, dan utilitas." },
        { term: "Brainware", detail: "Pengguna, operator, analis, programmer, dan administrator." }
      ],
      campusNotes: [
        "Sistem informasi selalu melibatkan teknologi dan organisasi, bukan perangkat saja.",
        "Bedakan fungsi RAM dan storage saat menjelaskan performa komputer.",
        "Dalam studi kasus, cari hubungan antara perangkat, aplikasi, data, prosedur, dan pengguna."
      ],
      codeLabel: "komponen-sistem.txt",
      code: `Contoh: Sistem presensi kampus

Hardware:
- Smartphone mahasiswa
- Server aplikasi
- Perangkat jaringan

Software:
- Aplikasi presensi
- Sistem operasi server
- Database

Brainware:
- Mahasiswa
- Dosen
- Admin akademik`,
      lineNotes: [
        "Satu layanan digital biasanya memakai banyak hardware.",
        "Software mengelola proses dan data.",
        "Brainware menentukan penggunaan, validasi, dan pengawasan."
      ],
      exercise: "Petakan komponen hardware, software, data, prosedur, dan brainware pada sistem perpustakaan kampus.",
      recall: "Mengapa brainware tetap penting dalam sistem komputer modern?",
      debug: {
        question: "Apa kelemahan jawaban 'komputer lambat pasti karena internet buruk'?",
        hint: "Performa bisa dipengaruhi banyak komponen.",
        solution:
          "Jawaban itu terlalu cepat menyimpulkan. Performa dapat dipengaruhi CPU, RAM, storage, aplikasi, jaringan, malware, atau kebiasaan pengguna."
      },
      quiz: {
        question: "Contoh brainware dalam sistem informasi akademik adalah...",
        options: ["RAM", "Database server", "Admin akademik", "Kabel jaringan"],
        answer: 2,
        explanation: "Brainware adalah manusia yang menggunakan, mengelola, atau mengambil keputusan dalam sistem."
      }
    }),
    lesson({
      id: "ptik-network-cloud",
      course: "Pengantar Teknologi Informasi & Komunikasi",
      title: "Jaringan, internet, cloud, dan kolaborasi",
      icon: "bi-cloud",
      color: "green",
      duration: "22 menit",
      definition:
        "Jaringan komputer adalah hubungan antarperangkat untuk bertukar data, sedangkan internet dan cloud memperluas pertukaran itu menjadi layanan digital yang bisa diakses dari banyak tempat.",
      goal: "Memahami konsep dasar jaringan komputer, internet, layanan cloud, dan kolaborasi digital.",
      problem:
        "Aplikasi kampus, e-learning, email, dan penyimpanan online bergantung pada koneksi dan layanan cloud.",
      analogy:
        "Jaringan seperti sistem jalan dan alamat. Data perlu rute, aturan lalu lintas, dan tujuan yang jelas.",
      explanation:
        "Jaringan menghubungkan perangkat untuk bertukar data. Internet adalah jaringan global. Cloud menyediakan sumber daya komputasi melalui internet seperti storage, server, dan aplikasi.",
      concepts: [
        { term: "IP address", detail: "Alamat logis perangkat di jaringan." },
        { term: "DNS", detail: "Sistem yang menerjemahkan nama domain menjadi alamat IP." },
        { term: "Cloud service", detail: "Layanan komputasi yang diakses melalui internet." }
      ],
      campusNotes: [
        "Bedakan internet sebagai infrastruktur dan web sebagai salah satu layanan di atas internet.",
        "Cloud bukan berarti data tanpa lokasi; data tetap berada di pusat data penyedia layanan.",
        "Kolaborasi digital perlu aturan akses, versi dokumen, dan keamanan akun."
      ],
      codeLabel: "alur-akses-web.txt",
      code: `User mengetik: lms.kampus.ac.id

1. Browser meminta alamat IP ke DNS.
2. DNS mengembalikan alamat server.
3. Browser mengirim request ke server.
4. Server mengirim halaman LMS.
5. Browser menampilkan halaman ke pengguna.`,
      lineNotes: [
        "Nama domain lebih mudah diingat manusia daripada IP.",
        "Request dan response adalah pola komunikasi web.",
        "Browser menjadi klien yang menampilkan hasil dari server."
      ],
      exercise: "Jelaskan alur saat kamu membuka Google Drive dan membagikan file ke teman kelompok.",
      recall: "Apa perbedaan internet, web, dan cloud?",
      debug: {
        question: "Mengapa 'file ada di cloud berarti tidak perlu diamankan' adalah asumsi keliru?",
        hint: "Cloud tetap memakai akun, server, dan izin akses.",
        solution:
          "Cloud tetap membutuhkan keamanan. Pengguna harus mengatur izin, memakai password kuat, dan memahami bahwa data berada di server penyedia layanan."
      },
      quiz: {
        question: "DNS berfungsi untuk...",
        options: ["Menyimpan baterai laptop", "Menerjemahkan domain menjadi alamat IP", "Menghapus virus otomatis", "Membuat dokumen presentasi"],
        answer: 1,
        explanation: "DNS membantu browser menemukan alamat IP dari nama domain."
      }
    }),
    lesson({
      id: "ptik-data-information-system",
      course: "Pengantar Teknologi Informasi & Komunikasi",
      title: "Data, informasi, dan sistem informasi",
      icon: "bi-database",
      color: "amber",
      duration: "24 menit",
      definition:
        "Data adalah fakta mentah, informasi adalah data yang sudah diolah menjadi bermakna, dan sistem informasi adalah gabungan manusia, proses, data, serta teknologi untuk mendukung keputusan.",
      goal: "Membedakan data, informasi, pengetahuan, dan komponen sistem informasi.",
      problem:
        "Jurusan Sistem Informasi tidak hanya belajar aplikasi, tetapi juga bagaimana data diolah menjadi informasi untuk keputusan organisasi.",
      analogy:
        "Data seperti bahan mentah, informasi seperti makanan yang sudah diolah, pengetahuan seperti kemampuan memilih menu yang tepat.",
      explanation:
        "Data adalah fakta mentah. Informasi adalah data yang diberi konteks dan makna. Sistem informasi menggabungkan manusia, proses, data, dan teknologi untuk mendukung operasi dan keputusan.",
      concepts: [
        { term: "Data", detail: "Fakta mentah seperti NIM, tanggal transaksi, atau jumlah stok." },
        { term: "Informasi", detail: "Data yang sudah diolah sehingga berguna, misalnya laporan kehadiran per kelas." },
        { term: "Sistem informasi", detail: "Kombinasi orang, proses, data, dan teknologi untuk tujuan organisasi." }
      ],
      campusNotes: [
        "Dalam analisis SI, selalu tanyakan keputusan apa yang dibantu oleh informasi tersebut.",
        "Data berkualitas harus akurat, lengkap, relevan, tepat waktu, dan konsisten.",
        "Output laporan yang indah belum tentu berguna jika tidak mendukung keputusan."
      ],
      codeLabel: "data-to-information.txt",
      code: `Data mentah:
23001, Rani, hadir
23002, Dimas, alfa
23003, Sinta, hadir

Informasi:
Jumlah hadir = 2 mahasiswa
Jumlah alfa = 1 mahasiswa
Persentase hadir = 66,7%

Keputusan:
Dosen perlu menghubungi mahasiswa yang sering alfa.`,
      lineNotes: [
        "Data mentah masih berupa fakta terpisah.",
        "Informasi muncul setelah data dihitung dan diberi konteks.",
        "Informasi menjadi bernilai saat membantu keputusan."
      ],
      exercise: "Ambil contoh data penjualan kantin kampus dan ubah menjadi informasi untuk pemilik kantin.",
      recall: "Apa perbedaan data dan informasi?",
      debug: {
        question: "Apa masalah dari laporan yang memuat banyak angka tetapi tidak menjawab kebutuhan keputusan?",
        hint: "Informasi harus relevan dengan tujuan pengguna.",
        solution:
          "Laporan tersebut kaya data tetapi miskin konteks. Pilih metrik yang relevan dengan keputusan yang ingin dibuat."
      },
      quiz: {
        question: "Data berubah menjadi informasi ketika...",
        options: ["Dihapus dari database", "Diberi konteks dan makna", "Dikunci agar tidak bisa dibaca", "Disimpan tanpa diproses"],
        answer: 1,
        explanation: "Informasi adalah data yang diolah sehingga bermakna bagi pengguna."
      }
    }),
    lesson({
      id: "ptik-security-ethics",
      course: "Pengantar Teknologi Informasi & Komunikasi",
      title: "Keamanan informasi dan etika digital",
      icon: "bi-lock",
      color: "blue",
      duration: "24 menit",
      definition:
        "Keamanan informasi adalah upaya menjaga data dan sistem agar tetap rahasia, utuh, dan tersedia, sedangkan etika digital mengatur perilaku bertanggung jawab saat memakai teknologi.",
      goal: "Memahami prinsip confidentiality, integrity, availability, serta kebiasaan aman digital.",
      problem:
        "Akun kampus, email, LMS, dan file tugas dapat disalahgunakan jika mahasiswa mengabaikan keamanan dasar.",
      analogy:
        "Keamanan informasi seperti menjaga ruang arsip. Tidak semua orang boleh masuk, isi arsip tidak boleh diubah sembarangan, dan arsip harus tersedia saat dibutuhkan.",
      explanation:
        "Prinsip CIA terdiri dari confidentiality, integrity, dan availability. Etika digital menuntut penggunaan teknologi yang aman, sah, dan menghormati orang lain.",
      concepts: [
        { term: "Confidentiality", detail: "Informasi hanya diakses pihak yang berhak." },
        { term: "Integrity", detail: "Informasi tetap benar, utuh, dan tidak dimodifikasi tanpa izin." },
        { term: "Availability", detail: "Sistem dan data tersedia saat dibutuhkan." }
      ],
      campusNotes: [
        "Gunakan password manager atau pola password kuat yang unik untuk akun penting.",
        "Phishing sering meniru pesan resmi; cek domain, urgensi palsu, dan lampiran mencurigakan.",
        "Backup tugas penting mengurangi risiko kehilangan data."
      ],
      codeLabel: "security-checklist.txt",
      code: `Checklist akun kampus

[ ] Password unik dan tidak sama dengan media sosial.
[ ] Two-factor authentication aktif jika tersedia.
[ ] Tidak membagikan kode OTP.
[ ] Mengecek alamat website sebelum login.
[ ] Backup tugas penting di lebih dari satu tempat.`,
      lineNotes: [
        "Password unik membatasi dampak jika satu akun bocor.",
        "OTP adalah data rahasia, bukan untuk dibagikan.",
        "Backup mendukung availability data."
      ],
      exercise: "Buat rencana keamanan pribadi untuk akun email kampus dan penyimpanan tugas.",
      recall: "Jelaskan tiga prinsip CIA dengan contoh kehidupan kampus.",
      debug: {
        question: "Mengapa mengirim password akun kelompok lewat chat publik berisiko?",
        hint: "Hubungkan dengan confidentiality dan kontrol akses.",
        solution:
          "Password dapat dilihat atau diteruskan oleh pihak yang tidak berhak. Gunakan manajemen akses resmi dan ubah password jika sudah terlanjur tersebar."
      },
      quiz: {
        question: "Availability berarti...",
        options: ["Data selalu rahasia", "Data selalu tersedia saat dibutuhkan", "Data selalu berwarna", "Data tidak pernah dipakai"],
        answer: 1,
        explanation: "Availability memastikan sistem dan data dapat diakses ketika diperlukan."
      }
    }),
    lesson({
      id: "entrepreneurship-mindset",
      course: "Entrepreneurship",
      title: "Mindset entrepreneur dan problem orientation",
      icon: "bi-lightbulb",
      color: "amber",
      duration: "18 menit",
      definition:
        "Entrepreneurship adalah proses menciptakan nilai dengan menemukan masalah nyata, menawarkan solusi, dan mengelola risiko agar solusi tersebut bisa berjalan berkelanjutan.",
      goal: "Memahami entrepreneur sebagai pencipta nilai yang berangkat dari masalah nyata.",
      problem:
        "Banyak ide bisnis gagal karena dimulai dari produk yang disukai pembuatnya, bukan dari masalah pelanggan.",
      analogy:
        "Entrepreneur seperti dokter. Diagnosis masalah harus tepat sebelum memberi resep produk.",
      explanation:
        "Mindset entrepreneur mencakup kepekaan melihat masalah, keberanian menguji asumsi, belajar dari feedback, dan menciptakan nilai yang dibayar pelanggan.",
      concepts: [
        { term: "Problem orientation", detail: "Memulai dari masalah pengguna, bukan langsung dari fitur." },
        { term: "Value creation", detail: "Menciptakan manfaat yang cukup penting bagi pelanggan." },
        { term: "Learning mindset", detail: "Menguji asumsi dan memperbaiki ide berdasarkan bukti." }
      ],
      campusNotes: [
        "Dalam tugas kewirausahaan, dosen biasanya menilai logika masalah-pelanggan-solusi.",
        "Masalah yang baik spesifik: siapa yang mengalami, kapan terjadi, dan dampaknya apa.",
        "Hindari klaim 'semua orang butuh produk ini' tanpa segmen jelas."
      ],
      codeLabel: "problem-statement.txt",
      code: `Segmen:
Mahasiswa semester 1 yang baru pindah ke kota kampus.

Masalah:
Sulit menemukan tempat makan murah, dekat, dan sesuai jam kuliah.

Dampak:
Waktu istirahat habis untuk mencari tempat.

Peluang:
Direktori rekomendasi kantin dan warung sekitar kampus.`,
      lineNotes: [
        "Segmen dibuat spesifik agar riset lebih mudah.",
        "Masalah ditulis sebagai pengalaman nyata.",
        "Peluang muncul setelah masalah dan dampak jelas."
      ],
      exercise: "Tulis problem statement untuk masalah mahasiswa baru di kampusmu.",
      recall: "Mengapa entrepreneur sebaiknya mulai dari masalah, bukan langsung dari produk?",
      debug: {
        question: "Apa kelemahan ide 'membuat aplikasi keren untuk semua orang'?",
        hint: "Cari segmen, masalah, dan nilai yang belum jelas.",
        solution:
          "Ide itu terlalu umum. Tentukan siapa penggunanya, masalah spesifiknya, dan manfaat yang membuat mereka mau memakai solusi."
      },
      quiz: {
        question: "Problem orientation berarti...",
        options: ["Memulai bisnis dari masalah pengguna", "Menyalin produk pesaing", "Membuat logo dulu", "Menentukan harga tanpa riset"],
        answer: 0,
        explanation: "Problem orientation menempatkan masalah pengguna sebagai titik awal."
      }
    }),
    lesson({
      id: "entrepreneurship-customer-discovery",
      course: "Entrepreneurship",
      title: "Customer discovery dan value proposition",
      icon: "bi-person-lines-fill",
      color: "green",
      duration: "22 menit",
      definition:
        "Customer discovery adalah proses memahami calon pengguna melalui observasi dan wawancara, sedangkan value proposition menjelaskan manfaat utama yang membuat solusi layak dipilih.",
      goal: "Menggali kebutuhan pelanggan dan menyusun value proposition yang jelas.",
      problem:
        "Asumsi tim sering berbeda dari realitas pelanggan. Wawancara dan observasi membantu menemukan bukti.",
      analogy:
        "Customer discovery seperti riset lapangan. Kamu tidak bisa memahami kemacetan hanya dari peta; kamu perlu melihat jalan dan bertanya pada pengguna jalan.",
      explanation:
        "Customer discovery adalah proses memahami pekerjaan, masalah, dan harapan pelanggan. Value proposition menjelaskan manfaat utama yang ditawarkan solusi.",
      concepts: [
        { term: "Customer job", detail: "Tugas atau tujuan yang ingin diselesaikan pelanggan." },
        { term: "Pain", detail: "Kesulitan, biaya, risiko, atau hambatan yang dialami pelanggan." },
        { term: "Gain", detail: "Manfaat, hasil, atau kemudahan yang diharapkan pelanggan." }
      ],
      campusNotes: [
        "Pertanyaan wawancara harus terbuka: ceritakan terakhir kali kamu mengalami masalah itu.",
        "Hindari pertanyaan menggiring seperti 'apakah aplikasi kami bagus?'.",
        "Value proposition yang kuat menyebut segmen, masalah, manfaat, dan alasan berbeda."
      ],
      codeLabel: "interview-guide.txt",
      code: `Pertanyaan wawancara:

1. Ceritakan terakhir kali kamu kesulitan mencari referensi tugas.
2. Apa yang kamu lakukan saat itu?
3. Bagian mana yang paling membuang waktu?
4. Solusi apa yang pernah kamu coba?
5. Apa yang membuat solusi itu belum memuaskan?`,
      lineNotes: [
        "Pertanyaan meminta pengalaman nyata, bukan pendapat abstrak.",
        "Solusi yang pernah dicoba menunjukkan alternatif yang sudah ada.",
        "Pain paling kuat sering muncul dari bagian yang membuang waktu atau biaya."
      ],
      exercise: "Wawancarai dua teman tentang masalah belajar semester 1, lalu rangkum job, pain, dan gain.",
      recall: "Apa perbedaan pain dan gain dalam value proposition?",
      debug: {
        question: "Mengapa bertanya 'Mau pakai aplikasi kami kan?' kurang baik untuk validasi?",
        hint: "Pertanyaan itu mudah membuat responden menyenangkan pewawancara.",
        solution:
          "Pertanyaan tersebut menggiring jawaban. Tanyakan pengalaman dan perilaku nyata agar bukti lebih kuat."
      },
      quiz: {
        question: "Pertanyaan customer discovery yang lebih baik adalah...",
        options: [
          "Aplikasi kami bagus kan?",
          "Kamu pasti mau bayar, kan?",
          "Ceritakan terakhir kali kamu mengalami masalah itu",
          "Warna logo mana yang paling viral?"
        ],
        answer: 2,
        explanation: "Pertanyaan pengalaman nyata menghasilkan bukti yang lebih berguna."
      }
    }),
    lesson({
      id: "entrepreneurship-bmc",
      course: "Entrepreneurship",
      title: "Business Model Canvas dan lean experiment",
      icon: "bi-grid-3x3-gap",
      color: "blue",
      duration: "24 menit",
      definition:
        "Business Model Canvas adalah kerangka untuk memetakan cara bisnis menciptakan, menyampaikan, dan menangkap nilai, sementara lean experiment menguji asumsi bisnis dengan eksperimen kecil.",
      goal: "Menyusun model bisnis awal dan merancang eksperimen kecil untuk menguji asumsi.",
      problem:
        "Model bisnis sering terlihat rapi di slide, tetapi belum tentu benar di pasar. Asumsi paling berisiko perlu diuji.",
      analogy:
        "Business Model Canvas seperti denah toko. Lean experiment seperti membuka booth kecil untuk melihat apakah pelanggan benar-benar datang.",
      explanation:
        "Business Model Canvas memetakan segmen pelanggan, nilai, channel, hubungan, pendapatan, sumber daya, aktivitas, mitra, dan biaya. Lean experiment menguji asumsi dengan cara kecil dan terukur.",
      concepts: [
        { term: "Customer segments", detail: "Kelompok pelanggan yang dilayani." },
        { term: "Channels", detail: "Cara menjangkau dan mengirim nilai kepada pelanggan." },
        { term: "Revenue streams", detail: "Sumber pendapatan yang membuat bisnis berjalan." }
      ],
      campusNotes: [
        "BMC bukan hiasan slide; setiap kotak harus saling logis.",
        "Asumsi berisiko biasanya terkait apakah pelanggan punya masalah, mau memakai, atau mau membayar.",
        "Eksperimen awal bisa berupa landing page, form minat, demo manual, atau wawancara terarah."
      ],
      codeLabel: "lean-experiment.txt",
      code: `Asumsi:
Mahasiswa mau memakai direktori tempat makan murah sekitar kampus.

Eksperimen:
Buat form minat dan daftar rekomendasi versi sederhana.

Metrik:
Minimal 30 mahasiswa mengisi form dalam 7 hari.
Minimal 10 mahasiswa meminta link rekomendasi.

Keputusan:
Jika target tercapai, lanjut buat prototype.
Jika tidak, revisi segmen atau masalah.`,
      lineNotes: [
        "Asumsi ditulis sebagai pernyataan yang bisa diuji.",
        "Eksperimen dibuat kecil agar cepat belajar.",
        "Metrik menentukan kapan tim lanjut atau revisi."
      ],
      exercise: "Pilih satu ide bisnis kampus dan susun tiga asumsi paling berisiko beserta eksperimennya.",
      recall: "Mengapa BMC perlu diuji dengan eksperimen?",
      debug: {
        question: "Apa kelemahan eksperimen dengan metrik 'banyak yang suka'?",
        hint: "Metrik harus bisa dihitung dan dipakai mengambil keputusan.",
        solution:
          "Metrik itu tidak operasional. Gunakan angka jelas seperti jumlah pendaftar, klik, pre-order, atau wawancara valid."
      },
      quiz: {
        question: "Dalam BMC, channel menjelaskan...",
        options: ["Cara menjangkau pelanggan", "Nomor rekening bisnis", "Daftar warna logo", "Password admin"],
        answer: 0,
        explanation: "Channels menjelaskan jalur untuk menjangkau dan melayani pelanggan."
      }
    }),
    lesson({
      id: "entrepreneurship-finance-pitch",
      course: "Entrepreneurship",
      title: "Keuangan sederhana dan pitch deck",
      icon: "bi-cash-coin",
      color: "amber",
      duration: "24 menit",
      definition:
        "Keuangan sederhana membantu menghitung biaya, harga, pendapatan, dan titik impas, sedangkan pitch deck merangkum ide bisnis agar mudah dipahami calon pendukung.",
      goal: "Menghitung biaya, harga, break-even sederhana, dan menyusun pitch singkat.",
      problem:
        "Ide bisnis perlu masuk akal secara ekonomi. Tanpa hitungan dasar, tim sulit menentukan harga dan target penjualan.",
      analogy:
        "Keuangan bisnis seperti bahan bakar. Produk bagus tetap berhenti jika biaya, harga, dan arus kas tidak diperhitungkan.",
      explanation:
        "Biaya tetap tidak berubah langsung oleh jumlah penjualan. Biaya variabel berubah mengikuti jumlah produk. Break-even terjadi saat pendapatan menutup total biaya.",
      concepts: [
        { term: "Fixed cost", detail: "Biaya tetap seperti sewa alat, domain, atau langganan aplikasi." },
        { term: "Variable cost", detail: "Biaya yang berubah per unit seperti bahan, kemasan, atau biaya transaksi." },
        { term: "Break-even point", detail: "Jumlah penjualan saat total pendapatan sama dengan total biaya." }
      ],
      campusNotes: [
        "Pitch deck pemula cukup memuat problem, customer, solution, market, business model, traction, team, dan ask.",
        "Harga harus mempertimbangkan biaya, nilai bagi pelanggan, dan alternatif pesaing.",
        "Hitungan sederhana lebih baik daripada klaim besar tanpa angka."
      ],
      codeLabel: "break-even.txt",
      code: `Fixed cost = Rp300.000
Harga jual per unit = Rp15.000
Biaya variabel per unit = Rp9.000

Margin per unit = 15.000 - 9.000 = Rp6.000
Break-even unit = 300.000 / 6.000 = 50 unit

Artinya:
Minimal menjual 50 unit agar biaya tertutup.`,
      lineNotes: [
        "Margin per unit adalah uang tersisa setelah biaya variabel.",
        "Break-even unit membagi biaya tetap dengan margin per unit.",
        "Angka membantu menentukan target penjualan realistis."
      ],
      exercise: "Hitung break-even untuk produk minuman kampus dengan biaya dan harga versimu sendiri.",
      recall: "Apa perbedaan fixed cost dan variable cost?",
      debug: {
        question: "Apa kesalahan jika laba dihitung hanya dari harga jual tanpa mengurangi biaya variabel?",
        hint: "Harga jual bukan seluruhnya keuntungan.",
        solution:
          "Laba harus menghitung biaya. Margin per unit = harga jual - biaya variabel. Setelah itu baru dibandingkan dengan biaya tetap."
      },
      quiz: {
        question: "Break-even terjadi ketika...",
        options: ["Harga selalu nol", "Pendapatan menutup total biaya", "Produk belum dijual", "Semua biaya diabaikan"],
        answer: 1,
        explanation: "Break-even adalah titik impas ketika total pendapatan sama dengan total biaya."
      }
    }),
    lesson({
      id: "programming-variable-type",
      course: "Dasar Pemrograman (P)",
      title: "Variabel, tipe data, dan operasi dasar",
      icon: "bi-braces",
      color: "blue",
      duration: "24 menit",
      definition:
        "Variabel adalah tempat menyimpan nilai dalam program, tipe data menjelaskan jenis nilai, dan operasi dasar digunakan untuk mengolah nilai tersebut.",
      goal: "Menggunakan variabel, tipe data sederhana, dan operasi aritmetika/logika dalam program.",
      problem:
        "Program perlu menyimpan nilai sementara seperti nama, nilai, status, dan total. Tanpa variabel, program tidak bisa mengolah data dengan fleksibel.",
      analogy:
        "Variabel seperti kotak berlabel. Labelnya nama variabel, isi kotaknya nilai, dan jenis barangnya tipe data.",
      explanation:
        "Variabel menyimpan data. Tipe data umum meliputi number, string, boolean, array, dan object. Operator digunakan untuk menghitung, membandingkan, atau menggabungkan nilai.",
      concepts: [
        { term: "Variable", detail: "Nama yang merujuk ke nilai dalam memori program." },
        { term: "Data type", detail: "Jenis nilai seperti angka, teks, benar/salah, atau kumpulan data." },
        { term: "Operator", detail: "Simbol untuk operasi seperti +, -, *, /, ===, >, dan &&." }
      ],
      campusNotes: [
        "Nama variabel harus menjelaskan isi, misalnya nilaiAkhir, bukan x jika konteksnya nilai.",
        "String dipakai untuk teks, number untuk hitungan, boolean untuk kondisi.",
        "Banyak bug awal terjadi karena angka disimpan sebagai teks."
      ],
      codeLabel: "variables.js",
      code: `const nama = "Rani";
const nilaiTugas = 80;
const nilaiUts = 75;
const nilaiUas = 85;

const nilaiAkhir = (nilaiTugas * 0.3) + (nilaiUts * 0.3) + (nilaiUas * 0.4);
const lulus = nilaiAkhir >= 60;

console.log(nama + " mendapat nilai akhir " + nilaiAkhir);
console.log("Status lulus: " + lulus);`,
      lineNotes: [
        "String menyimpan nama mahasiswa.",
        "Number dipakai untuk nilai yang dihitung.",
        "Boolean lulus bernilai true atau false dari hasil perbandingan."
      ],
      exercise: "Buat program yang menghitung total belanja dari harga barang dan jumlah pembelian.",
      recall: "Mengapa tipe data penting dalam pemrograman?",
      debug: {
        question: "Apa yang terjadi jika harga ditulis sebagai string '10000' lalu dijumlahkan dengan '5000' memakai +?",
        hint: "Operator + pada string bisa berarti penggabungan teks.",
        solution:
          "Hasilnya dapat menjadi penggabungan teks, bukan penjumlahan angka. Pastikan data numerik bertipe number sebelum dihitung."
      },
      quiz: {
        question: "Tipe data boolean berisi...",
        options: ["Benar atau salah", "Kumpulan gambar", "Tabel database", "File audio"],
        answer: 0,
        explanation: "Boolean menyimpan nilai logika true atau false."
      }
    }),
    lesson({
      id: "programming-branch-loop",
      course: "Dasar Pemrograman (P)",
      title: "Percabangan dan perulangan",
      icon: "bi-arrow-repeat",
      color: "green",
      duration: "26 menit",
      definition:
        "Percabangan membuat program memilih aksi berdasarkan kondisi, sedangkan perulangan membuat program menjalankan instruksi berulang kali secara terkontrol.",
      goal: "Menggunakan if/else dan loop untuk membuat program mengambil keputusan dan mengulang proses.",
      problem:
        "Program yang berguna jarang berjalan lurus terus. Ia perlu memilih tindakan dan memproses banyak data.",
      analogy:
        "Percabangan seperti memilih jalur di persimpangan. Perulangan seperti mengecek daftar presensi satu per satu.",
      explanation:
        "If/else menjalankan blok kode berdasarkan kondisi. Loop menjalankan perintah berulang selama syarat terpenuhi atau selama masih ada item yang diproses.",
      concepts: [
        { term: "If/else", detail: "Struktur untuk menjalankan cabang berbeda berdasarkan kondisi." },
        { term: "For loop", detail: "Perulangan yang umum dipakai saat jumlah iterasi diketahui." },
        { term: "Loop control", detail: "Mengatur kapan loop lanjut, berhenti, atau melewati item." }
      ],
      campusNotes: [
        "Uji percabangan dengan data batas, misalnya nilai 59, 60, dan 61.",
        "Pastikan loop punya kondisi berhenti agar tidak infinite loop.",
        "Gunakan indentasi rapi agar blok if dan loop mudah dibaca."
      ],
      codeLabel: "branch-loop.js",
      code: `const nilai = [80, 55, 70, 40, 90];
let jumlahLulus = 0;

for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] >= 60) {
    jumlahLulus = jumlahLulus + 1;
  }
}

console.log("Jumlah mahasiswa lulus: " + jumlahLulus);`,
      lineNotes: [
        "Array menyimpan banyak nilai.",
        "Loop membaca setiap nilai berdasarkan indeks.",
        "If menambah hitungan hanya jika nilai memenuhi syarat."
      ],
      exercise: "Ubah program agar menghitung jumlah mahasiswa yang tidak lulus.",
      recall: "Apa perbedaan percabangan dan perulangan?",
      debug: {
        question: "Mengapa kondisi nilai > 60 dapat membuat mahasiswa bernilai 60 dianggap tidak lulus?",
        hint: "Perhatikan batas minimal kelulusan.",
        solution:
          "Jika aturan lulus adalah minimal 60, kondisi harus nilai >= 60. Operator > 60 hanya menerima nilai di atas 60."
      },
      quiz: {
        question: "Struktur yang cocok untuk memproses semua item dalam array adalah...",
        options: ["Loop", "Komentar", "Tipe string", "Judul halaman"],
        answer: 0,
        explanation: "Loop digunakan untuk mengulang proses terhadap banyak data."
      }
    }),
    lesson({
      id: "programming-function-array",
      course: "Dasar Pemrograman (P)",
      title: "Function, array, dan modularisasi",
      icon: "bi-code-square",
      color: "amber",
      duration: "28 menit",
      definition:
        "Function adalah blok instruksi yang bisa dipanggil ulang, array menyimpan banyak data berurutan, dan modularisasi membagi program menjadi bagian kecil yang mudah dirawat.",
      goal: "Membuat function untuk memecah program dan memakai array sebagai kumpulan data.",
      problem:
        "Program yang semua kodenya ditulis dalam satu blok sulit diuji, dibaca, dan diperbaiki.",
      analogy:
        "Function seperti alat khusus di kotak perkakas. Setiap alat punya tugas jelas dan bisa dipakai berulang.",
      explanation:
        "Function membungkus langkah tertentu agar dapat dipanggil ulang. Parameter menerima input, return memberikan output. Array menyimpan data berulang yang dapat diproses function.",
      concepts: [
        { term: "Function", detail: "Blok kode bernama yang menjalankan tugas tertentu." },
        { term: "Parameter", detail: "Input yang diterima function." },
        { term: "Return value", detail: "Hasil yang dikirim kembali oleh function." }
      ],
      campusNotes: [
        "Function yang baik punya satu tanggung jawab utama.",
        "Nama function biasanya berupa kata kerja, misalnya hitungRataRata atau cekKelulusan.",
        "Pisahkan proses hitung, validasi, dan tampilan output jika program mulai panjang."
      ],
      codeLabel: "functions.js",
      code: `function hitungRataRata(daftarNilai) {
  let total = 0;

  for (let i = 0; i < daftarNilai.length; i++) {
    total = total + daftarNilai[i];
  }

  return total / daftarNilai.length;
}

const nilaiKelas = [80, 75, 90, 70];
console.log("Rata-rata: " + hitungRataRata(nilaiKelas));`,
      lineNotes: [
        "Function menerima array melalui parameter daftarNilai.",
        "Loop menjumlahkan seluruh nilai.",
        "Return mengirim hasil rata-rata ke pemanggil function."
      ],
      exercise: "Buat function cekKelulusan(nilai) yang mengembalikan 'Lulus' atau 'Tidak lulus'.",
      recall: "Apa manfaat parameter dan return dalam function?",
      debug: {
        question: "Apa masalah jika function menghitung rata-rata tetapi langsung console.log tanpa return?",
        hint: "Pikirkan apakah hasil bisa dipakai proses lain.",
        solution:
          "Jika hanya console.log, hasil sulit dipakai kembali. Return membuat function mengirim nilai agar bisa disimpan, diuji, atau diproses lanjutan."
      },
      quiz: {
        question: "Parameter pada function berfungsi sebagai...",
        options: ["Input untuk function", "Warna tampilan", "Nama file", "Password database"],
        answer: 0,
        explanation: "Parameter adalah nilai masukan yang diterima function."
      }
    }),
    lesson({
      id: "programming-crud-debug",
      course: "Dasar Pemrograman (P)",
      title: "CRUD sederhana dan debugging praktikum",
      icon: "bi-database-check",
      color: "blue",
      duration: "30 menit",
      definition:
        "CRUD adalah empat operasi dasar pengelolaan data, yaitu membuat, membaca, memperbarui, dan menghapus data, sedangkan debugging adalah proses menemukan serta memperbaiki kesalahan program.",
      goal: "Memahami operasi create, read, update, delete serta strategi debugging program dasar.",
      problem:
        "Sistem informasi banyak berisi operasi data. Mahasiswa perlu memahami pola CRUD dan cara mencari error secara sistematis.",
      analogy:
        "CRUD seperti mengelola daftar kontak: menambah kontak, melihat daftar, mengubah nomor, dan menghapus kontak lama.",
      explanation:
        "Create menambah data, read membaca data, update mengubah data, delete menghapus data. Debugging dilakukan dengan membaca pesan error, memeriksa input, menelusuri alur, dan menguji bagian kecil.",
      concepts: [
        { term: "Create", detail: "Menambahkan data baru ke struktur data atau database." },
        { term: "Read", detail: "Menampilkan atau mengambil data yang sudah ada." },
        { term: "Update", detail: "Mengubah data yang sudah tersimpan." },
        { term: "Delete", detail: "Menghapus data berdasarkan identitas tertentu." }
      ],
      campusNotes: [
        "CRUD di semester awal bisa dilatih memakai array sebelum masuk database.",
        "Gunakan id unik agar update dan delete tidak salah sasaran.",
        "Saat debugging, buat contoh data kecil agar hasil mudah diverifikasi."
      ],
      codeLabel: "crud-array.js",
      code: `let tugas = [
  { id: 1, nama: "Logika", selesai: false },
  { id: 2, nama: "PTIK", selesai: false }
];

function tambahTugas(nama) {
  const idBaru = tugas.length + 1;
  tugas.push({ id: idBaru, nama: nama, selesai: false });
}

function tandaiSelesai(id) {
  for (let i = 0; i < tugas.length; i++) {
    if (tugas[i].id === id) {
      tugas[i].selesai = true;
    }
  }
}

tambahTugas("Bahasa Inggris");
tandaiSelesai(2);
console.log(tugas);`,
      lineNotes: [
        "Array menyimpan data tugas sebagai object.",
        "tambahTugas melakukan operasi create.",
        "tandaiSelesai melakukan update pada data dengan id tertentu."
      ],
      exercise: "Tambahkan function hapusTugas(id) yang menghapus tugas berdasarkan id.",
      recall: "Sebutkan empat operasi CRUD dan contoh di aplikasi kampus.",
      debug: {
        question: "Apa risiko memakai nama tugas sebagai kunci update atau delete?",
        hint: "Pikirkan kemungkinan dua tugas punya nama sama.",
        solution:
          "Nama tidak selalu unik. Gunakan id unik agar update dan delete mengarah ke data yang tepat."
      },
      quiz: {
        question: "Operasi CRUD untuk mengubah data yang sudah ada adalah...",
        options: ["Create", "Read", "Update", "Delete"],
        answer: 2,
        explanation: "Update berarti memperbarui data yang sudah tersimpan."
      }
    }),
    lesson({
      id: "pancasila-demokrasi-musyawarah",
      course: "Pendidikan Pancasila",
      title: "Demokrasi Pancasila dan musyawarah digital",
      icon: "bi-chat-dots",
      color: "green",
      duration: "20 menit",
      definition:
        "Demokrasi Pancasila adalah cara mengambil keputusan bersama yang menempatkan musyawarah, tanggung jawab, persatuan, dan keadilan sebagai dasar proses politik maupun organisasi.",
      keyPoints: ["Musyawarah", "Partisipasi bertanggung jawab", "Keputusan bersama", "Etika ruang digital"],
      goal: "Menerapkan prinsip demokrasi Pancasila pada diskusi kelas, organisasi, dan komunitas digital kampus.",
      problem:
        "Diskusi online sering berubah menjadi debat menang-kalah. Mahasiswa perlu memahami cara menyampaikan pendapat, mendengar pihak lain, dan menyepakati keputusan secara sehat.",
      analogy:
        "Musyawarah seperti menyusun jadwal kelompok. Setiap orang punya kebutuhan berbeda, tetapi keputusan harus bisa dijalankan bersama.",
      explanation:
        "Demokrasi Pancasila tidak berhenti pada voting. Prosesnya menuntut penghormatan pendapat, pencarian titik temu, tanggung jawab pada hasil, dan keberpihakan pada kepentingan bersama.",
      concepts: [
        { term: "Musyawarah", detail: "Proses membahas masalah bersama untuk mencari keputusan yang dapat diterima dan dipertanggungjawabkan." },
        { term: "Partisipasi", detail: "Keterlibatan aktif warga kampus dengan argumen yang jelas, bukan sekadar ikut arus." },
        { term: "Tanggung jawab publik", detail: "Kesediaan menerima dampak keputusan dan memperbaiki proses jika hasilnya belum adil." }
      ],
      campusNotes: [
        "Dalam tugas kelompok, catat alasan keputusan agar tidak ada anggota yang merasa diabaikan.",
        "Saat voting diperlukan, jelaskan opsi yang dipilih dan konsekuensinya.",
        "Di grup digital, kritik ide tanpa menyerang pribadi."
      ],
      codeLabel: "forum-diskusi.md",
      code: `Kasus:
- Kelas perlu memilih jadwal presentasi.
- Sebagian mahasiswa bekerja paruh waktu.
- Dosen memberi tiga pilihan waktu yang mungkin dipakai.

Alur musyawarah:
1. Kumpulkan kendala setiap anggota.
2. Bandingkan tiga opsi dengan data kehadiran.
3. Pilih opsi yang paling sedikit merugikan.
4. Catat alasan dan pembagian tugas lanjutan.`,
      lineNotes: [
        "Kasus ditulis sebagai fakta agar diskusi tidak hanya berisi opini.",
        "Kendala anggota perlu didengar sebelum keputusan dibuat.",
        "Keputusan bersama lebih kuat jika alasan dan tindak lanjutnya jelas."
      ],
      exercise: "Buat aturan diskusi grup kelas yang memuat cara memberi pendapat, cara voting, dan cara menindaklanjuti keputusan.",
      recall: "Mengapa musyawarah tidak sama dengan sekadar mengikuti suara terbanyak?",
      debug: {
        question: "Apa masalah dari keputusan organisasi yang langsung voting tanpa menjelaskan opsi dan dampaknya?",
        hint: "Perhatikan kualitas partisipasi dan rasa tanggung jawab terhadap hasil.",
        solution:
          "Voting tanpa pembahasan membuat anggota tidak memahami alasan keputusan. Musyawarah perlu memberi ruang klarifikasi, membandingkan opsi, lalu memilih keputusan yang dapat dijalankan bersama."
      },
      quiz: {
        question: "Dalam demokrasi Pancasila, voting sebaiknya dilakukan setelah...",
        options: ["Opsi dan dampak dibahas", "Semua anggota diam", "Keputusan sudah ditentukan ketua", "Data sengaja dihapus"],
        answer: 0,
        explanation: "Voting lebih bertanggung jawab jika peserta memahami opsi, alasan, dan konsekuensinya."
      }
    }),
    lesson({
      id: "english-vocabulary-paraphrase",
      course: "Bahasa Inggris I",
      title: "Technology vocabulary dan paraphrasing",
      icon: "bi-highlighter",
      color: "blue",
      duration: "22 menit",
      definition:
        "Technology vocabulary adalah kumpulan istilah teknis yang sering muncul dalam teks komputer, sedangkan paraphrasing adalah menulis ulang ide dengan kata sendiri tanpa mengubah makna.",
      keyPoints: ["Istilah teknis", "Sinonim akademik", "Paraphrasing", "Avoiding plagiarism"],
      goal: "Memahami istilah teknologi dasar dan menulis ulang kalimat akademik pendek dengan aman.",
      problem:
        "Mahasiswa sering menyalin kalimat dokumentasi atau artikel karena belum percaya diri mengubah kalimat Inggris dengan bahasa sendiri.",
      analogy:
        "Paraphrasing seperti menjelaskan ulang pesan dosen kepada teman. Isinya sama, tetapi susunan kalimatnya menyesuaikan pemahamanmu.",
      explanation:
        "Paraphrasing dilakukan dengan memahami ide utama, mengganti struktur kalimat, memakai sinonim yang tepat, dan tetap mencantumkan sumber jika ide berasal dari bacaan.",
      concepts: [
        { term: "Technical term", detail: "Istilah khusus seperti authentication, encryption, storage, dan interface." },
        { term: "Paraphrase", detail: "Penulisan ulang ide dengan struktur dan kata berbeda, tetapi maknanya tetap sama." },
        { term: "Source awareness", detail: "Kesadaran untuk mencantumkan sumber saat memakai ide dari teks lain." }
      ],
      campusNotes: [
        "Jangan mengganti semua kata dengan sinonim acak. Pastikan istilah teknis tetap tepat.",
        "Dalam laporan, paraphrase tetap perlu sumber jika gagasannya berasal dari bacaan.",
        "Mulai dari kalimat pendek sebelum memparafrase paragraf panjang."
      ],
      codeLabel: "paraphrase-notes.txt",
      code: `Original:
Cloud storage allows users to access files from different devices.

Meaning:
Users can open their files on more than one device because the files are stored online.

Paraphrase:
With cloud storage, people can keep files online and use them across multiple devices.`,
      lineNotes: [
        "Original dibaca dulu untuk mencari makna utama.",
        "Meaning ditulis sederhana agar kamu tidak hanya mengganti kata.",
        "Paraphrase mengubah struktur kalimat tanpa mengubah ide."
      ],
      exercise: "Ambil tiga kalimat pendek dari teks teknologi, lalu buat meaning dan paraphrase untuk masing-masing kalimat.",
      recall: "Apa perbedaan menerjemahkan, meringkas, dan memparafrase?",
      debug: {
        question: "Mengapa mengganti satu dua kata dari kalimat sumber belum cukup disebut paraphrase?",
        hint: "Periksa apakah struktur dan cara menjelaskan idenya sudah berubah.",
        solution:
          "Paraphrase harus menunjukkan pemahaman. Jika hanya mengganti sedikit kata, struktur dan ketergantungan pada sumber masih terlalu kuat."
      },
      quiz: {
        question: "Paraphrasing yang baik harus...",
        options: ["Menjaga makna sambil mengubah struktur kalimat", "Menghapus sumber bacaan", "Mengganti semua kata teknis sembarang", "Menyalin kalimat asli"],
        answer: 0,
        explanation: "Paraphrasing menjaga ide utama, tetapi memakai struktur dan kata yang berbeda."
      }
    }),
    lesson({
      id: "logic-tracing-sorting",
      course: "Logika & Algoritma",
      title: "Tracing algoritma dan sorting sederhana",
      icon: "bi-sort-numeric-down",
      color: "amber",
      duration: "26 menit",
      definition:
        "Tracing algoritma adalah menelusuri perubahan nilai langkah demi langkah, sedangkan sorting adalah proses mengurutkan data berdasarkan aturan tertentu.",
      keyPoints: ["Trace table", "Perubahan nilai", "Sorting ascending", "Uji data kecil"],
      goal: "Menelusuri jalannya algoritma dan memahami cara kerja pengurutan sederhana pada array kecil.",
      problem:
        "Mahasiswa sering melihat kode loop bekerja seperti sihir. Tracing membuat perubahan nilai terlihat sehingga error lebih mudah ditemukan.",
      analogy:
        "Tracing seperti mencatat posisi pemain saat latihan strategi. Kamu melihat perubahan dari langkah ke langkah, bukan hanya skor akhir.",
      explanation:
        "Trace table mencatat nilai variabel pada setiap iterasi. Untuk sorting sederhana, bandingkan dua data, tukar jika urutannya salah, lalu ulangi sampai data tersusun.",
      concepts: [
        { term: "Trace table", detail: "Tabel yang mencatat nilai variabel pada setiap langkah algoritma." },
        { term: "Swap", detail: "Menukar posisi dua nilai saat urutan belum sesuai." },
        { term: "Ascending", detail: "Urutan dari nilai kecil ke besar." }
      ],
      campusNotes: [
        "Gunakan tiga sampai lima data saat belajar sorting agar prosesnya masih terlihat.",
        "Catat nilai indeks, data yang dibandingkan, dan hasil setelah swap.",
        "Tracing membantu menjawab soal algoritma meski kamu belum menulis program lengkap."
      ],
      codeLabel: "trace-sorting.js",
      code: `const angka = [5, 2, 4];

for (let i = 0; i < angka.length - 1; i++) {
  for (let j = 0; j < angka.length - 1 - i; j++) {
    if (angka[j] > angka[j + 1]) {
      const sementara = angka[j];
      angka[j] = angka[j + 1];
      angka[j + 1] = sementara;
    }
  }
}

console.log(angka);`,
      lineNotes: [
        "Loop luar mengatur berapa putaran pengurutan dilakukan.",
        "Loop dalam membandingkan dua nilai yang bersebelahan.",
        "Swap terjadi saat nilai kiri lebih besar daripada nilai kanan."
      ],
      exercise: "Buat trace table untuk array [3, 1, 2] sampai urut ascending.",
      recall: "Mengapa trace table membantu menemukan kesalahan pada loop?",
      debug: {
        question: "Apa risiko jika kondisi perbandingan ditulis angka[j] < angka[j + 1] padahal ingin urutan ascending?",
        hint: "Perhatikan arah pertukaran data.",
        solution:
          "Kondisi itu akan mendorong nilai besar ke depan sehingga hasilnya cenderung descending. Untuk ascending, tukar saat nilai kiri lebih besar dari nilai kanan."
      },
      quiz: {
        question: "Trace table digunakan untuk...",
        options: ["Mencatat perubahan nilai setiap langkah", "Mengubah warna website", "Menghapus semua data", "Membeli domain"],
        answer: 0,
        explanation: "Trace table membuat alur algoritma dan perubahan variabel lebih terlihat."
      }
    }),
    lesson({
      id: "ptik-database-cloud",
      course: "Pengantar Teknologi Informasi & Komunikasi",
      title: "Database, backup, dan cloud storage",
      icon: "bi-cloud-check",
      color: "green",
      duration: "24 menit",
      definition:
        "Database adalah tempat penyimpanan data terstruktur, backup adalah salinan cadangan, dan cloud storage adalah layanan penyimpanan online yang dapat diakses melalui internet.",
      keyPoints: ["Table", "Record", "Backup", "Sync", "Access control"],
      goal: "Memahami peran database, backup, dan cloud storage dalam layanan digital kampus.",
      problem:
        "Data tugas, nilai, presensi, dan akun kampus harus tersimpan rapi, aman, dan tetap bisa dipulihkan saat terjadi gangguan.",
      analogy:
        "Database seperti lemari arsip utama, backup seperti fotokopi cadangan, dan cloud seperti ruang arsip online yang bisa dibuka dari beberapa tempat.",
      explanation:
        "Database menyimpan data terstruktur dalam tabel. Backup mengurangi risiko kehilangan data. Cloud storage memudahkan sinkronisasi, tetapi tetap perlu kontrol akses dan kebiasaan keamanan.",
      concepts: [
        { term: "Table", detail: "Struktur penyimpanan data yang berisi kolom dan baris." },
        { term: "Backup", detail: "Salinan data yang disimpan untuk pemulihan saat data utama hilang atau rusak." },
        { term: "Access control", detail: "Pengaturan siapa yang boleh melihat, mengubah, atau membagikan data." }
      ],
      campusNotes: [
        "Data penting tidak cukup disimpan di satu perangkat.",
        "Hak akses folder cloud harus dicek sebelum membagikan link.",
        "Backup yang baik perlu diuji, bukan hanya dibuat."
      ],
      codeLabel: "data-layer-map.md",
      code: `Layanan: LMS kampus

Data utama:
- akun mahasiswa
- daftar kelas
- file tugas
- nilai

Penyimpanan:
- database untuk data terstruktur
- cloud storage untuk file
- backup harian untuk pemulihan

Kontrol akses:
- mahasiswa melihat kelas sendiri
- dosen melihat kelas yang diampu
- admin mengelola konfigurasi`,
      lineNotes: [
        "Data terstruktur dan file sering disimpan dengan pendekatan berbeda.",
        "Backup membantu pemulihan saat terjadi kerusakan atau salah hapus.",
        "Kontrol akses mencegah data terbuka ke pihak yang tidak berhak."
      ],
      exercise: "Petakan data pada satu aplikasi kampus, lalu tentukan data mana yang perlu database, cloud storage, dan backup.",
      recall: "Mengapa backup perlu diuji, bukan hanya dibuat?",
      debug: {
        question: "Apa risiko membagikan folder cloud tugas kelompok dengan akses anyone can edit?",
        hint: "Pikirkan integritas data dan pihak yang tidak berhak.",
        solution:
          "Risikonya file dapat diubah atau dihapus oleh orang yang tidak tepat. Batasi akses edit hanya ke anggota kelompok dan gunakan riwayat versi jika tersedia."
      },
      quiz: {
        question: "Backup dipakai terutama untuk...",
        options: ["Memulihkan data saat terjadi masalah", "Mengganti semua password", "Menambah ukuran layar", "Menghapus hak akses"],
        answer: 0,
        explanation: "Backup adalah salinan cadangan yang dipakai saat data utama hilang, rusak, atau salah ubah."
      }
    }),
    lesson({
      id: "entrepreneurship-mvp-metrics",
      course: "Entrepreneurship",
      title: "MVP, metrik validasi, dan feedback loop",
      icon: "bi-clipboard-data",
      color: "blue",
      duration: "25 menit",
      definition:
        "MVP adalah versi paling sederhana dari solusi yang cukup untuk menguji asumsi utama, sedangkan metrik validasi adalah angka yang menunjukkan apakah solusi benar-benar menarik bagi pengguna.",
      keyPoints: ["Asumsi utama", "MVP", "Metrik", "Feedback loop"],
      goal: "Merancang eksperimen kecil untuk menguji ide bisnis mahasiswa dengan bukti awal.",
      problem:
        "Banyak ide bisnis terlihat bagus di slide, tetapi belum terbukti dibutuhkan pengguna. MVP membantu menguji sebelum membangun terlalu jauh.",
      analogy:
        "MVP seperti tester makanan. Kamu tidak perlu membuka restoran penuh untuk tahu apakah menu awal disukai calon pelanggan.",
      explanation:
        "Tentukan asumsi paling berisiko, buat versi sederhana untuk diuji, pilih metrik yang jelas, kumpulkan feedback, lalu perbaiki ide berdasarkan bukti.",
      concepts: [
        { term: "MVP", detail: "Versi minimum produk atau layanan untuk menguji asumsi penting." },
        { term: "Validation metric", detail: "Ukuran konkret seperti jumlah pendaftar, klik, pre-order, atau wawancara valid." },
        { term: "Feedback loop", detail: "Siklus uji, pelajari hasil, dan perbaiki solusi." }
      ],
      campusNotes: [
        "MVP tidak harus aplikasi jadi. Bisa berupa form, poster, landing page, simulasi manual, atau demo sederhana.",
        "Metrik harus bisa dihitung dan berhubungan dengan perilaku pengguna.",
        "Feedback negatif tetap berguna karena mengurangi risiko membangun fitur yang tidak dibutuhkan."
      ],
      codeLabel: "mvp-experiment.md",
      code: `Ide:
Rekomendasi tempat print murah dekat kampus.

Asumsi berisiko:
Mahasiswa sering butuh tempat print cepat dan murah.

MVP:
Google Form + daftar rekomendasi manual via chat.

Metrik validasi:
- 30 mahasiswa mengisi form.
- 10 mahasiswa meminta rekomendasi.
- 5 mahasiswa memakai rekomendasi dalam 1 minggu.

Keputusan:
Lanjut jika minimal 5 pengguna benar-benar memakai rekomendasi.`,
      lineNotes: [
        "Asumsi berisiko menentukan apa yang harus diuji lebih dulu.",
        "MVP dibuat sederhana agar cepat mendapat data.",
        "Metrik membantu menentukan lanjut, ubah, atau hentikan ide."
      ],
      exercise: "Pilih satu ide bisnis kampus, lalu tulis asumsi berisiko, MVP, metrik, dan keputusan lanjutnya.",
      recall: "Mengapa MVP tidak harus langsung berbentuk aplikasi lengkap?",
      debug: {
        question: "Apa masalah dari metrik 'banyak yang suka ide ini' tanpa angka dan perilaku yang jelas?",
        hint: "Validasi membutuhkan bukti yang bisa diamati.",
        solution:
          "Metrik itu terlalu kabur. Gunakan ukuran konkret seperti jumlah pendaftar, permintaan demo, klik, pre-order, atau pengguna yang mencoba solusi."
      },
      quiz: {
        question: "MVP paling berguna untuk...",
        options: ["Menguji asumsi dengan versi sederhana", "Membuat logo final", "Menghindari feedback", "Menyembunyikan produk dari calon pengguna"],
        answer: 0,
        explanation: "MVP membantu menguji ide dengan usaha minimum sebelum membangun versi penuh."
      }
    }),
    lesson({
      id: "programming-dom-storage",
      course: "Dasar Pemrograman (P)",
      title: "DOM event dan localStorage",
      icon: "bi-window-sidebar",
      color: "amber",
      duration: "28 menit",
      definition:
        "DOM event adalah kejadian pada halaman web seperti klik atau input, sedangkan localStorage adalah penyimpanan sederhana di browser untuk menyimpan data teks secara lokal.",
      keyPoints: ["DOM selection", "Event listener", "State", "localStorage"],
      goal: "Membuat interaksi halaman sederhana dan menyimpan data kecil di browser.",
      problem:
        "Program web dasar tidak cukup hanya menampilkan HTML. Pengguna perlu bisa klik tombol, mengisi data, dan melihat data tetap ada setelah halaman dimuat ulang.",
      analogy:
        "Event seperti bel pintu. Saat tombol diklik, program mendengar kejadian itu lalu menjalankan instruksi yang sesuai.",
      explanation:
        "Gunakan querySelector untuk memilih elemen, addEventListener untuk merespons aksi, lalu localStorage untuk menyimpan data sederhana dalam bentuk string.",
      concepts: [
        { term: "DOM", detail: "Representasi elemen HTML yang dapat dibaca dan diubah oleh JavaScript." },
        { term: "Event listener", detail: "Fungsi yang dijalankan ketika kejadian tertentu terjadi pada elemen." },
        { term: "localStorage", detail: "Penyimpanan key-value di browser yang bertahan setelah halaman ditutup." }
      ],
      campusNotes: [
        "localStorage cocok untuk latihan dan data kecil, bukan data rahasia.",
        "Data array atau object perlu diubah dengan JSON.stringify sebelum disimpan.",
        "Selalu uji reload halaman untuk memastikan data benar-benar tersimpan."
      ],
      codeLabel: "dom-storage.js",
      code: `const input = document.querySelector("#tugasInput");
const tombol = document.querySelector("#simpanBtn");
const output = document.querySelector("#output");

let tugas = JSON.parse(localStorage.getItem("tugas") || "[]");

function render() {
  output.innerHTML = tugas.map((item) => "<li>" + item + "</li>").join("");
}

tombol.addEventListener("click", function () {
  tugas.push(input.value);
  localStorage.setItem("tugas", JSON.stringify(tugas));
  input.value = "";
  render();
});

render();`,
      lineNotes: [
        "querySelector mengambil elemen dari halaman.",
        "JSON.parse membaca data yang sebelumnya disimpan di localStorage.",
        "Event click menambah tugas, menyimpan data, lalu merender ulang daftar."
      ],
      exercise: "Buat daftar target belajar yang bisa ditambah lewat input dan tetap muncul setelah halaman di-refresh.",
      recall: "Mengapa array perlu JSON.stringify sebelum disimpan ke localStorage?",
      debug: {
        question: "Mengapa data array berubah menjadi teks aneh jika disimpan langsung tanpa JSON.stringify?",
        hint: "localStorage hanya menyimpan string.",
        solution:
          "localStorage menyimpan data sebagai string. Array atau object perlu diubah menjadi JSON saat disimpan dan dibaca kembali dengan JSON.parse."
      },
      quiz: {
        question: "addEventListener digunakan untuk...",
        options: ["Menjalankan fungsi saat event terjadi", "Menghapus HTML otomatis", "Membuat database server", "Mengubah file gambar menjadi teks"],
        answer: 0,
        explanation: "addEventListener memasang respons terhadap event seperti click, input, atau submit."
      }
    })
  ];

  const quizQuestions = [
    {
      question: "Pancasila sebagai ideologi terbuka berarti...",
      options: [
        "Nilai dasarnya tetap dan penerapannya adaptif",
        "Semua nilai dapat diganti bebas",
        "Hanya berlaku dalam upacara",
        "Tidak berhubungan dengan hukum"
      ],
      answer: 0,
      explanation: "Ideologi terbuka menjaga nilai dasar, tetapi penerapannya dapat menyesuaikan perkembangan zaman."
    },
    {
      question: "Dalam analisis etika teknologi, privasi data paling dekat dengan prinsip...",
      options: ["Confidentiality", "Iteration", "Revenue", "Skimming"],
      answer: 0,
      explanation: "Confidentiality memastikan data hanya diakses pihak yang berhak."
    },
    {
      question: "Strategi membaca untuk mencari angka, nama fitur, atau tanggal pada teks Inggris adalah...",
      options: ["Scanning", "Skimming", "Speaking", "Pitching"],
      answer: 0,
      explanation: "Scanning dipakai untuk mencari detail spesifik secara cepat."
    },
    {
      question: "Kalimat 'The system is reliable' memiliki complement berupa...",
      options: ["The system", "is", "reliable", "Tidak ada"],
      answer: 2,
      explanation: "'Reliable' melengkapi makna subjek melalui linking verb 'is'."
    },
    {
      question: "Operator AND bernilai benar ketika...",
      options: ["Minimal satu kondisi benar", "Semua kondisi benar", "Semua kondisi salah", "Kondisi tidak diperiksa"],
      answer: 1,
      explanation: "AND membutuhkan semua kondisi penyusunnya bernilai benar."
    },
    {
      question: "Model input-proses-output membantu mahasiswa untuk...",
      options: ["Membuat logo", "Menentukan data masuk, langkah olah, dan hasil", "Menghapus seluruh data", "Mengganti bahasa pemrograman"],
      answer: 1,
      explanation: "IPO memperjelas batas masalah sebelum algoritma atau program dibuat."
    },
    {
      question: "DNS digunakan untuk...",
      options: ["Menerjemahkan domain menjadi IP", "Menulis email", "Menyimpan RAM", "Menggambar flowchart"],
      answer: 0,
      explanation: "DNS membantu perangkat menemukan alamat IP dari nama domain."
    },
    {
      question: "Data menjadi informasi saat...",
      options: ["Diberi konteks dan makna", "Dihapus permanen", "Dikunci tanpa dipakai", "Dibiarkan mentah"],
      answer: 0,
      explanation: "Informasi adalah data yang sudah diolah dan bermakna bagi pengguna."
    },
    {
      question: "Customer discovery yang baik menekankan...",
      options: ["Pertanyaan menggiring", "Pengalaman nyata pelanggan", "Pilihan warna logo saja", "Asumsi tanpa bukti"],
      answer: 1,
      explanation: "Pengalaman nyata membantu tim memahami masalah pelanggan dengan bukti."
    },
    {
      question: "Break-even point adalah kondisi ketika...",
      options: ["Pendapatan menutup total biaya", "Biaya diabaikan", "Tidak ada penjualan", "Produk selalu gratis"],
      answer: 0,
      explanation: "Titik impas terjadi saat pendapatan sama dengan total biaya."
    },
    {
      question: "Tipe data boolean menyimpan...",
      options: ["Benar atau salah", "Kumpulan foto", "Alamat domain", "Paragraf panjang"],
      answer: 0,
      explanation: "Boolean berisi nilai true atau false."
    },
    {
      question: "Loop dipakai ketika program perlu...",
      options: ["Mengulang proses", "Mengubah font saja", "Membuka browser", "Menutup laptop"],
      answer: 0,
      explanation: "Loop menjalankan perintah berulang sesuai kondisi atau jumlah data."
    },
    {
      question: "Function yang memakai return akan...",
      options: ["Mengirim hasil ke pemanggil", "Selalu menghapus array", "Tidak bisa menerima input", "Membuat jaringan internet"],
      answer: 0,
      explanation: "Return membuat hasil function dapat dipakai oleh bagian program lain."
    },
    {
      question: "Operasi CRUD untuk menambahkan data baru disebut...",
      options: ["Create", "Read", "Update", "Delete"],
      answer: 0,
      explanation: "Create adalah operasi penambahan data baru."
    },
    {
      question: "Dalam presentasi bahasa Inggris, frasa 'First, next, finally' disebut...",
      options: ["Signposting", "Scanning", "Fixed cost", "Data mining"],
      answer: 0,
      explanation: "Signposting membantu audiens mengikuti urutan pembahasan."
    },
    {
      question: "Musyawarah yang sehat sebaiknya menghasilkan...",
      options: ["Keputusan dengan alasan dan tindak lanjut", "Debat tanpa kesimpulan", "Voting tanpa penjelasan", "Dominasi satu orang"],
      answer: 0,
      explanation: "Musyawarah perlu menghasilkan keputusan yang dapat dipahami, dijalankan, dan dipertanggungjawabkan."
    },
    {
      question: "Paraphrasing berbeda dari menyalin karena...",
      options: ["Ide dijelaskan ulang dengan struktur sendiri", "Sumber selalu dihapus", "Kata teknis diganti sembarang", "Kalimat asli dipindahkan utuh"],
      answer: 0,
      explanation: "Paraphrasing menunjukkan pemahaman dengan menulis ulang ide tanpa mengubah makna."
    },
    {
      question: "Dalam sorting ascending, swap dilakukan saat...",
      options: ["Nilai kiri lebih besar dari nilai kanan", "Semua nilai sudah sama", "Array kosong", "Nilai kanan dihapus"],
      answer: 0,
      explanation: "Untuk urutan kecil ke besar, dua nilai ditukar ketika nilai kiri lebih besar daripada nilai kanan."
    },
    {
      question: "Access control pada cloud storage membantu...",
      options: ["Membatasi siapa yang boleh melihat atau mengubah file", "Mengubah file menjadi hardware", "Menghapus kebutuhan backup", "Membuat internet lebih cepat"],
      answer: 0,
      explanation: "Kontrol akses menjaga file hanya dibuka atau diubah oleh pihak yang berhak."
    },
    {
      question: "MVP dalam entrepreneurship dipakai untuk...",
      options: ["Menguji asumsi utama dengan versi sederhana", "Membuat produk final tanpa feedback", "Mengganti semua riset pelanggan", "Menunda validasi ide"],
      answer: 0,
      explanation: "MVP membantu menguji ide lebih cepat sebelum membangun versi lengkap."
    },
    {
      question: "localStorage menyimpan data di...",
      options: ["Browser pengguna", "Keyboard", "Monitor", "Kabel jaringan"],
      answer: 0,
      explanation: "localStorage adalah penyimpanan sederhana di browser dan cocok untuk latihan data kecil."
    }
  ];

  const recallChallenges = [
    {
      id: "recall-pancasila-si",
      type: "Jelaskan ulang",
      title: "Pancasila dan sistem informasi",
      prompt: "Jelaskan bagaimana nilai Pancasila dapat memengaruhi desain aplikasi kampus.",
      answer:
        "Nilai Pancasila dapat terlihat pada privasi data, akses yang adil, transparansi keputusan sistem, dan tanggung jawab pengelola aplikasi."
    },
    {
      id: "recall-english-email",
      type: "Susun struktur",
      title: "Email profesional",
      prompt: "Sebutkan urutan bagian email profesional berbahasa Inggris untuk dosen.",
      answer: "Subject, greeting, purpose, details, closing sentence, sign off, dan identitas pengirim."
    },
    {
      id: "recall-truth-table",
      type: "Tebak logika",
      title: "AND vs OR",
      prompt: "Login butuh email valid dan password benar. Operator apa yang tepat dan mengapa?",
      answer: "Operator AND karena kedua kondisi harus benar agar login berhasil."
    },
    {
      id: "recall-ipo",
      type: "Cocokkan fungsi",
      title: "Input, proses, output",
      prompt: "Pada aplikasi hitung total belanja, mana input, proses, dan outputnya?",
      answer: "Input: harga dan jumlah. Proses: menghitung total atau diskon. Output: total yang harus dibayar."
    },
    {
      id: "recall-ptik-cia",
      type: "Jelaskan konsep",
      title: "Prinsip CIA",
      prompt: "Jelaskan confidentiality, integrity, dan availability dengan contoh akun kampus.",
      answer:
        "Confidentiality: akun hanya diakses pemilik. Integrity: data nilai tidak berubah tanpa izin. Availability: LMS dapat diakses saat dibutuhkan."
    },
    {
      id: "recall-bmc",
      type: "Isi kanvas",
      title: "Business Model Canvas",
      prompt: "Sebutkan tiga kotak BMC yang paling penting untuk menjelaskan pelanggan dan nilai.",
      answer: "Customer segments, value proposition, dan channels."
    },
    {
      id: "recall-function",
      type: "Jelaskan kode",
      title: "Function dan return",
      prompt: "Mengapa function hitungRataRata sebaiknya memakai return?",
      answer: "Agar hasil rata-rata dapat dipakai kembali, disimpan, diuji, atau diproses oleh bagian program lain."
    },
    {
      id: "recall-crud",
      type: "Cocokkan operasi",
      title: "CRUD aplikasi kampus",
      prompt: "Cocokkan create, read, update, delete dengan contoh pada daftar tugas kuliah.",
      answer:
        "Create: tambah tugas. Read: lihat daftar tugas. Update: tandai selesai atau ubah nama. Delete: hapus tugas yang tidak diperlukan."
    },
    {
      id: "recall-paraphrase",
      type: "Jelaskan ulang",
      title: "Paraphrasing aman",
      prompt: "Jelaskan langkah membuat paraphrase dari satu kalimat teknologi tanpa mengubah maknanya.",
      answer:
        "Pahami ide utama, tulis meaning dengan bahasa sendiri, ubah struktur kalimat, jaga istilah teknis yang penting, lalu cantumkan sumber jika ide berasal dari bacaan."
    },
    {
      id: "recall-dom-storage",
      type: "Jelaskan alur",
      title: "Event dan localStorage",
      prompt: "Jelaskan alur saat pengguna menambah tugas lewat input, tombol, dan localStorage.",
      answer:
        "JavaScript membaca input, event click menjalankan function, data ditambah ke array, array disimpan dengan JSON.stringify ke localStorage, lalu daftar dirender ulang."
    }
  ];

  const debugChallenges = [
    {
      id: "debug-pancasila-hafalan",
      title: "Analisis Pancasila terlalu hafalan",
      symptom: "Jawaban esai hanya menulis lima sila tanpa mengaitkan kasus.",
      code: `Kasus: penyebaran data pribadi mahasiswa di grup chat.

Jawaban:
Pancasila terdiri dari lima sila dan harus diamalkan.`,
      question: "Bagian apa yang belum ada dalam analisis tersebut?",
      hint: "Cari hubungan antara fakta kasus, nilai yang relevan, dan sikap konkret.",
      explanation: [
        "Masalahnya: jawaban hanya definisi umum.",
        "Analisis kasus harus memuat fakta kejadian.",
        "Nilai yang relevan perlu dipilih, misalnya kemanusiaan dan keadilan.",
        "Dampak terhadap korban dan lingkungan kampus perlu dibahas.",
        "Solusi harus berupa sikap atau kebijakan yang jelas."
      ],
      solution: `Kasus ini melanggar penghormatan martabat manusia karena data pribadi disebarkan tanpa izin.
Nilai yang relevan adalah kemanusiaan yang adil dan beradab serta keadilan sosial.
Sikap yang tepat adalah menghapus data, meminta izin pemilik data, dan membuat aturan privasi grup.`
    },
    {
      id: "debug-email-tone",
      title: "Email tidak profesional",
      symptom: "Email ke dosen terlalu singkat dan tidak memiliki konteks.",
      code: `Subject: tugas

Sir, file saya telat. Tolong cek ya.`,
      question: "Apa saja yang perlu diperbaiki agar email lebih profesional?",
      hint: "Perhatikan subject, salam, tujuan, alasan, dan penutup.",
      explanation: [
        "Subject terlalu umum.",
        "Salam dan tujuan perlu ditulis sopan.",
        "Alasan keterlambatan harus jelas dan ringkas.",
        "Permintaan tindakan perlu spesifik.",
        "Identitas pengirim membantu dosen mengenali mahasiswa."
      ],
      solution: `Subject: Late Submission Request for English Assignment

Dear Sir,

I apologize for submitting my English assignment late due to a connection problem.
I have attached the file and would like to ask whether it can still be reviewed.

Thank you for your understanding.

Best regards,
Rani - Information Systems Semester 1`
    },
    {
      id: "debug-and-or",
      title: "Operator login salah",
      symptom: "Pengguna bisa login meskipun hanya email yang benar atau hanya password yang benar.",
      code: `if (emailValid || passwordBenar) {
  console.log("Login berhasil");
}`,
      question: "Operator apa yang menyebabkan validasi terlalu longgar?",
      hint: "Login membutuhkan dua kondisi benar sekaligus.",
      explanation: [
        "Masalahnya: operator OR membuat salah satu kondisi cukup.",
        "Login seharusnya meminta email valid dan password benar.",
        "Gunakan AND agar dua syarat harus terpenuhi.",
        "Uji dengan kombinasi true/false untuk memastikan aturan benar."
      ],
      solution: `if (emailValid && passwordBenar) {
  console.log("Login berhasil");
} else {
  console.log("Email atau password salah");
}`
    },
    {
      id: "debug-ipo-missing-output",
      title: "IPO tidak punya output",
      symptom: "Rancangan algoritma menyebut input dan proses, tetapi hasil akhirnya tidak jelas.",
      code: `Input:
- harga
- jumlah

Proses:
- hitung harga dikali jumlah
- beri diskon jika total besar`,
      question: "Apa yang harus ditambahkan agar IPO lengkap?",
      hint: "Pengguna perlu menerima hasil yang bisa dilihat atau dipakai.",
      explanation: [
        "IPO belum lengkap karena output tidak disebutkan.",
        "Output harus jelas dan dapat diuji.",
        "Pada kasus belanja, output bisa berupa total sebelum diskon, diskon, dan total bayar.",
        "Output membantu menentukan apakah proses sudah benar."
      ],
      solution: `Output:
- total sebelum diskon
- nominal diskon
- total bayar akhir`
    },
    {
      id: "debug-network-assumption",
      title: "Asumsi jaringan terlalu cepat",
      symptom: "Mahasiswa langsung menyalahkan internet saat aplikasi lambat.",
      code: `Masalah:
Aplikasi presensi lambat.

Kesimpulan:
Internet kampus buruk.`,
      question: "Mengapa kesimpulan itu belum cukup kuat?",
      hint: "Performa sistem dipengaruhi banyak komponen.",
      explanation: [
        "Kesimpulan dibuat tanpa diagnosis.",
        "Aplikasi lambat bisa disebabkan server, database, perangkat, jaringan, atau kode aplikasi.",
        "Perlu bukti seperti ping, log server, waktu query, dan jumlah pengguna.",
        "Diagnosis SI harus melihat sistem secara menyeluruh."
      ],
      solution: `Diagnosis awal:
1. Cek koneksi pengguna.
2. Cek beban server.
3. Cek response time aplikasi.
4. Cek query database.
5. Bandingkan waktu lambat pada jam sibuk dan jam sepi.`
    },
    {
      id: "debug-bmc-segment",
      title: "Segmen pelanggan terlalu umum",
      symptom: "Business Model Canvas menulis customer segment sebagai 'semua orang'.",
      code: `Customer Segment:
Semua orang

Value Proposition:
Aplikasi yang mudah dipakai`,
      question: "Apa yang perlu dibuat lebih spesifik?",
      hint: "Pelanggan harus dapat diwawancarai dan diamati.",
      explanation: [
        "Segmen terlalu luas dan sulit diuji.",
        "Value proposition juga terlalu umum.",
        "Tentukan kelompok pengguna dengan konteks masalah yang sama.",
        "Manfaat harus menjawab pain atau gain spesifik."
      ],
      solution: `Customer Segment:
Mahasiswa semester 1 yang tinggal jauh dari kampus dan sering kesulitan mencari tempat makan murah.

Value Proposition:
Rekomendasi tempat makan murah dekat kampus berdasarkan jarak, harga, dan jam buka.`
    },
    {
      id: "debug-string-number",
      title: "Angka tersimpan sebagai string",
      symptom: "Total belanja menjadi 100005000, bukan 15000.",
      code: `const harga = "10000";
const ongkir = "5000";
const total = harga + ongkir;

console.log(total);`,
      question: "Mengapa operator + tidak menghasilkan penjumlahan angka?",
      hint: "Periksa tipe data harga dan ongkir.",
      explanation: [
        "harga dan ongkir ditulis sebagai string.",
        "Operator + pada string melakukan penggabungan teks.",
        "Ubah nilai menjadi number sebelum dihitung.",
        "Biasakan memeriksa tipe data input."
      ],
      solution: `const harga = 10000;
const ongkir = 5000;
const total = harga + ongkir;

console.log(total);`
    },
    {
      id: "debug-loop-boundary",
      title: "Loop melewati batas array",
      symptom: "Program membaca nilai undefined pada akhir perulangan.",
      code: `const nilai = [80, 75, 90];

for (let i = 0; i <= nilai.length; i++) {
  console.log(nilai[i]);
}`,
      question: "Bagian kondisi loop mana yang harus diperbaiki?",
      hint: "Indeks terakhir array adalah length - 1.",
      explanation: [
        "Kondisi i <= nilai.length membuat loop berjalan satu kali terlalu banyak.",
        "Saat i sama dengan length, indeks itu tidak ada.",
        "Gunakan i < nilai.length.",
        "Uji loop dengan array kecil untuk melihat indeks yang terbaca."
      ],
      solution: `const nilai = [80, 75, 90];

for (let i = 0; i < nilai.length; i++) {
  console.log(nilai[i]);
}`
    },
    {
      id: "debug-function-return",
      title: "Function tidak mengembalikan hasil",
      symptom: "Nilai rata-rata tampil di console, tetapi tidak bisa dipakai untuk menentukan kelulusan kelas.",
      code: `function rataRata(nilai) {
  let total = 0;
  for (let i = 0; i < nilai.length; i++) {
    total = total + nilai[i];
  }
  console.log(total / nilai.length);
}

const hasil = rataRata([80, 90, 70]);
console.log(hasil >= 75);`,
      question: "Mengapa variabel hasil tidak berisi rata-rata?",
      hint: "Function hanya mencetak, tetapi belum mengirim nilai kembali.",
      explanation: [
        "console.log hanya menampilkan nilai.",
        "Function perlu return agar pemanggil menerima hasil.",
        "Setelah return, hasil bisa dibandingkan atau diproses lagi.",
        "Pisahkan tugas menghitung dan menampilkan."
      ],
      solution: `function rataRata(nilai) {
  let total = 0;
  for (let i = 0; i < nilai.length; i++) {
    total = total + nilai[i];
  }
  return total / nilai.length;
}

const hasil = rataRata([80, 90, 70]);
console.log(hasil >= 75);`
    },
    {
      id: "debug-crud-id",
      title: "Update data salah sasaran",
      symptom: "Dua tugas dengan nama sama ikut berubah saat satu tugas ditandai selesai.",
      code: `const tugas = [
  { id: 1, nama: "Laporan", selesai: false },
  { id: 2, nama: "Laporan", selesai: false }
];

function selesai(nama) {
  for (let i = 0; i < tugas.length; i++) {
    if (tugas[i].nama === nama) {
      tugas[i].selesai = true;
    }
  }
}`,
      question: "Mengapa nama tugas kurang aman untuk menjadi kunci update?",
      hint: "Nama bisa sama, id seharusnya unik.",
      explanation: [
        "Nama bukan identitas unik.",
        "Jika dua data punya nama sama, semuanya bisa ikut berubah.",
        "Gunakan id unik untuk memilih satu data.",
        "CRUD yang aman membutuhkan identifier yang konsisten."
      ],
      solution: `function selesai(id) {
  for (let i = 0; i < tugas.length; i++) {
    if (tugas[i].id === id) {
      tugas[i].selesai = true;
    }
  }
}`
    },
    {
      id: "debug-paraphrase-copy",
      title: "Paraphrase masih terlalu menyalin",
      symptom: "Kalimat tugas hanya mengganti beberapa kata dari sumber asli.",
      code: `Original:
Cloud storage allows users to access files from different devices.

Jawaban:
Cloud storage lets users access files from many devices.`,
      question: "Mengapa jawaban tersebut masih lemah sebagai paraphrase?",
      hint: "Periksa struktur kalimat dan seberapa jauh ide dijelaskan ulang.",
      explanation: [
        "Struktur kalimat masih sangat dekat dengan sumber.",
        "Hanya sedikit kata yang diganti.",
        "Paraphrase seharusnya menunjukkan pemahaman, bukan sekadar sinonim.",
        "Tulis dulu makna utama, lalu susun kalimat baru."
      ],
      solution: `Meaning:
Users can open their files on more than one device because the files are saved online.

Paraphrase:
By saving files online, cloud storage helps people use the same files across multiple devices.`
    },
    {
      id: "debug-localstorage-json",
      title: "localStorage menyimpan array sebagai teks salah",
      symptom: "Data tugas tidak bisa dibaca kembali sebagai array setelah halaman di-refresh.",
      code: `const tugas = ["Logika", "PTIK"];

localStorage.setItem("tugas", tugas);

const hasil = localStorage.getItem("tugas");
console.log(hasil.push("English"));`,
      question: "Apa yang salah dari cara menyimpan dan membaca data tersebut?",
      hint: "localStorage menyimpan string, sedangkan push hanya ada pada array.",
      explanation: [
        "Array disimpan langsung sehingga berubah menjadi string.",
        "getItem mengembalikan string, bukan array.",
        "String tidak punya method push seperti array.",
        "Gunakan JSON.stringify saat menyimpan dan JSON.parse saat membaca."
      ],
      solution: `const tugas = ["Logika", "PTIK"];

localStorage.setItem("tugas", JSON.stringify(tugas));

const hasil = JSON.parse(localStorage.getItem("tugas") || "[]");
hasil.push("English");
console.log(hasil);`
    }
  ];

  const projects = [
    {
      id: "project-dashboard-belajar",
      title: "Dashboard progress belajar semester 1",
      level: "Pemula",
      goal: "Membuat dashboard ringkas berisi mata kuliah, tugas, dan status belajar.",
      example: {
        type: "dashboard",
        title: "Semester 1 Board",
        metrics: [
          ["Materi", "30"],
          ["Tugas", "6"],
          ["Quiz", "85%"],
          ["Project", "2"]
        ],
        flow: ["Baca", "Latihan", "Submit"]
      },
      features: ["Daftar mata kuliah", "Status tugas", "Ringkasan progress", "Prioritas minggu ini"],
      steps: ["Tentukan data yang ditampilkan", "Buat struktur HTML", "Tambahkan style", "Simpan data sederhana di array"],
      hint: "Mulai dari data statis sebelum membuat fitur interaktif.",
      extra: "Tambahkan filter untuk melihat tugas yang belum selesai."
    },
    {
      id: "project-english-portfolio",
      title: "English student profile page",
      level: "Pemula",
      goal: "Membuat halaman profil bahasa Inggris untuk perkenalan akademik.",
      example: {
        type: "article",
        brand: "Student Profile",
        title: "Information Systems Freshman",
        description: "A short academic profile with skills, learning goals, and contact information."
      },
      features: ["Self introduction", "Skills", "Learning goals", "Professional email sample"],
      steps: ["Tulis draft bahasa Inggris", "Susun heading dan paragraf", "Tambahkan daftar skills", "Periksa grammar dasar"],
      hint: "Gunakan kalimat simple present untuk fakta diri.",
      extra: "Tambahkan bagian short presentation script."
    },
    {
      id: "project-algorithm-tool",
      title: "Kalkulator nilai akhir",
      level: "Pemula +",
      goal: "Membuat program yang menghitung nilai akhir dan status kelulusan.",
      example: {
        type: "table",
        title: "Grade Calculator",
        columns: ["Komponen", "Bobot", "Nilai"],
        rows: [
          ["Tugas", "30%", "80"],
          ["UTS", "30%", "75"],
          ["UAS", "40%", "85"]
        ]
      },
      features: ["Input nilai", "Rumus bobot", "Status lulus", "Validasi nilai 0-100"],
      steps: ["Buat IPO", "Tulis pseudocode", "Implementasi JavaScript", "Uji nilai batas"],
      hint: "Uji nilai 59, 60, dan 100 untuk memastikan percabangan benar.",
      extra: "Tambahkan kategori huruf A, B, C, D, dan E."
    },
    {
      id: "project-ptik-map",
      title: "Peta sistem informasi kampus",
      level: "Menengah awal",
      goal: "Memetakan hardware, software, data, prosedur, dan brainware pada satu layanan kampus.",
      example: {
        type: "dashboard",
        title: "Campus System Map",
        metrics: [
          ["Hardware", "4"],
          ["Software", "5"],
          ["Data", "8"],
          ["Users", "3"]
        ],
        flow: ["Input", "Process", "Report"]
      },
      features: ["Komponen sistem", "Alur data", "Risiko keamanan", "Rekomendasi perbaikan"],
      steps: ["Pilih layanan kampus", "Petakan komponen", "Gambar alur data", "Tulis risiko dan solusi"],
      hint: "Pilih layanan yang kamu pakai langsung seperti LMS atau presensi.",
      extra: "Tambahkan checklist CIA untuk layanan tersebut."
    },
    {
      id: "project-business-validation",
      title: "Validasi ide bisnis mahasiswa",
      level: "Menengah awal",
      goal: "Menyusun problem statement, value proposition, BMC ringkas, dan eksperimen.",
      example: {
        type: "business",
        brand: "Campus Eats",
        title: "Find affordable meals near campus",
        description: "A simple validation plan for students who need quick meal recommendations."
      },
      features: ["Problem statement", "Customer interview", "Value proposition", "Lean experiment"],
      steps: ["Tentukan segmen", "Wawancarai calon pengguna", "Susun BMC ringkas", "Tentukan metrik eksperimen"],
      hint: "Jangan mulai dari logo. Mulai dari bukti masalah.",
      extra: "Buat pitch 3 menit berdasarkan data validasi."
    },
    {
      id: "project-crud-todo",
      title: "Aplikasi daftar tugas kuliah",
      level: "Menengah awal",
      goal: "Membuat CRUD sederhana untuk menyimpan dan mengelola tugas semester 1.",
      example: {
        type: "table",
        title: "Study Tasks",
        columns: ["ID", "Tugas", "Status"],
        rows: [
          ["1", "Quiz Logika", "Open"],
          ["2", "Email English", "Done"],
          ["3", "BMC Draft", "Open"]
        ]
      },
      features: ["Tambah tugas", "Lihat daftar", "Tandai selesai", "Hapus tugas"],
      steps: ["Buat array tugas", "Buat function create/read/update/delete", "Tampilkan ke halaman", "Uji id unik"],
      hint: "Gunakan id unik untuk update dan delete.",
      extra: "Simpan tugas di localStorage."
    },
    {
      id: "project-paraphrase-bank",
      title: "Technology paraphrase bank",
      level: "Pemula +",
      goal: "Membuat kumpulan vocabulary dan paraphrase pendek untuk teks teknologi.",
      example: {
        type: "article",
        brand: "Tech Phrase Bank",
        title: "Cloud storage, authentication, and privacy",
        description: "A compact page containing original sentences, meanings, paraphrases, and source notes."
      },
      features: ["Daftar vocabulary", "Original sentence", "Meaning", "Paraphrase", "Source note"],
      steps: ["Pilih 8 istilah teknologi", "Cari kalimat contoh", "Tulis meaning sederhana", "Buat paraphrase", "Tambahkan catatan sumber"],
      hint: "Mulai dari kalimat pendek agar struktur paraphrase mudah diperiksa.",
      extra: "Tambahkan filter berdasarkan topik seperti cloud, security, database, dan interface."
    },
    {
      id: "project-study-target-storage",
      title: "Aplikasi target belajar tersimpan",
      level: "Menengah awal",
      goal: "Membuat aplikasi kecil yang menyimpan daftar target belajar semester 1 di browser.",
      example: {
        type: "table",
        title: "Learning Targets",
        columns: ["ID", "Target", "Status"],
        rows: [
          ["1", "Trace sorting", "Open"],
          ["2", "Paraphrase teks cloud", "Done"],
          ["3", "MVP experiment", "Open"]
        ]
      },
      features: ["Input target", "Render daftar", "Simpan ke localStorage", "Tandai selesai", "Hapus data"],
      steps: ["Buat HTML input dan tombol", "Buat array target", "Pasang event click", "Simpan dengan JSON.stringify", "Baca ulang dengan JSON.parse"],
      hint: "Uji dengan reload browser setelah menambah target.",
      extra: "Tambahkan badge jumlah target selesai dan belum selesai."
    }
  ];

  const badges = [
    { id: "first-step", title: "Mulai Semester", icon: "bi-flag-fill", check: (state) => state.completedLessons.length >= 1 },
    { id: "six-courses", title: "Menyentuh Semua MK", icon: "bi-collection-fill", check: (state) => new Set(state.completedLessons.map((id) => lessons.find((lessonItem) => lessonItem.id === id)?.course).filter(Boolean)).size >= 6 },
    { id: "half-roadmap", title: "Separuh Roadmap", icon: "bi-map-fill", check: (state) => state.completedLessons.length >= 15 },
    { id: "quiz-ready", title: "Quiz Ready", icon: "bi-patch-check-fill", check: (state) => state.quizScores.some((score) => score >= 70) },
    { id: "recall-active", title: "Active Recall", icon: "bi-arrow-repeat", check: (state) => state.completedRecall.length >= 4 },
    { id: "debug-thinker", title: "Debug Thinker", icon: "bi-bug-fill", check: (state) => state.completedDebug.length >= 5 },
    { id: "project-maker", title: "Project Maker", icon: "bi-kanban-fill", check: (state) => state.completedProjects.length >= 2 },
    { id: "semester-complete", title: "Semester 1 Complete", icon: "bi-trophy-fill", check: (state) => state.completedLessons.length >= lessons.length }
  ];

  const editorDefaults = {
    html: `<main class="card">
  <h1>Dashboard Nilai Semester 1</h1>
  <p id="status">Klik Run untuk menghitung nilai akhir.</p>
  <ul id="detail"></ul>
</main>`,
    css: `body {
  font-family: Arial, sans-serif;
  background: #eef3fb;
  color: #172033;
  padding: 24px;
}

.card {
  background: white;
  border: 1px solid #d9e2ee;
  border-radius: 8px;
  max-width: 520px;
  padding: 20px;
}

h1 {
  color: #2563eb;
}`,
    js: `const nilai = {
  tugas: 80,
  uts: 75,
  uas: 85
};

const nilaiAkhir = (nilai.tugas * 0.3) + (nilai.uts * 0.3) + (nilai.uas * 0.4);
const status = nilaiAkhir >= 60 ? "Lulus" : "Tidak lulus";

document.getElementById("status").textContent =
  "Nilai akhir: " + nilaiAkhir + " - " + status;

document.getElementById("detail").innerHTML = [
  "Tugas: " + nilai.tugas,
  "UTS: " + nilai.uts,
  "UAS: " + nilai.uas
].map((item) => "<li>" + item + "</li>").join("");

console.log("Perhitungan selesai.");`
  };

  return {
    lessons,
    quizQuestions,
    recallChallenges,
    debugChallenges,
    projects,
    badges,
    editorDefaults
  };
})();
