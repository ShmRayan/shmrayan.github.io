(() => {
  const form = document.getElementById("waitlist-form");
  const note = document.getElementById("form-note");
  if (!form || !note) return;

  const STORAGE_KEY = "cvscriba_waitlist";

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = form.querySelector("#email");
    const email = (input?.value || "").trim().toLowerCase();

    note.hidden = false;
    note.classList.remove("error");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      note.textContent = "Enter a valid email to join the list.";
      note.classList.add("error");
      input?.focus();
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!existing.includes(email)) {
        existing.push(email);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
      }
    } catch (_) {
      /* ignore storage failures */
    }

    const subject = encodeURIComponent("CVScriba early access");
    const body = encodeURIComponent(
      `Please add me to the CVScriba early access list.\n\nEmail: ${email}\n`
    );
    window.location.href = `mailto:shmrayan@gmail.com?subject=${subject}&body=${body}`;

    note.textContent = "You’re on the list. Your email app should open — send it and we’ll be in touch.";
    form.reset();
  });
})();
