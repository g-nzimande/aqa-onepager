 // Mobile navigation toggle
const navToggle = document.getElementById("mobile-nav-toggle");
const navMenu = document.getElementById("mobile-nav");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });

  window.addEventListener("scroll", () => {
    navMenu.classList.add("hidden");
  });
}

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
