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
      // fuchsia-300 : contraste suffisant (WCAG AA) sur le fond sombre de la barre de navigation
      link.classList.remove("text-fuchsia-300");
      link.removeAttribute("aria-current");

      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("text-fuchsia-300");
        // indique aux lecteurs d'écran la section en cours
        link.setAttribute("aria-current", "true");
      }
    });
  }

  // Mise à jour au scroll
  window.addEventListener("scroll", updateActiveLink);

  // Initialisation au chargement
  updateActiveLink();
}