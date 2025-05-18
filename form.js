document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

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
