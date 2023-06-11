
// 메인 배너 슬라이드
// new Swiper(".main-banner", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   loop: true,
//   autoplay: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


const bannerMo = document.querySelector('.swiper-wrapper.mo')

setInterval(function(){
  bannerMo.style.marginLeft = ''
}, 3000)


// 첫 번째 영역 배너 슬라이드
new Swiper(".first-banner", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
});



// 두 번째 영역 / 메뉴 탭
const bestMenuBtn = document.querySelector('.best-btn')
const bestMenuCont = document.querySelector('.best-items')
const newMenuBtn = document.querySelector('.new-btn')
const newtMenuCont = document.querySelector('.new-items')

// 인기템 메뉴
function bestMenu(){
  bestMenuCont.classList.add('active')
  bestMenuBtn.parentNode.classList.add('active')

  newtMenuCont.classList.remove('active')
  newMenuBtn.parentNode.classList.remove('active')
}

// 신상 메뉴
function newMenu(){
  bestMenuCont.classList.remove('active')
  bestMenuBtn.parentNode.classList.remove('active')
  
  newtMenuCont.classList.add('active')
  newMenuBtn.parentNode.classList.add('active')
}

bestMenuBtn.addEventListener('click', bestMenu)
newMenuBtn.addEventListener('click', newMenu)






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
    productTabs[i].classList.add('active')

    activeCon = this.getAttribute('href');
    document.querySelector(activeCon).style.display = 'flex';
  })
}


// Top Button
const topBtn = document.querySelector('.top-button')

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}