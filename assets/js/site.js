import { translatePage, getDefaultLanguage } from "./i18n.js";

const STORAGE_KEY = "baqi-lang";
const WHATSAPP_NUMBER = "6287777918666";
const WHATSAPP_MESSAGES = {
  id: "Halo, saya ingin mengetahui lebih lanjut tentang UKM BAQI UPI.",
  en: "Hello, I would like to learn more about UKM BAQI UPI.",
};
const state = {
  currentLang: localStorage.getItem(STORAGE_KEY) || getDefaultLanguage(),
};

function updateLanguageButtons(lang) {
  document.querySelectorAll('[data-action="change-lang"]').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setLanguage(lang) {
  const normalized = ["id", "en"].includes(lang) ? lang : getDefaultLanguage();
  state.currentLang = normalized;
  localStorage.setItem(STORAGE_KEY, normalized);
  translatePage(normalized);
  updateLanguageButtons(normalized);
}

function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function openWhatsApp() {
  window.open(
    getWhatsAppUrl(WHATSAPP_MESSAGES[state.currentLang]),
    "_blank",
    "noopener",
  );
}

function toggleMobileMenu() {
  const nav = document.getElementById("mobileNav");
  const button = document.getElementById("hamburger");
  if (!nav || !button) {
    return;
  }

  const isOpen = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
  const nav = document.getElementById("mobileNav");
  const button = document.getElementById("hamburger");
  if (!nav || !button) {
    return;
  }

  nav.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
}

function handleBodyClick(event) {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) {
    return;
  }

  const action = trigger.dataset.action;
  switch (action) {
    case "change-lang":
      setLanguage(trigger.dataset.lang);
      break;
    case "open-whatsapp":
      event.preventDefault();
      openWhatsApp();
      break;
    case "toggle-menu":
      event.preventDefault();
      toggleMobileMenu();
      break;
    case "close-menu":
      closeMobileMenu();
      break;
    default:
      break;
  }
}

function handleProkerToggle(event) {
  const card = event.currentTarget;
  const isOpen = card.classList.toggle("org-dept-card--open");
  card.setAttribute("aria-expanded", String(isOpen));
  const panel = card.querySelector(".org-dept-card__proker");
  if (!panel) {
    return;
  }

  if (isOpen) {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    panel.style.opacity = "1";
    panel.style.pointerEvents = "auto";

    const cleanup = () => {
      panel.style.maxHeight = "";
      panel.removeEventListener("transitionend", cleanup);
    };
    panel.addEventListener("transitionend", cleanup);
  } else {
    panel.style.maxHeight = `${panel.scrollHeight}px`;
    requestAnimationFrame(() => {
      panel.style.maxHeight = "0";
      panel.style.opacity = "0";
      panel.style.pointerEvents = "none";
    });
  }
}

function initProkerCards() {
  const cards = document.querySelectorAll(".org-dept-card--clickable");
  cards.forEach((card) => {
    card.addEventListener("click", handleProkerToggle);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleProkerToggle(event);
      }
    });
  });
}

function initFallbackImages() {
  document.querySelectorAll(".js-fallback-img").forEach((image) => {
    const targetSelector = image.dataset.fallbackTarget;

    const handleError = () => {
      const fallback = targetSelector
        ? image.parentElement.querySelector(targetSelector) ||
          document.querySelector(targetSelector)
        : null;
      image.classList.add("hidden");
      if (fallback) {
        fallback.classList.remove("hidden");
      }
    };

    if (image.complete && image.naturalWidth === 0) {
      handleError();
    }
    image.addEventListener("error", handleError);
  });
}

function initExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (!link.rel.includes("noopener")) {
      link.rel = "noopener noreferrer";
    }
  });
}

function initResponsiveMenu() {
  const query = window.matchMedia("(min-width: 768px)");
  if (query.addEventListener) {
    query.addEventListener("change", ({ matches }) => {
      if (matches) {
        closeMobileMenu();
      }
    });
  }
}

function initInteractiveElements() {
  document.body.addEventListener("click", handleBodyClick);
  initProkerCards();
  initResponsiveMenu();
}

export function initApp() {
  setLanguage(state.currentLang);
  initInteractiveElements();
  initFallbackImages();
  initExternalLinks();
}
