/**
 * NAVBAR
 * Gère les interactions de la navigation principale en one-page :
 * - mise en évidence du lien actif selon la section visible
 */

export function initNavbar() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  /**
   * Détecte la section visible et met à jour le lien actif
   */
  function updateActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-fuchsia-600");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("text-fuchsia-600");
      }
    });
  }

  // Mise à jour au scroll
  window.addEventListener("scroll", updateActiveLink);

  // Initialisation au chargement
  updateActiveLink();
}