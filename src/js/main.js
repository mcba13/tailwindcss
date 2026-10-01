/**
 * ==========================================
 * MAIN.JS - POINT D'ENTRÉE DU PORTFOLIO
 * ==========================================
 *
 * Ce fichier est le point central de l'application.
 * Il orchestre l'initialisation des composants,
 * sections et fonctionnalités globales du site.
 *
 * Architecture : one-page modulaire (Vanilla JS + Vite)
 */

import '../styles/style.css';

// =========================
// IMPORT MODULES
// =========================

// Chargement des modules JS
import { initNavbar } from '../components/navbar.js';
import { initScrollTop } from '../utils/scrollTop.js';
import { initAnimations } from '../utils/animations.js';
import { initFooter } from '../components/footer.js';
import { initContactForm } from '../components/contactForm.js';

// -------------------------------
// INITIALISATION GLOBALE
// -------------------------------

/**
 * Initialise tous les modules du site.
 * Chaque fonction initialise une partie indépendante de l'interface.
 * Cela permet une meilleure maintenabilité et séparation des responsabilités.
 */
function initApp() {
  initNavbar();        // Navigation principale + lien actif selon la section visible (scroll spy)
  initScrollTop();     // Bouton « retour en haut »
  initAnimations();    // Gère les animations globales
  initFooter();        // Gère le footer (année automatique)
  initContactForm();   // Formulaire de contact (ouverture de la messagerie)
}

// Lancement de l'application
initApp();
