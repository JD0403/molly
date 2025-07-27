const carousel = document.querySelector(".carrusel");
let currentIndex = 0;
let startX = 0;
let isDragging = false;

function moveSlide(direction) {
  const images = carousel.children.length;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images - 1;
  if (currentIndex >= images) currentIndex = 0;

  updateCarousel();
}

function updateCarousel() {
  const width = carousel.clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Touch Events
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

carousel.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touchX = e.touches[0].clientX;
  const diffX = touchX - startX;

  if (Math.abs(diffX) > 50) {
    moveSlide(diffX < 0 ? 1 : -1);
    isDragging = false;
  }
});

carousel.addEventListener('touchend', () => {
  isDragging = false;
});