window.SILabApp = (() => {
  const data = window.SILabData;
  const progress = window.SILabProgress;
  let currentQuiz = { index: 0, score: 0, answered: false };
  let activeRecallId = data.recallChallenges[0]?.id || "";
  let activeDebugId = data.debugChallenges[0]?.id || "";
  const debugAttempts = {};
  const LESSON_RECALL_KEY = "si-semester-1-lab-lesson-recall-v1";
  const LESSON_EXERCISE_KEY = "si-semester-1-lab-lesson-exercise-v1";
  const LESSON_QUIZ_KEY = "si-semester-1-lab-lesson-quiz-v1";
  let toastInstance;

  const getElement = (id) => document.getElementById(id);
  const courseMeta = {
    "Pendidikan Pancasila": {
      icon: "bi-bank",
      focus: "Etika warga negara, nilai kebangsaan, dan tanggung jawab digital.",
      outcome: "Mampu menganalisis kasus kampus dan teknologi memakai nilai Pancasila."
    },
    "Bahasa Inggris I": {
      icon: "bi-translate",
      focus: "Reading, grammar, writing, email, dan presentasi akademik dasar.",
      outcome: "Mampu memahami teks teknologi dan menyampaikan ide akademik sederhana."
    },
    "Logika & Algoritma": {
      icon: "bi-diagram-3",
      focus: "Logika benar-salah, IPO, pseudocode, flowchart, array, dan pencarian.",
      outcome: "Mampu merancang langkah solusi sebelum menulis program."
    },
    "Pengantar Teknologi Informasi & Komunikasi": {
      icon: "bi-pc-display",
      focus: "Sistem komputer, jaringan, data, sistem informasi, keamanan, dan etika digital.",
      outcome: "Mampu melihat teknologi sebagai sistem yang terdiri dari manusia, proses, data, dan perangkat."
    },
    Entrepreneurship: {
      icon: "bi-lightbulb",
      focus: "Problem orientation, customer discovery, model bisnis, eksperimen, keuangan, dan pitch.",
      outcome: "Mampu menyusun ide bisnis berbasis masalah dan mengujinya dengan bukti awal."
    },
    "Dasar Pemrograman (P)": {
      icon: "bi-braces",
      focus: "Variabel, percabangan, loop, function, array, CRUD, dan debugging praktikum.",
      outcome: "Mampu membuat program kecil yang mengolah data dan memperbaiki error dasar."
    }
  };

  const courseApplicationExamples = {
    "Pendidikan Pancasila": [
      {
        title: "Keputusan organisasi kampus",
        detail: "Gunakan fakta kasus, nilai sila yang relevan, dampak bagi pihak terdampak, lalu susun sikap yang adil dan dapat dipertanggungjawabkan."
      },
      {
        title: "Etika data mahasiswa",
        detail: "Nilai kemanusiaan dan keadilan membantu menilai apakah pengumpulan, penyimpanan, dan penggunaan data sudah menghormati hak mahasiswa."
      },
      {
        title: "Diskusi ruang digital",
        detail: "Nilai persatuan dan musyawarah dipakai untuk menjaga diskusi kelas tetap rasional, santun, dan tidak memecah kelompok."
      }
    ],
    "Bahasa Inggris I": [
      {
        title: "Membaca dokumentasi teknologi",
        detail: "Cari tujuan teks, istilah kunci, langkah penggunaan, peringatan, dan contoh sebelum menerjemahkan seluruh paragraf."
      },
      {
        title: "Komunikasi dengan dosen",
        detail: "Gunakan struktur pembuka, tujuan jelas, detail singkat, penutup sopan, dan identitas agar pesan mudah ditindaklanjuti."
      },
      {
        title: "Presentasi akademik",
        detail: "Susun opening, tiga poin utama, signposting, dan closing agar audiens mengikuti alur penjelasan tanpa bingung."
      }
    ],
    "Logika & Algoritma": [
      {
        title: "Validasi login",
        detail: "Tentukan proposisi, operator logika, kondisi benar-salah, dan hasil yang diharapkan sebelum menulis algoritma."
      },
      {
        title: "Perhitungan nilai",
        detail: "Tulis input, proses, output, lalu uji data batas seperti nilai minimum, maksimum, dan kondisi tepat di ambang kelulusan."
      },
      {
        title: "Pencarian data",
        detail: "Gunakan array dan loop untuk memahami bagaimana sistem menemukan NIM, nama, atau transaksi dari daftar data."
      }
    ],
    "Pengantar Teknologi Informasi & Komunikasi": [
      {
        title: "Sistem akademik kampus",
        detail: "Petakan pengguna, data, aplikasi, prosedur, jaringan, dan risiko keamanan pada layanan seperti SIAKAD atau LMS."
      },
      {
        title: "Kolaborasi tugas online",
        detail: "Perhatikan akses file, versi dokumen, backup, dan etika membagikan data saat bekerja memakai cloud."
      },
      {
        title: "Keamanan akun",
        detail: "Terapkan password unik, 2FA, pengecekan domain, dan kebiasaan tidak membagikan OTP untuk menjaga akun kampus."
      }
    ],
    Entrepreneurship: [
      {
        title: "Validasi masalah mahasiswa",
        detail: "Mulai dari masalah nyata, wawancarai segmen spesifik, catat bukti, lalu tentukan apakah solusi memang dibutuhkan."
      },
      {
        title: "Model bisnis sederhana",
        detail: "Hubungkan segmen pelanggan, value proposition, channel, biaya, dan pendapatan agar ide bisnis tidak hanya menarik di slide."
      },
      {
        title: "Eksperimen kecil",
        detail: "Gunakan form minat, prototype manual, pre-order, atau wawancara terarah untuk menguji asumsi sebelum membangun produk penuh."
      }
    ],
    "Dasar Pemrograman (P)": [
      {
        title: "Program nilai mahasiswa",
        detail: "Gunakan variabel, tipe data number, percabangan, function, dan output status untuk membuat program yang mudah diuji."
      },
      {
        title: "Daftar tugas kuliah",
        detail: "Latih array, object, CRUD, dan loop dengan data kecil sebelum masuk ke database atau framework."
      },
      {
        title: "Debugging praktikum",
        detail: "Baca pesan error, cek tipe data, cetak nilai sementara, uji input kecil, lalu perbaiki satu masalah dalam satu waktu."
      }
    ]
  };

  const courseCommonMistakes = {
    "Pendidikan Pancasila": [
      {
        title: "Berhenti pada hafalan sila",
        fix: "Selalu hubungkan sila dengan fakta kasus, dampak, dan sikap yang perlu dilakukan."
      },
      {
        title: "Memaksakan semua sila untuk semua kasus",
        fix: "Pilih nilai yang paling relevan agar analisis tetap tajam dan tidak melebar."
      },
      {
        title: "Menulis opini tanpa dasar",
        fix: "Pisahkan fakta, nilai, argumen, dan rekomendasi supaya jawaban akademik lebih kuat."
      }
    ],
    "Bahasa Inggris I": [
      {
        title: "Menerjemahkan kata demi kata",
        fix: "Tentukan tujuan membaca dulu, lalu pakai skimming, scanning, dan context clues."
      },
      {
        title: "Kalimat tidak punya struktur",
        fix: "Cek subject, verb, object atau complement, lalu pastikan tense sesuai konteks."
      },
      {
        title: "Nada tulisan terlalu santai",
        fix: "Gunakan subject jelas, salam, tujuan, detail singkat, dan penutup profesional."
      }
    ],
    "Logika & Algoritma": [
      {
        title: "Langsung menulis solusi tanpa IPO",
        fix: "Tulis input, proses, dan output agar batas masalah jelas sebelum membuat algoritma."
      },
      {
        title: "Salah memilih AND dan OR",
        fix: "Uji semua kombinasi kondisi memakai truth table atau contoh data kecil."
      },
      {
        title: "Tidak menguji data batas",
        fix: "Coba nilai minimum, maksimum, tepat batas, dan data kosong agar solusi tidak rapuh."
      }
    ],
    "Pengantar Teknologi Informasi & Komunikasi": [
      {
        title: "Melihat teknologi hanya sebagai perangkat",
        fix: "Analisis juga manusia, proses, data, software, jaringan, dan aturan organisasi."
      },
      {
        title: "Menyamakan data dengan informasi",
        fix: "Tanyakan apakah data sudah diolah, diberi konteks, dan membantu keputusan."
      },
      {
        title: "Mengabaikan keamanan dasar",
        fix: "Selalu cek akses, password, backup, privasi, dan risiko penyalahgunaan."
      }
    ],
    Entrepreneurship: [
      {
        title: "Mulai dari produk, bukan masalah",
        fix: "Tentukan segmen, masalah, dampak, dan bukti sebelum membangun solusi."
      },
      {
        title: "Segmen pelanggan terlalu umum",
        fix: "Persempit siapa pengguna awal, kapan masalah terjadi, dan apa alternatif mereka."
      },
      {
        title: "Metrik validasi tidak jelas",
        fix: "Gunakan angka konkret seperti jumlah pendaftar, wawancara valid, pre-order, atau permintaan demo."
      }
    ],
    "Dasar Pemrograman (P)": [
      {
        title: "Menghafal syntax tanpa memahami alur",
        fix: "Jelaskan dulu input, proses, output, dan perubahan nilai sebelum fokus pada syntax."
      },
      {
        title: "Tidak memperhatikan tipe data",
        fix: "Pastikan angka, teks, boolean, array, dan object dipakai sesuai kebutuhan program."
      },
      {
        title: "Debugging dengan menebak-nebak",
        fix: "Baca error, isolasi bagian kecil, cetak nilai, lalu uji satu perubahan setiap kali."
      }
    ]
  };

  const escapeHTML = (value = "") =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const loadLessonRecallAnswers = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(LESSON_RECALL_KEY) || "{}");
      if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
      return Object.fromEntries(
        Object.entries(saved).filter(
          ([id, answer]) => data.lessons.some((lessonItem) => lessonItem.id === id) && typeof answer === "string"
        )
      );
    } catch (error) {
      console.warn("Jawaban recall materi tidak dapat dibaca.", error);
      return {};
    }
  };

  const lessonRecallAnswers = loadLessonRecallAnswers();

  const loadLessonExerciseAnswers = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(LESSON_EXERCISE_KEY) || "{}");
      if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
      return Object.fromEntries(
        Object.entries(saved).filter(
          ([id, answer]) => data.lessons.some((lessonItem) => lessonItem.id === id) && typeof answer === "string"
        )
      );
    } catch (error) {
      console.warn("Jawaban latihan kecil tidak dapat dibaca.", error);
      return {};
    }
  };

  const lessonExerciseAnswers = loadLessonExerciseAnswers();

  const loadLessonQuizAnswers = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(LESSON_QUIZ_KEY) || "{}");
      if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
      return Object.fromEntries(
        Object.entries(saved).filter(([id, answer]) => {
          const lessonItem = data.lessons.find((item) => item.id === id);
          return lessonItem && Number.isInteger(answer) && answer >= 0 && answer < lessonItem.quiz.options.length;
        })
      );
    } catch (error) {
      console.warn("Jawaban quiz singkat tidak dapat dibaca.", error);
      return {};
    }
  };

  const lessonQuizAnswers = loadLessonQuizAnswers();

  const saveLessonRecallAnswers = () => {
    try {
      localStorage.setItem(LESSON_RECALL_KEY, JSON.stringify(lessonRecallAnswers));
      return true;
    } catch (error) {
      console.warn("Jawaban recall materi tidak dapat disimpan.", error);
      return false;
    }
  };

  const saveLessonExerciseAnswers = () => {
    try {
      localStorage.setItem(LESSON_EXERCISE_KEY, JSON.stringify(lessonExerciseAnswers));
      return true;
    } catch (error) {
      console.warn("Jawaban latihan kecil tidak dapat disimpan.", error);
      return false;
    }
  };

  const saveLessonQuizAnswers = () => {
    try {
      localStorage.setItem(LESSON_QUIZ_KEY, JSON.stringify(lessonQuizAnswers));
      return true;
    } catch (error) {
      console.warn("Jawaban quiz singkat tidak dapat disimpan.", error);
      return false;
    }
  };

  const showToast = (message) => {
    const toastElement = getElement("appToastElement");
    const toastMessage = getElement("toastMessage");
    if (!toastElement || !toastMessage || !window.bootstrap) return;
    toastMessage.textContent = message;
    toastInstance ||= bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 2800 });
    toastInstance.show();
  };

  const showBadgeToasts = (unlocked) => {
    if (unlocked?.length) showToast(`Badge baru: ${unlocked.join(", ")}`);
  };

  const lessonHref = (id) => `materi-detail.html?id=${encodeURIComponent(id)}`;

  const getLessonIndex = (id) => data.lessons.findIndex((lessonItem) => lessonItem.id === id);

  const renderCodeBlock = (code, filename = "catatan.txt") => {
    const lines = String(code).split("\n");
    return `
      <div class="code-card">
        <div class="code-card-head">
          <span class="code-card-title"><i class="bi bi-file-earmark-code"></i> ${escapeHTML(filename)}</span>
          <button class="copy-code" type="button" data-copy-code="${encodeURIComponent(code)}">
            <i class="bi bi-copy"></i> Salin
          </button>
        </div>
        <div class="code-lines">
          ${lines
            .map(
              (line, index) => `
                <div class="code-line">
                  <span class="line-no">${index + 1}</span>
                  <span class="line-code">${escapeHTML(line) || " "}</span>
                </div>`
            )
            .join("")}
        </div>
      </div>`;
  };

  const getLessonDefinition = (item) => item.definition || item.explanation || item.goal;

  const renderKeyPoints = (item) => {
    const points = item.keyPoints?.length ? item.keyPoints : item.concepts.map((concept) => concept.term);
    return `
      <ol class="key-point-list">
        ${points.map((point) => `<li><span>${escapeHTML(point)}</span></li>`).join("")}
      </ol>`;
  };

  const getCourseFallbackMeta = (course) =>
    courseMeta[course] || {
      icon: "bi-journal-text",
      focus: "Pelajari konsep inti secara bertahap.",
      outcome: "Mampu menjelaskan dan menerapkan konsep utama."
    };

  const renderFullDiscussion = (item) => {
    const meta = getCourseFallbackMeta(item.course);
    const conceptNames = item.concepts.map((concept) => concept.term).join(", ");
    return `
      <div class="discussion-panel">
        <p>${escapeHTML(getLessonDefinition(item))}</p>
        <p>Dalam mata kuliah ${escapeHTML(item.course)}, materi ini dipakai untuk ${escapeHTML(item.goal.charAt(0).toLowerCase() + item.goal.slice(1))}</p>
        <p>Fokus besarnya adalah ${escapeHTML(meta.focus.charAt(0).toLowerCase() + meta.focus.slice(1))} Agar pemahaman tidak berhenti di teori, pahami hubungan antara ${escapeHTML(conceptNames)}, contoh terstruktur, latihan kecil, dan recall.</p>
        <p>${escapeHTML(item.problem)}</p>
      </div>`;
  };

  const renderConceptBreakdown = (item) => `
    <div class="concept-detail-grid">
      ${item.concepts
        .map(
          (concept) => `
            <article class="concept-detail-item">
              <strong>${escapeHTML(concept.term)}</strong>
              <p>${escapeHTML(concept.detail)}</p>
              <ul>
                <li>Jelaskan maknanya dengan bahasa sendiri.</li>
                <li>Hubungkan dengan contoh pada bagian latihan atau studi kasus.</li>
                <li>Bedakan konsep ini dari istilah lain yang mirip.</li>
              </ul>
            </article>`
        )
        .join("")}
    </div>`;

  const renderApplicationExamples = (item) => {
    const examples = courseApplicationExamples[item.course] || [];
    return `
      <div class="application-grid">
        ${examples
          .map(
            (example) => `
              <article class="application-item">
                <strong>${escapeHTML(example.title)}</strong>
                <p>${escapeHTML(example.detail)}</p>
              </article>`
          )
          .join("")}
      </div>`;
  };

  const renderCommonMistakes = (item) => {
    const mistakes = courseCommonMistakes[item.course] || [];
    return `
      <div class="mistake-list">
        ${mistakes
          .map(
            (mistake) => `
              <div class="mistake-item">
                <strong>${escapeHTML(mistake.title)}</strong>
                <span>${escapeHTML(mistake.fix)}</span>
              </div>`
          )
          .join("")}
      </div>
      <div class="mistake-debug">
        <strong>Debug konsep materi ini:</strong>
        <span>${escapeHTML(item.debug.question)}</span>
      </div>`;
  };

  const renderLessonSummary = (item) => `
    <div class="summary-panel">
      <div>
        <strong>Inti materi</strong>
        <p>${escapeHTML(getLessonDefinition(item))}</p>
      </div>
      <div>
        <strong>Konsep yang wajib kuat</strong>
        <p>${escapeHTML(item.concepts.map((concept) => concept.term).join(", "))}</p>
      </div>
      <div>
        <strong>Bukti sudah belajar</strong>
        <p>Jawab latihan kecil, simpan recall, kerjakan quiz singkat, lalu jelaskan ulang tanpa melihat catatan.</p>
      </div>
    </div>`;

  const renderDeepQuestions = (item) => `
    <ol class="deep-question-list">
      <li>${escapeHTML(item.recall)}</li>
      <li>Mengapa materi ini penting untuk mahasiswa Sistem Informasi semester 1?</li>
      <li>Bagaimana kamu menerapkan konsep ini pada kasus nyata di kampus?</li>
      <li>Apa risiko jika konsep ini dipahami secara keliru?</li>
    </ol>`;

  const renderMasteryTargets = (item) => `
    <div class="mastery-grid">
      <span><i class="bi bi-check2-circle"></i> Bisa menjelaskan pengertian materi dengan bahasa sendiri.</span>
      <span><i class="bi bi-check2-circle"></i> Bisa menyebut konsep inti: ${escapeHTML(item.concepts.map((concept) => concept.term).join(", "))}.</span>
      <span><i class="bi bi-check2-circle"></i> Bisa menerapkan materi pada contoh kampus atau Sistem Informasi.</span>
      <span><i class="bi bi-check2-circle"></i> Bisa menemukan kesalahan konsep dan memperbaiki alasannya.</span>
    </div>`;

  const renderLessons = () => {
    const lessonGrid = getElement("lessonGrid");
    if (!lessonGrid) return;
    const completed = progress.state.completedLessons;
    const courseGroups = data.lessons.reduce((groups, item) => {
      const course = item.course;
      if (!groups.has(course)) groups.set(course, []);
      groups.get(course).push(item);
      return groups;
    }, new Map());

    lessonGrid.innerHTML = [...courseGroups.entries()]
      .map(([course, lessons]) => {
        const completedInCourse = lessons.filter((item) => completed.includes(item.id)).length;
        const meta = courseMeta[course] || { icon: "bi-journal-text", focus: "Pelajari konsep inti secara bertahap.", outcome: "Mampu menjelaskan dan menerapkan konsep utama." };
        const firstUnfinished = lessons.find((item) => !completed.includes(item.id)) || lessons[0];
        const coursePercent = Math.round((completedInCourse / lessons.length) * 100);
        return `
          <section class="course-group">
            <div class="course-group-head">
              <div class="course-title-block">
                <span class="course-icon"><i class="bi ${escapeHTML(meta.icon)}"></i></span>
                <div>
                  <span class="eyebrow">${escapeHTML(course)}</span>
                  <h3>${escapeHTML(course)}</h3>
                </div>
              </div>
              <div class="course-progress-box">
                <div class="course-progress-pill">${completedInCourse}/${lessons.length} selesai</div>
                <div class="course-progress-track" aria-label="Progress ${escapeHTML(course)}">
                  <span style="width: ${coursePercent}%"></span>
                </div>
              </div>
            </div>
            <div class="course-brief">
              <div>
                <strong>Fokus belajar</strong>
                <p>${escapeHTML(meta.focus)}</p>
              </div>
              <div>
                <strong>Target paham</strong>
                <p>${escapeHTML(meta.outcome)}</p>
              </div>
              <a class="btn btn-soft" href="${lessonHref(firstUnfinished.id)}">
                ${completedInCourse === lessons.length ? "Ulangi Materi" : "Lanjutkan"} <i class="bi bi-arrow-right"></i>
              </a>
            </div>
            <div class="course-sequence-label">
              <span>Urutan belajar disarankan</span>
              <small>Jangan lompat jika konsep sebelumnya belum kuat.</small>
            </div>
            <div class="course-lesson-grid">
              ${lessons
                .map(
                  (item, courseLessonIndex) => `
                    <a class="lesson-card ${completed.includes(item.id) ? "completed" : ""}" href="${lessonHref(item.id)}">
                      ${completed.includes(item.id) ? '<i class="bi bi-check-circle-fill complete-mark"></i>' : ""}
                      <span class="lesson-icon ${escapeHTML(item.color)}"><i class="bi ${escapeHTML(item.icon)}"></i></span>
                      <span class="lesson-number">Materi ${String(courseLessonIndex + 1).padStart(2, "0")}</span>
                      <h3>${escapeHTML(item.title)}</h3>
                      <p class="lesson-card-definition">${escapeHTML(getLessonDefinition(item))}</p>
                      <p class="lesson-card-meta"><i class="bi bi-clock"></i> ${escapeHTML(item.duration)}</p>
                    </a>`
                )
                .join("")}
            </div>
          </section>`;
      })
      .join("");
    const roadmapCompleted = getElement("roadmapCompleted");
    if (roadmapCompleted) roadmapCompleted.textContent = `${completed.length}/${data.lessons.length}`;
  };

  const renderStudyRecommendation = () => {
    const target = getElement("studyRecommendation");
    if (!target) return;
    const nextLesson = data.lessons.find((lessonItem) => !progress.state.completedLessons.includes(lessonItem.id));
    const lastLesson = data.lessons.find((lessonItem) => lessonItem.id === progress.state.lastLesson);
    const averageQuiz = progress.getAverageQuiz();

    target.innerHTML = `
      <div class="study-recommendation-main">
        <span class="eyebrow"><i class="bi bi-compass"></i> Rekomendasi belajar</span>
        ${
          nextLesson
            ? `<h3>Lanjutkan: ${escapeHTML(nextLesson.title)}</h3>
               <p>${escapeHTML(nextLesson.course)} - ${escapeHTML(nextLesson.goal)}</p>
               <a class="btn btn-primary" href="${lessonHref(nextLesson.id)}">Mulai sesi belajar <i class="bi bi-arrow-right"></i></a>`
            : `<h3>Semua materi utama selesai.</h3>
               <p>Gunakan mini project dan debugging untuk memperkuat pemahaman lintas mata kuliah.</p>
               <a class="btn btn-primary" href="projects.html">Buka mini project <i class="bi bi-arrow-right"></i></a>`
        }
      </div>
      <div class="study-recommendation-side">
        <div><strong>${progress.state.completedLessons.length}/${data.lessons.length}</strong><span>materi selesai</span></div>
        <div><strong>${averageQuiz}</strong><span>rata-rata quiz</span></div>
        <div><strong>${lastLesson ? escapeHTML(lastLesson.course) : "Mulai"}</strong><span>sesi terakhir</span></div>
      </div>`;
  };

  const getNextLearningPanel = (id) => {
    const lessonIndex = data.lessons.findIndex((item) => item.id === id);
    const nextLesson = data.lessons[lessonIndex + 1];
    return `
      <div class="next-learning-panel" id="nextLearningPanel">
        <p><strong>Materi ini selesai.</strong> Lanjutkan ke materi berikutnya atau kembali ke daftar.</p>
        <a class="btn btn-soft" href="materi.html#materi"><i class="bi bi-grid"></i> Kembali ke Daftar</a>
        ${
          nextLesson
            ? `<a class="btn btn-primary" href="${lessonHref(nextLesson.id)}">Lanjut Materi Berikutnya <i class="bi bi-arrow-right"></i></a>`
            : `<a class="btn btn-primary" href="progress.html">Lihat Progress <i class="bi bi-arrow-right"></i></a>`
        }
      </div>`;
  };

  const showNextLearningPanel = (id) => {
    const target = getElement("nextLearningPanel");
    if (target) target.outerHTML = getNextLearningPanel(id);
  };

  const updateUnderstandingGate = (form) => {
    if (!form) return;
    const boxes = [...form.querySelectorAll("[data-understanding-box]")];
    const isReady = boxes.length > 0 && boxes.every((box) => box.checked);
    const lessonId = form.dataset.understandingCheck;
    const button = document.querySelector(`[data-complete-lesson="${CSS.escape(lessonId)}"]`);
    const status = form.querySelector("[data-understanding-status]");
    if (button && !progress.state.completedLessons.includes(lessonId)) button.disabled = !isReady;
    if (status) status.textContent = isReady
      ? "Pemahaman siap. Kamu boleh menandai materi selesai."
      : "Centang semua checklist agar tombol selesai aktif.";
  };

  const getLessonQuizFeedback = (item, selected) =>
    `<strong>${selected === item.quiz.answer ? "Benar." : "Belum tepat."}</strong> ${escapeHTML(item.quiz.explanation)}`;

  const renderLessonQuiz = (item) => {
    const selected = lessonQuizAnswers[item.id];
    const hasSelected = Number.isInteger(selected);
    return `
      <div class="quiz-options" data-lesson-quiz="${item.id}">
        ${item.quiz.options
          .map(
            (option, index) => `
              <button
                class="quiz-option ${hasSelected && index === item.quiz.answer ? "correct" : ""} ${
                  hasSelected && index === selected && selected !== item.quiz.answer ? "wrong" : ""
                }"
                type="button"
                data-lesson-answer="${index}"
                ${hasSelected ? "disabled" : ""}
              >
                ${escapeHTML(option)}
              </button>`
          )
          .join("")}
      </div>
      <div class="quiz-feedback ${hasSelected ? "" : "d-none"}" data-lesson-feedback>
        ${hasSelected ? getLessonQuizFeedback(item, selected) : ""}
      </div>`;
  };

  const renderLessonDetail = (id, shouldScroll = true) => {
    const item = data.lessons.find((lessonItem) => lessonItem.id === id);
    const lessonDetail = getElement("lessonDetail");
    if (!lessonDetail) return;
    if (!item) {
      lessonDetail.innerHTML = `
        <article class="lesson-detail-card">
          <div class="lesson-detail-body text-center py-5">
            <span class="feature-icon amber mb-3"><i class="bi bi-exclamation-triangle"></i></span>
            <h2>Materi tidak ditemukan</h2>
            <p>ID materi pada URL tidak cocok dengan data materi yang tersedia.</p>
            <a class="btn btn-primary" href="materi.html#materi"><i class="bi bi-arrow-left"></i> Kembali ke Daftar Materi</a>
          </div>
        </article>`;
      getElement("lessonDetailSection")?.classList.remove("d-none");
      return;
    }
    progress.setLastLesson(id);
    const courseLessons = data.lessons.filter((lessonItem) => lessonItem.course === item.course);
    const courseLessonIndex = courseLessons.findIndex((lessonItem) => lessonItem.id === id);
    const isCompleted = progress.state.completedLessons.includes(id);

    lessonDetail.innerHTML = `
      <article class="lesson-detail-card">
        <header class="lesson-detail-head">
          <div class="d-flex justify-content-between gap-3">
            <div>
              <span class="eyebrow">${escapeHTML(item.course)} - Materi ${String(courseLessonIndex + 1).padStart(2, "0")} dari ${courseLessons.length} - ${escapeHTML(item.duration)}</span>
              <h2 class="mt-2 mb-1">${escapeHTML(item.title)}</h2>
              <p class="mb-0">${escapeHTML(item.goal)}</p>
            </div>
            <a class="icon-btn flex-shrink-0" href="materi.html#materi" aria-label="Kembali ke daftar materi">
              <i class="bi bi-x-lg"></i>
            </a>
          </div>
        </header>
        <div class="lesson-detail-body">
          <section class="study-session-panel">
            <div>
              <span class="eyebrow"><i class="bi bi-stopwatch"></i> Sesi belajar efektif</span>
              <h3>Ikuti alur 30 menit ini sebelum lanjut.</h3>
            </div>
            <div class="study-session-steps">
              <span><strong>5m</strong> Orientasi tujuan</span>
              <span><strong>10m</strong> Pahami konsep inti</span>
              <span><strong>7m</strong> Latihan dan debugging</span>
              <span><strong>5m</strong> Koreksi pembahasan</span>
              <span><strong>3m</strong> Recall tanpa melihat catatan</span>
            </div>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-info-circle"></i> Pengertian singkat</h3>
            <div class="definition-box"><p class="mb-0">${escapeHTML(getLessonDefinition(item))}</p></div>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-list-check"></i> Apa saja isinya/pokok bahasan</h3>
            ${renderKeyPoints(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-flag"></i> Tujuan belajar</h3>
            <p class="mb-0">${escapeHTML(item.goal)}</p>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-bullseye"></i> Target kompetensi akhir</h3>
            ${renderMasteryTargets(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-chat-left-text"></i> Masalah yang dipelajari</h3>
            <p class="mb-0">${escapeHTML(item.problem)}</p>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-lightbulb"></i> Analogi konsep</h3>
            <div class="analogy-box"><p class="mb-0">${escapeHTML(item.analogy)}</p></div>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-book"></i> Pembahasan inti</h3>
            <p class="mb-0">${escapeHTML(item.explanation)}</p>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-journal-richtext"></i> Pembahasan lengkap</h3>
            ${renderFullDiscussion(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-diagram-3"></i> Konsep inti</h3>
            <div class="concept-grid">
              ${item.concepts
                .map(
                  (concept) => `
                    <div class="concept-item">
                      <strong>${escapeHTML(concept.term)}</strong>
                      <span>${escapeHTML(concept.detail)}</span>
                    </div>`
                )
                .join("")}
            </div>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-layout-text-window-reverse"></i> Uraian setiap konsep</h3>
            ${renderConceptBreakdown(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-mortarboard"></i> Catatan kampus profesional</h3>
            <ul class="campus-list">
              ${item.campusNotes.map((note) => `<li>${escapeHTML(note)}</li>`).join("")}
            </ul>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-window-stack"></i> Contoh penerapan kampus dan SI</h3>
            ${renderApplicationExamples(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-exclamation-diamond"></i> Kesalahan umum yang harus dihindari</h3>
            ${renderCommonMistakes(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-file-earmark-code"></i> Contoh terstruktur</h3>
            ${renderCodeBlock(item.code, item.codeLabel)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-list-ol"></i> Penjelasan contoh</h3>
            <div class="line-notes">
              ${item.lineNotes.map((note, index) => `<div class="line-note"><strong>${index + 1}.</strong> ${escapeHTML(note)}</div>`).join("")}
            </div>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-card-checklist"></i> Rangkuman belajar</h3>
            ${renderLessonSummary(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-pencil-square"></i> Latihan kecil</h3>
            <div class="practice-box"><p class="mb-0">${escapeHTML(item.exercise)}</p></div>
            <form class="lesson-answer-form" data-lesson-exercise-form="${item.id}">
              <label class="debug-field-label" for="lessonExerciseAnswer">Tulis jawaban latihanmu.</label>
              <textarea
                class="recall-input"
                id="lessonExerciseAnswer"
                name="answer"
                placeholder="Tulis jawaban latihan kecil di sini..."
                required
              >${escapeHTML(lessonExerciseAnswers[item.id] || "")}</textarea>
              <button class="btn btn-soft mt-3" type="submit"><i class="bi bi-floppy"></i> Simpan jawaban latihan</button>
            </form>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-arrow-repeat"></i> Recall materi</h3>
            <p>${escapeHTML(item.recall)}</p>
            <form data-lesson-recall-form="${item.id}">
              <label class="debug-field-label" for="lessonRecallAnswer">Tulis jawabanmu dengan bahasa sendiri.</label>
              <textarea
                class="recall-input"
                id="lessonRecallAnswer"
                name="answer"
                placeholder="Tulis jawaban recall di sini..."
                required
              >${escapeHTML(lessonRecallAnswers[item.id] || "")}</textarea>
              <button class="btn btn-soft mt-3" type="submit"><i class="bi bi-floppy"></i> Simpan jawaban</button>
            </form>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-bug"></i> Concept debugging</h3>
            <p><strong>Pertanyaan:</strong> ${escapeHTML(item.debug.question)}</p>
            <button class="btn btn-soft me-2" type="button" data-toggle-target="lessonHint">Lihat hint</button>
            <button class="btn btn-soft" type="button" data-toggle-target="lessonDebugSolution">Lihat pembahasan</button>
            <div class="hint-box mt-3 d-none" id="lessonHint"><p class="mb-0">${escapeHTML(item.debug.hint)}</p></div>
            <div class="explanation-box mt-3 d-none" id="lessonDebugSolution"><p class="mb-0">${escapeHTML(item.debug.solution)}</p></div>
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-patch-question"></i> Quiz singkat</h3>
            <p>${escapeHTML(item.quiz.question)}</p>
            ${renderLessonQuiz(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-question-circle"></i> Pertanyaan pendalaman</h3>
            ${renderDeepQuestions(item)}
          </section>
          <section class="detail-block">
            <h3><i class="bi bi-clipboard-check"></i> Cek paham sebelum selesai</h3>
            <form class="understanding-check" data-understanding-check="${item.id}">
              <label>
                <input type="checkbox" data-understanding-box ${isCompleted ? "checked" : ""} />
                <span>Saya bisa menjelaskan tujuan dan inti materi ini tanpa membaca ulang teks.</span>
              </label>
              <label>
                <input type="checkbox" data-understanding-box ${isCompleted ? "checked" : ""} />
                <span>Saya bisa memberi contoh penerapan materi ini dalam konteks kampus atau Sistem Informasi.</span>
              </label>
              <label>
                <input type="checkbox" data-understanding-box ${isCompleted ? "checked" : ""} />
                <span>Saya sudah mengerjakan latihan kecil atau menulis jawaban recall dengan bahasa sendiri.</span>
              </label>
              <p class="understanding-status" data-understanding-status>
                ${isCompleted ? "Checklist sudah terpenuhi." : "Centang semua checklist agar tombol selesai aktif."}
              </p>
            </form>
            <div class="lesson-actions">
              <button class="btn btn-primary" type="button" data-complete-lesson="${item.id}" ${isCompleted ? "" : "disabled"}>
                <i class="bi bi-check2-circle"></i> ${isCompleted ? "Sudah selesai" : "Tandai Selesai"}
              </button>
              <a class="btn btn-soft" href="editor.html" target="_blank" rel="noopener noreferrer"><i class="bi bi-terminal"></i> Praktik di editor</a>
            </div>
            ${isCompleted ? getNextLearningPanel(item.id) : '<div id="nextLearningPanel"></div>'}
          </section>
        </div>
      </article>`;

    getElement("lessonDetailSection")?.classList.remove("d-none");
    if (shouldScroll) getElement("lessonDetailSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const closeLesson = () => {
    if (document.body.dataset.lessonPage === "true") {
      window.location.href = "materi.html#materi";
      return;
    }
    getElement("lessonDetailSection")?.classList.add("d-none");
    getElement("materi")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderQuiz = () => {
    const container = getElement("quizContainer");
    if (!container) return;
    if (currentQuiz.index >= data.quizQuestions.length) {
      const percentage = Math.round((currentQuiz.score / data.quizQuestions.length) * 100);
      const unlocked = progress.saveQuizScore(percentage);
      updateProgress();
      container.innerHTML = `
        <div class="quiz-card">
          <div class="quiz-body text-center py-5">
            <span class="feature-icon amber mb-3"><i class="bi bi-award"></i></span>
            <h3>Quiz selesai</h3>
            <p>Skor kamu <strong>${percentage}</strong> dari 100. ${percentage >= 70 ? "Pemahaman dasar sudah kuat." : "Baca ulang materi yang belum stabil, lalu coba lagi."}</p>
            <button class="btn btn-primary" type="button" data-retry-quiz><i class="bi bi-arrow-counterclockwise"></i> Ulangi quiz</button>
          </div>
        </div>`;
      showToast(`Quiz selesai. Skor kamu ${percentage}/100.`);
      showBadgeToasts(unlocked);
      return;
    }

    const item = data.quizQuestions[currentQuiz.index];
    const currentNumber = currentQuiz.index + 1;
    container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-progress">
          <div class="d-flex justify-content-between gap-3 mb-2">
            <span class="mini-label">Pertanyaan ${currentNumber} dari ${data.quizQuestions.length}</span>
            <span class="mini-label">Benar ${currentQuiz.score}</span>
          </div>
          <div class="progress" role="progressbar" aria-label="Progress quiz" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar" style="width: ${(currentQuiz.index / data.quizQuestions.length) * 100}%"></div>
          </div>
        </div>
        <div class="quiz-body">
          <h3 class="quiz-question">${escapeHTML(item.question)}</h3>
          <div class="quiz-options">
            ${item.options
              .map((option, index) => `<button class="quiz-option" type="button" data-quiz-answer="${index}">${escapeHTML(option)}</button>`)
              .join("")}
          </div>
          <div class="quiz-feedback d-none" id="quizFeedback"></div>
        </div>
      </div>`;
  };

  const answerQuiz = (selectedIndex) => {
    if (currentQuiz.answered) return;
    currentQuiz.answered = true;
    const item = data.quizQuestions[currentQuiz.index];
    document.querySelectorAll("[data-quiz-answer]").forEach((button, index) => {
      button.disabled = true;
      if (index === item.answer) button.classList.add("correct");
      if (index === selectedIndex && selectedIndex !== item.answer) button.classList.add("wrong");
    });
    if (selectedIndex === item.answer) currentQuiz.score += 1;
    const feedback = getElement("quizFeedback");
    feedback.classList.remove("d-none");
    feedback.innerHTML = `
      <strong>${selectedIndex === item.answer ? "Benar." : "Belum tepat."}</strong>
      ${escapeHTML(item.explanation)}
      <button class="btn btn-primary d-block mt-3" type="button" data-next-quiz>
        ${currentQuiz.index === data.quizQuestions.length - 1 ? "Lihat skor akhir" : "Pertanyaan berikutnya"} <i class="bi bi-arrow-right"></i>
      </button>`;
  };

  const renderRecallChallenge = (id = activeRecallId) => {
    const recallList = getElement("recallList");
    const recallDetail = getElement("recallDetail");
    if (!recallList || !recallDetail) return;
    activeRecallId = id;
    const item = data.recallChallenges.find((challenge) => challenge.id === id) || data.recallChallenges[0];
    const completed = progress.state.completedRecall;
    recallList.innerHTML = data.recallChallenges
      .map(
        (challenge, index) => `
          <button class="challenge-list-btn ${challenge.id === item.id ? "active" : ""} ${completed.includes(challenge.id) ? "completed" : ""}" type="button" data-open-recall="${challenge.id}">
            <i class="bi ${completed.includes(challenge.id) ? "bi-check-circle-fill" : "bi-circle"}"></i>
            <span>${index + 1}. ${escapeHTML(challenge.type)}</span>
          </button>`
      )
      .join("");
    recallDetail.innerHTML = `
      <span class="eyebrow">${escapeHTML(item.type)}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.prompt)}</p>
      <textarea class="recall-input" placeholder="Tulis jawabanmu dengan bahasa sendiri..." aria-label="Jawaban recall challenge"></textarea>
      <div class="d-flex flex-wrap gap-2 mt-3">
        <button class="btn btn-soft" type="button" data-show-recall-answer="${item.id}"><i class="bi bi-eye"></i> Lihat pembahasan</button>
        <button class="btn btn-primary" type="button" data-complete-recall="${item.id}"><i class="bi bi-check2-circle"></i> Tandai selesai</button>
      </div>
      <div class="recall-answer d-none" id="recallAnswer">
        <div class="explanation-box"><p class="mb-0"><strong>Contoh jawaban:</strong> ${escapeHTML(item.answer)}</p></div>
      </div>`;
  };

  const renderDebuggingChallenge = (id = activeDebugId) => {
    const debugList = getElement("debugList");
    const debugDetail = getElement("debugDetail");
    if (!debugList || !debugDetail) return;
    activeDebugId = id;
    const item = data.debugChallenges.find((challenge) => challenge.id === id) || data.debugChallenges[0];
    const activeIndex = data.debugChallenges.findIndex((challenge) => challenge.id === item.id);
    const previousItem = data.debugChallenges[activeIndex - 1];
    const nextItem = data.debugChallenges[activeIndex + 1];
    const completed = progress.state.completedDebug;
    const attempt = debugAttempts[item.id] || { analysis: "", code: item.code, submitted: false };
    debugAttempts[item.id] = attempt;

    debugList.innerHTML = data.debugChallenges
      .map(
        (challenge, index) => `
          <button class="challenge-list-btn ${challenge.id === item.id ? "active" : ""} ${completed.includes(challenge.id) ? "completed" : ""}" type="button" data-open-debug="${challenge.id}">
            <i class="bi ${completed.includes(challenge.id) ? "bi-check-circle-fill" : "bi-circle"}"></i>
            <span>${index + 1}. ${escapeHTML(challenge.title)}</span>
          </button>`
      )
      .join("");

    debugDetail.innerHTML = `
      <span class="eyebrow">Kasus ${activeIndex + 1}</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p><strong>Masalah yang terlihat:</strong> ${escapeHTML(item.symptom)}</p>
      ${renderCodeBlock(item.code, "kasus-bermasalah.txt")}
      <p class="mt-3"><strong>Pertanyaan:</strong> ${escapeHTML(item.question)}</p>
      <form class="debug-workflow" data-debug-form="${item.id}">
        <div class="debug-step">
          <span class="debug-step-label">Langkah 1 - Analisis</span>
          <label class="debug-field-label" for="debugAnalysis">Menurutmu, penyebab masalahnya apa?</label>
          <textarea class="recall-input" id="debugAnalysis" name="analysis" placeholder="Tulis analisismu..." required>${escapeHTML(attempt.analysis)}</textarea>
        </div>
        <div class="debug-step">
          <span class="debug-step-label">Langkah 2 - Coba perbaiki</span>
          <label class="debug-field-label" for="debugCode">Tulis versi perbaikan atau solusi konsepmu.</label>
          <textarea class="debug-code-input" id="debugCode" name="code" spellcheck="false" required>${escapeHTML(attempt.code)}</textarea>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <button class="btn btn-soft" type="button" data-show-debug-hint="${item.id}"><i class="bi bi-lightbulb"></i> Hint</button>
          <button class="btn btn-primary" type="submit"><i class="bi bi-send-check"></i> ${attempt.submitted ? "Kirim ulang" : "Submit jawaban"}</button>
        </div>
      </form>
      <div class="debug-answer d-none" id="debugHint">
        <div class="hint-box"><p class="mb-0"><strong>Hint:</strong> ${escapeHTML(item.hint)}</p></div>
      </div>
      <div class="debug-answer ${attempt.submitted ? "" : "d-none"}" id="debugAnswer">
        <div class="explanation-box">
          <h4><i class="bi bi-book"></i> Pembahasan</h4>
          <p><strong>Analisis yang kamu kirim:</strong> ${escapeHTML(attempt.analysis)}</p>
          <ol>${item.explanation.map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ol>
          <p class="mb-2"><strong>Solusi:</strong></p>
          ${renderCodeBlock(item.solution, "solusi.txt")}
          <button class="btn btn-primary mt-3" type="button" data-complete-debug="${item.id}" ${completed.includes(item.id) ? "disabled" : ""}>
            <i class="bi bi-check2-circle"></i> ${completed.includes(item.id) ? "Sudah selesai" : "Tandai selesai"}
          </button>
        </div>
      </div>
      <div class="debug-navigation">
        <button class="btn btn-soft" type="button" ${previousItem ? `data-open-debug="${previousItem.id}"` : "disabled"}>
          <i class="bi bi-arrow-left"></i> Kembali
        </button>
        <span class="mini-label">Kasus ${activeIndex + 1} dari ${data.debugChallenges.length}</span>
        <button class="btn btn-soft" type="button" ${nextItem ? `data-open-debug="${nextItem.id}"` : "disabled"}>
          Berikutnya <i class="bi bi-arrow-right"></i>
        </button>
      </div>`;
  };

  const renderProjectExample = (example, projectIndex = null, projectTitle = "") => {
    if (!example) return "";
    const interactive = Number.isInteger(projectIndex);
    const previewAttributes = interactive
      ? ` role="button" tabindex="0" data-open-project-preview="${projectIndex}" aria-label="Perbesar contoh ${escapeHTML(projectTitle)}"`
      : "";
    let content = "";

    if (example.type === "dashboard") {
      content = `
        <div class="example-dashboard">
          <div class="example-dashboard-head"><strong>${escapeHTML(example.title)}</strong><small>WEEKLY</small></div>
          <div class="example-dashboard-grid">
            ${example.metrics.map(([label, value]) => `<div class="example-mini-card"><span>${escapeHTML(label)}</span><b>${escapeHTML(value)}</b></div>`).join("")}
          </div>
          <div class="example-flow">${example.flow.map((step) => `<span>${escapeHTML(step)}</span>`).join("")}</div>
        </div>`;
    }

    if (example.type === "article") {
      content = `
        <div class="example-article">
          <div class="example-article-head"><strong>${escapeHTML(example.brand)}</strong><small>PROFILE</small></div>
          <small>ACADEMIC INTRODUCTION</small>
          <strong>${escapeHTML(example.title)}</strong>
          <p>${escapeHTML(example.description)}</p>
          <span class="example-button">Read Profile</span>
        </div>`;
    }

    if (example.type === "business") {
      content = `
        <div class="example-business">
          <div class="example-business-head"><strong>${escapeHTML(example.brand)}</strong><small>VALIDATION</small></div>
          <div class="example-business-body">
            <small>VALUE PROPOSITION</small>
            <strong>${escapeHTML(example.title)}</strong>
            <p>${escapeHTML(example.description)}</p>
            <span class="example-button">Test Demand</span>
          </div>
        </div>`;
    }

    if (example.type === "table") {
      content = `
        <div class="example-table">
          <strong>${escapeHTML(example.title)}</strong>
          <table>
            <thead><tr>${example.columns.map((column) => `<th>${escapeHTML(column)}</th>`).join("")}</tr></thead>
            <tbody>${example.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHTML(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>`;
    }

    return `
      <div class="project-example">
        <div class="project-example-label"><i class="bi bi-eye"></i> Contoh hasil</div>
        <div class="project-example-window"${previewAttributes}>
          <div class="project-example-toolbar"><span></span><span></span><span></span></div>
          <div class="project-example-canvas">${content}</div>
        </div>
        ${
          interactive
            ? `<button class="project-example-open" type="button" data-open-project-preview="${projectIndex}">
                <i class="bi bi-arrows-fullscreen"></i> Perbesar contoh
              </button>`
            : ""
        }
      </div>`;
  };

  const openProjectPreview = (projectIndex) => {
    const project = data.projects[Number(projectIndex)];
    const modalElement = getElement("projectPreviewModal");
    const title = getElement("projectPreviewTitle");
    const description = getElement("projectPreviewDescription");
    const previewBody = getElement("projectPreviewBody");
    if (!project || !modalElement || !title || !description || !previewBody || !window.bootstrap) return;

    title.textContent = project.title;
    description.textContent = `${project.level} - ${project.goal}`;
    previewBody.innerHTML = renderProjectExample(project.example);
    bootstrap.Modal.getOrCreateInstance(modalElement).show();
  };

  const renderProjects = () => {
    const projectGrid = getElement("projectGrid");
    if (!projectGrid) return;
    const completed = progress.state.completedProjects;
    projectGrid.innerHTML = data.projects
      .map(
        (project, index) => `
          <div class="col-md-6 col-lg-4">
            <article class="project-card">
              <span class="mini-label">Project ${String(index + 1).padStart(2, "0")} - ${escapeHTML(project.level)}</span>
              <h3>${escapeHTML(project.title)}</h3>
              <p>${escapeHTML(project.goal)}</p>
              ${renderProjectExample(project.example, index, project.title)}
              <details class="project-meta">
                <summary>Lihat panduan project</summary>
                <p class="mt-3 mb-1"><strong>Fitur:</strong> ${escapeHTML(project.features.join(", "))}</p>
                <ol class="ps-3">${project.steps.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
                <p class="mb-1"><strong>Hint:</strong> ${escapeHTML(project.hint)}</p>
                <p class="mb-0"><strong>Challenge tambahan:</strong> ${escapeHTML(project.extra)}</p>
              </details>
              <button class="btn btn-primary w-100 mt-3" type="button" data-complete-project="${project.id}" ${completed.includes(project.id) ? "disabled" : ""}>
                <i class="bi bi-check2-circle"></i> ${completed.includes(project.id) ? "Project selesai" : "Tandai project selesai"}
              </button>
            </article>
          </div>`
      )
      .join("");
  };

  const updateProgress = () => {
    const state = progress.state;
    const percentage = progress.getTotalProgress();
    const nextLesson = data.lessons.find((lessonItem) => !state.completedLessons.includes(lessonItem.id));
    const progressPercent = getElement("progressPercent");
    const mainProgressBar = getElement("mainProgressBar");
    const statLessons = getElement("statLessons");
    const statQuiz = getElement("statQuiz");
    const statRecall = getElement("statRecall");
    const statDebug = getElement("statDebug");
    const statProjects = getElement("statProjects");
    const nextRecommendation = getElement("nextRecommendation");
    const badgeGrid = getElement("badgeGrid");
    const roadmapCompleted = getElement("roadmapCompleted");

    if (progressPercent) progressPercent.textContent = `${percentage}%`;
    if (mainProgressBar) {
      mainProgressBar.style.width = `${percentage}%`;
      mainProgressBar.parentElement.setAttribute("aria-valuenow", percentage);
    }
    if (statLessons) statLessons.textContent = state.completedLessons.length;
    if (statQuiz) statQuiz.textContent = progress.getAverageQuiz();
    if (statRecall) statRecall.textContent = state.completedRecall.length;
    if (statDebug) statDebug.textContent = state.completedDebug.length;
    if (statProjects) statProjects.textContent = state.completedProjects.length;
    if (roadmapCompleted) roadmapCompleted.textContent = `${state.completedLessons.length}/${data.lessons.length}`;
    if (nextRecommendation) {
      nextRecommendation.innerHTML = nextLesson
        ? `<i class="bi bi-compass"></i> Rekomendasi berikutnya: <a href="${lessonHref(nextLesson.id)}"><strong>${escapeHTML(nextLesson.title)}</strong></a>`
        : '<i class="bi bi-check-circle"></i> Semua materi utama selesai. Lanjutkan mini project untuk memperkuat portofolio.';
    }
    if (badgeGrid) {
      badgeGrid.innerHTML = data.badges
        .map(
          (badge) => `
            <div class="badge-item ${state.badges.includes(badge.id) ? "" : "locked"}">
              <i class="bi ${escapeHTML(badge.icon)}"></i>
              <span>${escapeHTML(badge.title)}</span>
            </div>`
        )
        .join("");
    }
  };

  const toggleDarkMode = () => {
    const enabled = !document.body.classList.contains("dark-mode");
    document.body.classList.toggle("dark-mode", enabled);
    progress.setDarkMode(enabled);
    updateThemeToggle();
  };

  const updateThemeToggle = () => {
    const button = getElement("darkModeToggle");
    if (!button) return;
    const dark = document.body.classList.contains("dark-mode");
    button.innerHTML = dark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
    button.setAttribute("aria-label", dark ? "Aktifkan mode terang" : "Aktifkan mode gelap");
  };

  const handleClick = (event) => {
    const copyButton = event.target.closest("[data-copy-code]");
    if (copyButton) {
      navigator.clipboard
        .writeText(decodeURIComponent(copyButton.dataset.copyCode))
        .then(() => showToast("Teks berhasil disalin."))
        .catch(() => showToast("Teks belum bisa disalin. Pilih manual."));
      return;
    }

    const lessonButton = event.target.closest("[data-open-lesson]");
    if (lessonButton) {
      renderLessonDetail(lessonButton.dataset.openLesson);
      return;
    }

    if (event.target.closest("[data-close-lesson]")) {
      closeLesson();
      return;
    }

    const completeLessonButton = event.target.closest("[data-complete-lesson]");
    if (completeLessonButton) {
      const id = completeLessonButton.dataset.completeLesson;
      const result = progress.markLesson(id);
      completeLessonButton.innerHTML = '<i class="bi bi-check2-circle"></i> Sudah selesai';
      completeLessonButton.disabled = false;
      renderLessons();
      renderStudyRecommendation();
      updateProgress();
      showNextLearningPanel(id);
      showToast(result.added ? "Materi ditandai selesai." : "Materi ini sudah selesai.");
      showBadgeToasts(result.unlocked);
      return;
    }

    const toggleTarget = event.target.closest("[data-toggle-target]");
    if (toggleTarget) {
      getElement(toggleTarget.dataset.toggleTarget)?.classList.toggle("d-none");
      return;
    }

    const lessonAnswer = event.target.closest("[data-lesson-answer]");
    if (lessonAnswer) {
      const wrapper = lessonAnswer.closest("[data-lesson-quiz]");
      const item = data.lessons.find((lessonItem) => lessonItem.id === wrapper.dataset.lessonQuiz);
      const selected = Number(lessonAnswer.dataset.lessonAnswer);
      if (!item || !Number.isInteger(selected)) return;
      lessonQuizAnswers[item.id] = selected;
      saveLessonQuizAnswers();
      wrapper.querySelectorAll("[data-lesson-answer]").forEach((button, index) => {
        button.disabled = true;
        if (index === item.quiz.answer) button.classList.add("correct");
        if (index === selected && selected !== item.quiz.answer) button.classList.add("wrong");
      });
      const feedback = wrapper.nextElementSibling;
      feedback.classList.remove("d-none");
      feedback.innerHTML = getLessonQuizFeedback(item, selected);
      return;
    }

    const quizAnswer = event.target.closest("[data-quiz-answer]");
    if (quizAnswer) {
      answerQuiz(Number(quizAnswer.dataset.quizAnswer));
      return;
    }

    if (event.target.closest("[data-next-quiz]")) {
      currentQuiz.index += 1;
      currentQuiz.answered = false;
      renderQuiz();
      return;
    }

    if (event.target.closest("[data-retry-quiz]")) {
      currentQuiz = { index: 0, score: 0, answered: false };
      renderQuiz();
      return;
    }

    const recallButton = event.target.closest("[data-open-recall]");
    if (recallButton) {
      renderRecallChallenge(recallButton.dataset.openRecall);
      return;
    }

    if (event.target.closest("[data-show-recall-answer]")) {
      getElement("recallAnswer")?.classList.remove("d-none");
      return;
    }

    const completeRecallButton = event.target.closest("[data-complete-recall]");
    if (completeRecallButton) {
      const result = progress.markRecall(completeRecallButton.dataset.completeRecall);
      renderRecallChallenge(completeRecallButton.dataset.completeRecall);
      updateProgress();
      showToast(result.added ? "Recall ditandai selesai." : "Recall ini sudah selesai.");
      showBadgeToasts(result.unlocked);
      return;
    }

    const debugButton = event.target.closest("[data-open-debug]");
    if (debugButton) {
      renderDebuggingChallenge(debugButton.dataset.openDebug);
      return;
    }

    if (event.target.closest("[data-show-debug-hint]")) {
      getElement("debugHint")?.classList.remove("d-none");
      return;
    }

    const completeDebugButton = event.target.closest("[data-complete-debug]");
    if (completeDebugButton) {
      const result = progress.markDebug(completeDebugButton.dataset.completeDebug);
      renderDebuggingChallenge(completeDebugButton.dataset.completeDebug);
      updateProgress();
      showToast(result.added ? "Kasus debugging ditandai selesai." : "Kasus ini sudah selesai.");
      showBadgeToasts(result.unlocked);
      return;
    }

    const projectPreviewButton = event.target.closest("[data-open-project-preview]");
    if (projectPreviewButton) {
      openProjectPreview(projectPreviewButton.dataset.openProjectPreview);
      return;
    }

    const completeProjectButton = event.target.closest("[data-complete-project]");
    if (completeProjectButton) {
      const result = progress.markProject(completeProjectButton.dataset.completeProject);
      renderProjects();
      updateProgress();
      showToast(result.added ? "Project ditandai selesai." : "Project ini sudah selesai.");
      showBadgeToasts(result.unlocked);
    }
  };

  const handleSubmit = (event) => {
    const lessonExerciseForm = event.target.closest("[data-lesson-exercise-form]");
    if (lessonExerciseForm) {
      event.preventDefault();
      const answer = lessonExerciseForm.elements.answer.value.trim();
      if (!answer) {
        showToast("Tulis jawaban latihan kecil sebelum menyimpan.");
        return;
      }
      lessonExerciseAnswers[lessonExerciseForm.dataset.lessonExerciseForm] = answer;
      showToast(saveLessonExerciseAnswers() ? "Jawaban latihan kecil tersimpan." : "Jawaban latihan kecil belum dapat disimpan.");
      return;
    }

    const lessonRecallForm = event.target.closest("[data-lesson-recall-form]");
    if (lessonRecallForm) {
      event.preventDefault();
      const answer = lessonRecallForm.elements.answer.value.trim();
      if (!answer) {
        showToast("Tulis jawaban recall sebelum menyimpan.");
        return;
      }
      lessonRecallAnswers[lessonRecallForm.dataset.lessonRecallForm] = answer;
      showToast(saveLessonRecallAnswers() ? "Jawaban recall materi tersimpan." : "Jawaban recall belum dapat disimpan.");
      return;
    }

    const debugForm = event.target.closest("[data-debug-form]");
    if (!debugForm) return;
    event.preventDefault();
    const analysis = debugForm.elements.analysis.value.trim();
    const code = debugForm.elements.code.value.trim();
    if (!analysis || !code) {
      showToast("Lengkapi analisis dan percobaan solusi sebelum submit.");
      return;
    }
    const id = debugForm.dataset.debugForm;
    debugAttempts[id] = { analysis, code, submitted: true };
    renderDebuggingChallenge(id);
    getElement("debugAnswer")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    showToast("Jawaban terkirim. Pelajari pembahasannya.");
  };

  const handleInput = (event) => {
    const understandingForm = event.target.closest("[data-understanding-check]");
    if (understandingForm) {
      updateUnderstandingGate(understandingForm);
      return;
    }

    const debugForm = event.target.closest("[data-debug-form]");
    if (!debugForm) return;
    const id = debugForm.dataset.debugForm;
    const previousAttempt = debugAttempts[id] || { submitted: false };
    debugAttempts[id] = {
      analysis: debugForm.elements.analysis.value,
      code: debugForm.elements.code.value,
      submitted: previousAttempt.submitted
    };
  };

  const handleKeydown = (event) => {
    const projectPreviewButton = event.target.closest("[data-open-project-preview]");
    if (!projectPreviewButton || projectPreviewButton.tagName === "BUTTON") return;
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openProjectPreview(projectPreviewButton.dataset.openProjectPreview);
  };

  const init = () => {
    document.body.classList.toggle("dark-mode", progress.state.darkMode);
    updateThemeToggle();
    progress.unlockBadges();
    renderLessons();
    renderStudyRecommendation();
    renderQuiz();
    renderRecallChallenge();
    renderDebuggingChallenge();
    renderProjects();
    updateProgress();
    window.SILabEditor?.init();

    const lessonDetailTarget = getElement("lessonDetail");
    if (lessonDetailTarget && document.body.dataset.lessonPage === "true") {
      const lessonId = new URLSearchParams(window.location.search).get("id") || "";
      renderLessonDetail(lessonId, false);
    }

    getElement("darkModeToggle")?.addEventListener("click", toggleDarkMode);
    getElement("resetProgress")?.addEventListener("click", () => {
      if (!window.confirm("Reset seluruh progress belajar di browser ini?")) return;
      progress.resetProgress();
      renderLessons();
      renderStudyRecommendation();
      renderRecallChallenge();
      renderDebuggingChallenge();
      renderProjects();
      updateProgress();
      showToast("Progress belajar sudah direset.");
    });

    document.addEventListener("click", handleClick);
    document.addEventListener("input", handleInput);
    document.addEventListener("submit", handleSubmit);
    document.addEventListener("keydown", handleKeydown);

    document.querySelectorAll(".navbar .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const menu = getElement("mainNav");
        if (menu?.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
      });
    });
  };

  return {
    init,
    renderLessons,
    renderLessonDetail,
    renderQuiz,
    renderDebuggingChallenge,
    renderRecallChallenge,
    updateProgress,
    showToast,
    escapeHTML,
    renderCodeBlock,
    toggleDarkMode
  };
})();

document.addEventListener("DOMContentLoaded", window.SILabApp.init);
