window.SILabEditor = (() => {
  const STORAGE_KEY = "si-semester-1-lab-editor-v1";
  const defaults = window.SILabData.editorDefaults;
  let activeTab = "html";

  const getElement = (id) => document.getElementById(id);
  const getInputs = () => ({
    html: getElement("htmlInput"),
    css: getElement("cssInput"),
    js: getElement("jsInput")
  });

  const escapeScript = (value) => String(value).replace(/<\/script/gi, "<\\/script");

  const loadCode = () => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return {
        html: typeof saved.html === "string" ? saved.html : defaults.html,
        css: typeof saved.css === "string" ? saved.css : defaults.css,
        js: typeof saved.js === "string" ? saved.js : defaults.js
      };
    } catch (error) {
      console.warn("Kode editor tidak dapat dibaca.", error);
      return { ...defaults };
    }
  };

  const readCode = () => {
    const inputs = getInputs();
    return {
      html: inputs.html?.value || "",
      css: inputs.css?.value || "",
      js: inputs.js?.value || ""
    };
  };

  const saveCode = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readCode()));
      window.SILabApp?.showToast("Kode latihan tersimpan.");
      return true;
    } catch (error) {
      console.warn("Kode editor tidak dapat disimpan.", error);
      window.SILabApp?.showToast("Kode belum dapat disimpan.");
      return false;
    }
  };

  const setConsole = (message) => {
    const consoleBox = getElement("editorConsole");
    if (consoleBox) consoleBox.textContent = message;
  };

  const buildDocument = ({ html, css, js }) => `<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${css}</style>
  </head>
  <body>
    ${html}
    <script>
      (function () {
        const send = (level, args) => {
          parent.postMessage({
            source: "si-lab-editor",
            level,
            message: args.map((item) => {
              if (typeof item === "object") {
                try { return JSON.stringify(item); } catch (error) { return String(item); }
              }
              return String(item);
            }).join(" ")
          }, "*");
        };
        ["log", "warn", "error"].forEach((level) => {
          const original = console[level];
          console[level] = function (...args) {
            send(level, args);
            original.apply(console, args);
          };
        });
        window.addEventListener("error", (event) => {
          send("error", [event.message]);
        });
        try {
          ${escapeScript(js)}
        } catch (error) {
          console.error(error.message);
        }
      })();
    <\/script>
  </body>
</html>`;

  const run = () => {
    const frame = getElement("previewFrame");
    if (!frame) return;
    setConsole("Menjalankan preview...");
    frame.srcdoc = buildDocument(readCode());
  };

  const switchTab = (tab) => {
    activeTab = tab;
    document.querySelectorAll("[data-editor-tab]").forEach((button) => {
      button.classList.toggle("active", button.dataset.editorTab === tab);
    });
    document.querySelectorAll("[data-editor-input]").forEach((input) => {
      input.classList.toggle("d-none", input.dataset.editorInput !== tab);
    });
    getInputs()[activeTab]?.focus();
  };

  const reset = () => {
    if (!window.confirm("Reset kode editor ke contoh awal?")) return;
    const inputs = getInputs();
    inputs.html.value = defaults.html;
    inputs.css.value = defaults.css;
    inputs.js.value = defaults.js;
    saveCode();
    run();
  };

  const init = () => {
    if (!getElement("previewFrame")) return;
    const inputs = getInputs();
    const saved = loadCode();
    inputs.html.value = saved.html;
    inputs.css.value = saved.css;
    inputs.js.value = saved.js;

    document.querySelectorAll("[data-editor-tab]").forEach((button) => {
      button.addEventListener("click", () => switchTab(button.dataset.editorTab));
    });
    Object.values(inputs).forEach((input) => input?.addEventListener("input", saveCode));
    getElement("runEditor")?.addEventListener("click", run);
    getElement("saveEditor")?.addEventListener("click", saveCode);
    getElement("resetEditor")?.addEventListener("click", reset);

    window.addEventListener("message", (event) => {
      if (event.data?.source !== "si-lab-editor") return;
      const consoleBox = getElement("editorConsole");
      if (!consoleBox) return;
      const prefix = event.data.level === "error" ? "[error] " : "";
      consoleBox.textContent = consoleBox.textContent === "Menjalankan preview..."
        ? prefix + event.data.message
        : `${consoleBox.textContent}\n${prefix}${event.data.message}`;
    });

    run();
  };

  return { init, run, saveCode };
})();
