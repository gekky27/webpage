document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

// Menambahkan event listener untuk tombol back
document.querySelector('.back-arrow').addEventListener('click', function(event) {
  event.preventDefault();  // Mencegah default behavior dari link
  window.history.back();   // Fungsi untuk kembali ke halaman sebelumnya
});

// Contoh sederhana untuk animasi teks (opsional)
document.querySelector('.text h1').addEventListener('mouseenter', function() {
  this.style.color = '#e6a840';  // Mengubah warna saat mouse hover di atas h1
});

document.querySelector('.text h1').addEventListener('mouseleave', function() {
  this.style.color = '#000';  // Mengembalikan warna ke normal
});

// Mengaktifkan dan menonaktifkan tombol atau elemen lain (opsional)
const button = document.querySelector('.button');  // Pastikan kamu memiliki tombol dengan class .button
if (button) {
  button.addEventListener('click', function() {
    alert("Tombol telah diklik!");
  });
}

// Menambahkan event untuk gambar (opsional)
document.querySelector('.image img').addEventListener('click', function() {
  alert("Gambar diklik!");
});
