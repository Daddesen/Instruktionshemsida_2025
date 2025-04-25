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
        }, 500); // Vänta 0.5 sekunder
      }
      // Om det inte är portrait, låt länken fungera normalt direkt
    });
  });
});
