// Hamburger toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

console.log("ESP8266 site loaded!");

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".color-section");

  sections.forEach((section) => {
    section.addEventListener("click", function (event) {
      // Kolla om vi är i portrait-läge
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;

      if (isPortrait) {
        event.preventDefault(); // Stoppa hoppet om vi är i portrait
        const link = section.querySelector("a").getAttribute("href");

        setTimeout(() => {
          window.location.href = link;
        }, 300);
      }
    });
  });
});

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
