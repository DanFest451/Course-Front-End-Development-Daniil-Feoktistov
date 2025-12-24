document.addEventListener("DOMContentLoaded", () => {
  /* FAQ: only one open */
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      items.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });

  /* Header: hamburger shows hidden icons */
  const actions = document.querySelector(".header-actions");
  const hamburger = document.querySelector(".hamburger");

  if (actions && hamburger) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = actions.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    // close when clicking anywhere else
    document.addEventListener("click", () => {
      actions.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  }
});

/* Header: move down on scroll */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  const scrollY = window.scrollY;
  const maxOffset = 60;
  const offset = Math.min(scrollY * 0.25, maxOffset);

  header.style.top = `${offset}px`;
});
