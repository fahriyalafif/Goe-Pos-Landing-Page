(function () {
  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var revealItems = document.querySelectorAll(".reveal");
  var languageButtons = document.querySelectorAll("[data-lang-option]");
  var currentLang = document.documentElement.getAttribute("data-lang") || "id";
  var languageUrls = {
    id: "/",
    en: "en.html"
  };

  function getLanguageUrl(lang, configuredUrl) {
    if (lang === "id" && window.location.pathname.indexOf("/public/") !== -1) {
      return "index.html";
    }

    return configuredUrl || languageUrls[lang];
  }

  function setHeaderState() {
    if (!header) return;
    var hero = document.querySelector(".goepos-hero");
    var headerHeight = header.offsetHeight || 0;
    var isPastHero = !hero || hero.getBoundingClientRect().bottom <= headerHeight + 8;
    var shouldHideOnHero = !isPastHero && !document.body.classList.contains("nav-open");

    header.classList.toggle("is-scrolled", isPastHero);
    header.classList.toggle("is-hidden-on-hero", shouldHideOnHero);
  }

  function setActiveLanguage() {
    languageButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang-option") === currentLang);
    });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang-option");
      var targetUrl = getLanguageUrl(lang, button.getAttribute("data-lang-url"));

      if (targetUrl) {
        window.location.href = targetUrl;
      }
    });
  });

  document.querySelectorAll("[data-spotlight]").forEach(function (spotlight) {
    var cards = spotlight.querySelectorAll("[data-spotlight-card]");

    function setCardState(activeCard) {
      cards.forEach(function (card) {
        var wasActive = card.classList.contains("is-active");
        var isActive = card === activeCard && !wasActive;
        var detail = card.querySelector(".spotlight-card-detail");
        card.classList.toggle("is-active", isActive);
        card.setAttribute("aria-expanded", String(isActive));

        if (detail) {
          detail.setAttribute("aria-hidden", String(!isActive));
        }
      });
    }

    function resetSpotlight() {
      cards.forEach(function (card) {
        var detail = card.querySelector(".spotlight-card-detail");
        card.classList.remove("is-active");
        card.setAttribute("aria-expanded", "false");

        if (detail) {
          detail.setAttribute("aria-hidden", "true");
        }
      });
    }

    cards.forEach(function (card) {
      var detail = card.querySelector(".spotlight-card-detail");
      if (detail) {
        detail.setAttribute("aria-hidden", "true");
      }
    });

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        setCardState(card);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setCardState(card);
        }

        if (event.key === "Escape") {
          resetSpotlight();
        }
      });
    });

    spotlight.querySelectorAll("[data-spotlight-close]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        resetSpotlight();
      });
    });
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  setHeaderState();
  setActiveLanguage();
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", setHeaderState);
})();
