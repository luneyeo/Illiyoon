import mainItems from '../data/main_items.js'
import bestItems from '../data/best_items.js'
import newItems from '../data/new_items.js'


// 첫 번째 영역 제품 리스트
const mainItemsEl = document.querySelector('.first-area-inner .product-items')
mainItems.forEach(productList => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('product-item')

  itemEl.innerHTML = /* html */ `
    <!-- 제품 사진 -->
    <div class="product-item-image">
      <a href="javascript:;">
        <img src="${productList.img}" alt="${productList.alt}">
        ${productList.sold_out}
      </a>
    </div>
    <!-- 제품 정보 -->
    <div class="product-item-info">
      <!-- 제품 라벨 -->
      <ul class="item-labels">
        ${productList.label_bset}
        ${productList.label_new}
        ${productList.label_only}
      </ul>
      <!-- 제품명 -->
      <div class="item-name">
        <span>${productList.name}</span>
      </div>
      <!-- 제품 가격 -->
      <div class="item-price-box">
        <span class="discount-percent">${productList.discount_percent}</span>
        <span class="special-price">${productList.special_price}</span>
        <span class="basic-price">${productList.basic_price}</span>
      </div>
      <!-- 제품 리뷰 -->
      <div class="item-review-box">
        <div class="review-star"></div>
        ${productList.review_star}
      </div>
      <!-- 제품 위시리스트, 장바구니 -->
      <div class="item-button-box">
        <div class="product-wishlist">
        <span class="material-symbols-outlined">favorite
          <span class="blind">위시리스트</span>
        </span>
        </div>
        <div class="product-bag">
          <span class="material-symbols-outlined">shopping_bag
            <span class="blind">장바구니</span>
          </span>
        </div>
      </div>
    </div>
  `
  mainItemsEl.append(itemEl)
})

// 베스트 제품 리스트
const bestItemsEl = document.querySelector('.best-items .product-items')
bestItems.forEach(productList => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('product-item')

  itemEl.innerHTML = /* html */ `
    <!-- 제품 사진 -->
    <div class="product-item-image">
      <a href="javascript:;">
        <img src="${productList.img}" alt="${productList.alt}">
        ${productList.sold_out}
      </a>
    </div>
    <!-- 제품 정보 -->
    <div class="product-item-info">
      <!-- 제품 라벨 -->
      <ul class="item-labels">
        ${productList.label_bset}
        ${productList.label_new}
        ${productList.label_only}
      </ul>
      <!-- 제품명 -->
      <div class="item-name">
        <span>${productList.name}</span>
      </div>
      <!-- 제품 가격 -->
      <div class="item-price-box">
        <span class="discount-percent">${productList.discount_percent}</span>
        <span class="special-price">${productList.special_price}</span>
        <span class="basic-price">${productList.basic_price}</span>
      </div>
      <!-- 제품 리뷰 -->
      <div class="item-review-box">
        <div class="review-star"></div>
        ${productList.review_star}
      </div>
      <!-- 제품 위시리스트, 장바구니 -->
      <div class="item-button-box">
        <div class="product-wishlist">
        <span class="material-symbols-outlined">favorite
          <span class="blind">위시리스트</span>
        </span>
        </div>
        <div class="product-bag">
          <span class="material-symbols-outlined">shopping_bag
            <span class="blind">장바구니</span>
          </span>
        </div>
      </div>
    </div>
  `
  bestItemsEl.append(itemEl)
})

// 신상 제품 리스트
const newItemsEl = document.querySelector('.new-items .product-items')
newItems.forEach(productList => {
  const itemEl = document.createElement('li')
  itemEl.classList.add('product-item')

  itemEl.innerHTML = /* html */ `
    <!-- 제품 사진 -->
    <div class="product-item-image">
      <a href="javascript:;">
        <img src="${productList.img}" alt="${productList.alt}">
        ${productList.sold_out}
      </a>
    </div>
    <!-- 제품 정보 -->
    <div class="product-item-info">
      <!-- 제품 라벨 -->
      <ul class="item-labels">
        ${productList.label_bset}
        ${productList.label_new}
        ${productList.label_only}
      </ul>
      <!-- 제품명 -->
      <div class="item-name">
        <span>${productList.name}</span>
      </div>
      <!-- 제품 가격 -->
      <div class="item-price-box">
        <span class="discount-percent">${productList.discount_percent}</span>
        <span class="special-price">${productList.special_price}</span>
        <span class="basic-price">${productList.basic_price}</span>
      </div>
      <!-- 제품 리뷰 -->
      <div class="item-review-box">
        <div class="review-star"></div>
        ${productList.review_star}
      </div>
      <!-- 제품 위시리스트, 장바구니 -->
      <div class="item-button-box">
        <div class="product-wishlist">
        <span class="material-symbols-outlined">favorite
          <span class="blind">위시리스트</span>
        </span>
        </div>
        <div class="product-bag">
          <span class="material-symbols-outlined">shopping_bag
            <span class="blind">장바구니</span>
          </span>
        </div>
      </div>
    </div>
  `
  newItemsEl.append(itemEl)
})


