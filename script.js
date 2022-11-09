const previousButton = document.querySelector("[previous-button]");

const nextButton = document.querySelector("[next-button]");

const carousel = document.querySelector("[carousel]");

const slidesContainer = document.querySelector("[carousel-container]");

let currentSlide = 0;
const slidesNumber = slidesContainer.children.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slidesNumber;
  carousel.style.setProperty("--current-slide", currentSlide);
}

function previousSlide() {
  currentSlide = (currentSlide - 1) % slidesNumber;

  if (currentSlide < 0) {
    currentSlide += slidesNumber;
  }
  carousel.style.setProperty("--current-slide", currentSlide);
}

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", previousSlide);
