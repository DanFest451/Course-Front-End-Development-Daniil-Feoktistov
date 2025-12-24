document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  items.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      items.forEach((other) => {
        if (other !== item) other.removeAttribute("open");
      });
    });
  });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxOffset = 60; // px
  const offset = Math.min(scrollY * 0.25, maxOffset);
  header.style.top = `${offset}px`;
});
