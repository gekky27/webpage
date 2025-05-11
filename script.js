// script.js

document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});


// Fungsi untuk tombol Donate
document.getElementById("donateBtn").addEventListener("click", function() {
  window.location.href = "index.html";
});
  
  // Fungsi untuk semua tombol Learn More
  document.querySelectorAll(".card button").forEach(function (button) {
  button.addEventListener("click", function () {
    const targetPage = button.getAttribute("data-target");
    if (targetPage) {
      window.location.href = targetPage;
    }
  });
});

  
// JavaScript for play button functionality
document.querySelectorAll(".play-button").forEach(function (button) {
  button.addEventListener("click", function () {
    window.open("https://drive.google.com/file/d/1PqSdzpmdSryG73dbKaDWzz4Ms_I-ompP/preview", "_blank");
  });
});


document.querySelectorAll(".join-btn").forEach(function (button) {
  button.addEventListener("click", function () {
      window.location.href = "https://www.example.com"; // Ganti ke halaman yang diinginkan
  });
});