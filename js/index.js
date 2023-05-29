


// 메인 배너 슬라이드
swiper = new Swiper(".main-banner", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// 첫 번째 영역 배너 슬라이드
swiper = new Swiper(".first-banner", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});