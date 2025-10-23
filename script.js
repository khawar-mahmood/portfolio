document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-in");
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.2}s`;
  });
});