// mode terang / gelap
document.getElementById("toggleMode")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Manual Slider
let slideIndex = 1;

// Fungsi menampilkan slide 
function showSlides(n) {
  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  if (!slides) return; 

  const totalSlides = slides.children.length;

  // Logika pengulangan slider
  if (n > totalSlides) slideIndex = 1;
  if (n < 1) slideIndex = totalSlides;

  // Geser kontainer .slides sesuai index
  const offset = -(slideIndex - 1) * 100;
  slides.style.transform = `translateX(${offset}%)`;

  // Update titik navigasi (dot)
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots.length > 0) dots[slideIndex - 1].classList.add("active");
}

// Tombol navigasi next & prev
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Fungsi klik titik (dot)
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Tampilkan slide pertama saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});
