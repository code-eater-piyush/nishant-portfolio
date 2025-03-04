let currentIndex = 0; // Start at the first slide
const slidesContainer = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".carousel-dots");
let autoSlideInterval;

// Create dots dynamically based on the number of slides
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

// Function to update active dots
function updateDots() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Function to update slide position
function updateSlidePosition() {
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();
}

// Function to go to a specific slide when clicking a dot
function goToSlide(index) {
  if (index < 0 || index >= totalSlides) return; // Ensure index is within bounds
  currentIndex = index;
  updateSlidePosition();
  resetAutoSlide();
}

// Function to move slides forward or backward
function moveSlide(step) {
  currentIndex += step;

  if (currentIndex >= totalSlides) {
    currentIndex = 0; // Loop back to the first slide
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Loop to the last slide
  }

  updateSlidePosition();
}

// Auto-slide function
function autoSlide() {
  autoSlideInterval = setInterval(() => moveSlide(1), 3000);
}

// Reset auto-slide when interacting
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => moveSlide(1), 3000); // Restart the interval
}

// Button event listeners
prevBtn.addEventListener("click", () => {
  moveSlide(-1);
  resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
  moveSlide(1);
  resetAutoSlide();
});

// Start auto-sliding
autoSlide();