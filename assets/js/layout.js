window.SILabLayout = (() => {
  const navItems = [
    { page: "home", label: "Home", href: "index.html" },
    { page: "materi", label: "Materi", href: "materi.html" },
    { page: "quiz", label: "Quiz", href: "quiz.html" },
    { page: "debugging", label: "Debugging", href: "debugging.html" },
    { page: "recall", label: "Recall", href: "recall.html" },
    { page: "editor", label: "Editor", href: "editor.html" },
    { page: "projects", label: "Project", href: "projects.html" },
    { page: "progress", label: "Progress", href: "progress.html" }
  ];

  const renderNav = () => {
    const target = document.getElementById("appNav");
    if (!target) return;
    const activePage = document.body.dataset.page;
    target.innerHTML = `
      <nav class="navbar navbar-expand-lg app-navbar sticky-top">
        <div class="container">
          <a class="navbar-brand" href="index.html" aria-label="SI Semester 1 Lab">
            <span class="brand-mark"><i class="bi bi-mortarboard-fill"></i></span>
            <span class="brand-text">SI Semester 1 <small>Learning Lab</small></span>
          </a>
          <div class="d-flex align-items-center gap-2 order-lg-2">
            <button class="icon-btn" type="button" id="darkModeToggle" aria-label="Aktifkan mode gelap">
              <i class="bi bi-moon-stars-fill"></i>
            </button>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Buka navigasi"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse order-lg-1" id="mainNav">
            <ul class="navbar-nav ms-lg-auto align-items-lg-center gap-lg-1 py-2 py-lg-0">
              ${navItems
                .map(
                  (item) => `
                    <li class="nav-item">
                      <a class="nav-link ${activePage === item.page ? "active" : ""}" href="${item.href}">
                        ${item.label}
                      </a>
                    </li>`
                )
                .join("")}
            </ul>
          </div>
        </div>
      </nav>`;
  };

  const renderFooter = () => {
    const target = document.getElementById("appFooter");
    if (!target) return;
    target.innerHTML = `
      <footer class="site-footer">
        <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>SI Semester 1 Lab - Materi belajar interaktif untuk pondasi kuliah Sistem Informasi.</span>
          <span><a href="materi.html">Materi</a> - <a href="projects.html">Mini Project</a> - <a href="progress.html">Progress</a></span>
        </div>
      </footer>`;
  };

  const renderToast = () => {
    const target = document.getElementById("appToast");
    if (!target) return;
    target.innerHTML = `
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast app-toast" id="appToastElement" role="status" aria-live="polite" aria-atomic="true">
          <div class="toast-body d-flex align-items-center gap-2">
            <i class="bi bi-check-circle-fill"></i>
            <span id="toastMessage">Tersimpan.</span>
          </div>
        </div>
      </div>`;
  };

  const init = () => {
    renderNav();
    renderFooter();
    renderToast();
  };

  return { init };
})();

window.SILabLayout.init();
