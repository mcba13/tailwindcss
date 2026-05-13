/**
 * SCROLL SPY
 * Permet de détecter la section visible à l'écran
 * et de mettre à jour la navigation active.
 *
 * Améliore l'expérience utilisateur sur une page unique.
 */

export function initScrollSpy() {
  /**
 * =========================
 * SCROLL TO TOP BUTTON
 * =========================
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
}