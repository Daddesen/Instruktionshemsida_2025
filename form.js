document.addEventListener("DOMContentLoaded", function () {
  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // Formulärhantering
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const successMessage = document.getElementById("success-message");

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Skicka via EmailJS
      emailjs.sendForm("service_4n3f6w7", "template_w5o9mx9", this).then(
        () => {
          successMessage.style.display = "block";
          form.reset();

          setTimeout(() => {
            successMessage.style.display = "none";
          }, 5000);
        },
        (error) => {
          alert("Fel vid skickning: " + JSON.stringify(error));
        }
      );
    });
  }
});
