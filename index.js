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

document.addEventListener("DOMContentLoaded", () => {
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const targetUrl = "https://zenquotes.io/api/random";
  const noCache = `?nocache=${new Date().getTime()}`;

  fetch(proxyUrl + encodeURIComponent(targetUrl) + noCache)
    .then((res) => res.json())
    .then((data) => {
      const quote = data[0];
      document.getElementById(
        "quote-box"
      ).innerHTML = `"${quote.q}"<br>— ${quote.a}`;
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      document.getElementById("quote-box").textContent =
        "Could not load quote.";
    });
});
