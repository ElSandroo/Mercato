function login(){
  alert("teste!!");
}

function signup(){
  alert("teste!!");
}


// Carrosel
let current = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

// Auto-slide
setInterval(nextSlide, 8000); // troca a cada 8s

// Inicial
showSlide(current);
