
// 메인 배너 슬라이드
new Swiper(".main-banner", {
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
new Swiper(".first-banner", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});


// 네 번째 영역 / 제품 탭
const productTabs = document.querySelectorAll('.product-tab-area > li')
const productTabItems = document.querySelectorAll('.product-items')
let activeCon = '';

for(let i = 0; i < productTabs.length; i++) {
  productTabs[i].querySelector('.tab').addEventListener('click', function(e) {
    e.preventDefault();

    for(let j=0; j < productTabs.length; j++) {
      productTabs[j].classList.remove('active')
      productTabItems[j].classList.remove('active')
    }
    this.parentNode.parentNode.parentNode.classList.add('active')
    this.parentNode.nextElementSibling.classList.add('active')

    activeCon = this.getAttribute('href');
    document.querySelector(activeCon).style.display = 'flex';
  })
}



// Top Button
const topBtn = document.querySelector('.top-button')

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}