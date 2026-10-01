/**
 * =========================
 * FORMULAIRE DE CONTACT
 * =========================
 * Le site n'a pas de serveur : à l'envoi, le formulaire ouvre la messagerie
 * de l'utilisateur (lien mailto) avec le sujet et le message pré-remplis.
 * Aucune donnée n'est stockée ni transmise à un service tiers.
 * L'adresse de destination est lue dans l'attribut data-contact-email du formulaire.
 */

export function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    // Empêche le rechargement de la page (comportement par défaut d'un formulaire)
    event.preventDefault();

    // Les champs obligatoires (required, type="email") sont déjà vérifiés par le navigateur
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    const subject = `Contact portfolio - ${name}`;
    const body = `${message}\n\n${name}\n${email}`;

    // encodeURIComponent : espaces, accents et retours à la ligne compatibles avec une URL
    window.location.href =
      `mailto:${form.dataset.contactEmail}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  });
}
