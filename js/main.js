(() => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  // Keep the hero resume link pointed at the PDF the site owner will add.
  document.querySelectorAll("[data-resume-link]").forEach((link) => {
    link.setAttribute("href", "assets/resume.pdf");
    link.setAttribute("download", "Vijay-Kumar-Yadav-Resume.pdf");
    link.setAttribute("aria-label", "Download Vijay Kumar Yadav's resume as a PDF");
  });

  // Contact form uses the visitor's default email application.
  // It does not save submissions or send email directly from the website.
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("subject") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!name || !email || !subject || !message) {
        if (status) status.textContent = "Please complete all fields.";
        return;
      }

      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:vy83244@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      if (status) status.textContent = "Opening your email application with the enquiry filled in.";
      window.location.href = mailto;
    });
  }
})();
