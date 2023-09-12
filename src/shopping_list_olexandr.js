import axios from 'axios';
import Notiflix from 'notiflix';
import amazon from './images/book-shop/amazon.png';
import applebooks from './images/book-shop/apple-books.png';
import bookshop from './images/book-shop/bookshop.png';
//===========
import { addPagination } from './js/pagination_mariia';

import './js/header_hrebinchuk';
import './js/support_daryna';
import './js/dark_theme_max';
import './js/pagination_mariia';

import trashshop from '/src/images/sprite.svg';

const rightWrapper = document.querySelector('.shop-list-container');
const defaultMessage = document.querySelector('.shop-list-empty');
const PRODUCTS_LS_KEY = 'bookArr';
let bookShopRemove = null;

window.addEventListener('DOMContentLoaded', shopingListMarkupAdd);

function shopingListMarkupAdd(event) {
  const booksArr = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));
  if (booksArr.length === 0) {
    rightWrapper.innerHTML = '';
    defaultMessage.classList.remove('shoping-hidden');
    return;
  }
  defaultMessage.classList.add('shoping-hidden');
  // rightWrapper.insertAdjacentHTML('beforeend', shopingListBookMarkup(booksArr));
  addPagination();
  bookShopRemove = document.querySelector('.shop-button-book-remove');
  // rightWrapper.innerHTML = shopingListBookMarkup(booksArr);
}
rightWrapper.addEventListener('click', onBtnBookRemoveClick);

export function shopingListBookMarkup(arr) {
  return arr
    .map(
      ({
        author,
        title,
        description,
        book_image,
        buy_links,
        list_name,
        id,
      }) => {
        const card = `<li class="shop-list-item" data-id="${id}">
                <img class="shop-list-img" src="${
                  book_image || '../images/default_image.jpg'
                }" alt="${title}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${title}</h3>
                <p class="shop-category">${list_name}</p>
                <p class="shop-description">${description}</p>
                <div class="shop-autor-links">
                <p class="shop-book-author">${author}</p>
                <ul class="shop-links-img">
        <li class="shop-link shop-link-amazon">
        <a class="item-link" href=${getUrl(
          buy_links,
          'Amazon'
        )} target= _blank><img src="${amazon}" alt="Amazon" width="48px" height="15px"class="card-image card-imge-amazon"></a>
        </li>
        <li>
        <a class="item-link" href=${getUrl(
          buy_links,
          'Apple Books'
        )} target= _blank><img src="${applebooks}" alt="Apple-Books" width="30px"class="card-image"></a>
        </li>
        <li>
        <a class="item-link" href=${getUrl(
          buy_links,
          'Bookshop'
        )} target= _blank> <img src="${bookshop}" alt="Book-Shop" width="30px"class="card-image"></a>
        </li>
      </ul>
      </div>
                </div>
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" width="20" height="20">
                    <use href="${trashshop}#icon-shop-trash"></use>
                </svg>
      </button>
        </li>`;

        return card;
      }
    )
    .join('');
}

function getUrl(buy_links, market) {
  for (const { name, url } of buy_links) {
    if (name === market) {
      return url;
    }
  }
}

function onBtnBookRemoveClick(event) {
  if (event.target.className !== 'shop-button-book-remove') {
    return;
  }
  const bookRemoveId = event.target.parentNode.dataset.id;

  removeFromBasket(bookRemoveId);
  addPagination();
}

function removeFromBasket(id) {
  const productsArr = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));
  const checkoutProductId = productsArr.find(elem => elem.id === id);
  const indexRemoveBook = productsArr.findIndex(
    checkoutProductId => checkoutProductId.id === id
  );
  productsArr.splice(indexRemoveBook, 1);
  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(productsArr));
}
