// === BACK BUTTON ===
document.querySelector('.back-button')?.addEventListener('click', function (e) {
  e.preventDefault();
  history.back();
});

// === HAMBURGER TOGGLE ===
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  }
});
