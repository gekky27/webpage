document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

document.querySelector('.back-arrow')?.addEventListener('click', function (e) {
  e.preventDefault();
  history.back();
});
