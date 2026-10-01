/**
 * =========================
 * SCROLL TO TOP BUTTON
 * =========================
 * Affiche un bouton « retour en haut » après un défilement de 300px
 * et remonte en haut de la page au clic.
 */

export function initScrollTop() {
  const btn = document.getElementById("scrollTopBtn");

  if (!btn) return;

  // Affiche le bouton après scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });

  // Scroll vers le haut
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
