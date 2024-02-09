
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


function validarFormulario() {
  // Obtener valores de los campos
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var telefono = document.getElementById('telefono').value;
  var email = document.getElementById('email').value;

  // Verificar campos obligatorios
  if (nombre === '' || apellido === '' || telefono === '' || email === '') {
    alert('Por favor, complete todos los campos obligatorios.');
    return false; // Evitar el envío del formulario si hay campos vacíos
  }

  // Si todos los campos están completos, se puede enviar el formulario
  return true;
}

