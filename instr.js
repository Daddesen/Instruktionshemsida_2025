document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Klick på sections i portrait-läge
  const sections = document.querySelectorAll(".color-section");
  sections.forEach((section) => {
    section.addEventListener("click", function (event) {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;

      if (isPortrait) {
        event.preventDefault();
        const link = section.querySelector("a").getAttribute("href");

        setTimeout(() => {
          window.location.href = link;
        }, 300);
      }
    });
  });

  // Copy-knappar
  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", () => {
      const container = button.closest(".code-container");
      const code = container.querySelector("pre code");
      const text = code.innerText;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          button.textContent = "Copied!";
          setTimeout(() => {
            button.textContent = "Copy";
          }, 3000);
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    });
  });

  // Formuläret
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const successMessage = document.getElementById("success-message");

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      successMessage.style.display = "block";
      form.reset();

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    });
  }
});
