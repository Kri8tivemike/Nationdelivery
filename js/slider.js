// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  // spaceBetween: 10,
  loop: true, // Infinite loop
  autoplay: {
    delay: 3000, // 3 seconds for each slide
    disableOnInteraction: false, // Keep autoplay even after interaction
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
