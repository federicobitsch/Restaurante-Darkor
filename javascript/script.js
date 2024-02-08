
let currentIndex = 0;
const carouselContainer = document.querySelector('.carousel-container');
const totalSlides = document.querySelectorAll('.carousel-container img').length;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const translateValue = -currentIndex * (100 / totalSlides);
  carouselContainer.style.transform = `translateX(${translateValue}%)`;
}


function nextSlide(event) {
  event.preventDefault();
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide(event) {
  event.preventDefault();
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

