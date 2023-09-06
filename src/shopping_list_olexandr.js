import axios from 'axios';
import Notiflix from 'notiflix';
import amazon from './images/book-shop/amazon.png';
import applebooks from './images/book-shop/apple-books.png';
import bookshop from './images/book-shop/bookshop.png';

import './js/header_hrebinchuk';
import './js/support_daryna';
import './js/dark_theme_max';
import './js/pagination_mariia';
// import './js/helper';

const rightWrapper = document.querySelector('.shop-list-container');
const defaultMessage = document.querySelector('.shop-list-empty');
let bookShopRemove = null;
// const bookShopRemove = document.querySelector('.shop-button-book-remove');
const PRODUCTS_LS_KEY = 'bookArr';

window.addEventListener('DOMContentLoaded', shopingListMarkupAdd);

function shopingListMarkupAdd(event) {
  const booksArr = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));
  if (booksArr.length === 0) {
    rightWrapper.innerHTML = '';
    defaultMessage.classList.remove('shoping-hidden');
    return;
  }
  defaultMessage.classList.add('shoping-hidden');
  rightWrapper.insertAdjacentHTML('beforeend', shopingListBookMarkup(booksArr));
  bookShopRemove = document.querySelector('.shop-button-book-remove');
  rightWrapper.innerHTML = shopingListBookMarkup(booksArr);
}
rightWrapper.addEventListener('click', onBtnBookRemoveClick);

function shopingListBookMarkup(arr) {
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
                <p class="shop-book-author">${author}</p>
                </div>
                <ul class="shop-links-img">
        <li>
        <a href=${getUrl(
          buy_links,
          'Amazon'
        )} target= _blank><img src="${amazon}" alt="Amazon"></a>
        </li>
        <li>
        <a href=${getUrl(
          buy_links,
          'Apple Books'
        )} target= _blank><img src="${applebooks}" alt="Apple-Books"></a>
        </li>
        <li>
        <a href=${getUrl(
          buy_links,
          'Bookshop'
        )} target= _blank> <img src="${bookshop}" alt="Book-Shop"></a>
        </li>
      </ul> 
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" widht="12" height="12">
      <use xlink:href="./images/sprite.svg#icon-shop-trash"></use>
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
  shopingListMarkupAdd();
}

function removeFromBasket(id) {
  const productsArr = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));
  const checkoutProductId = productsArr.find(elem => elem.id === id);
  console.log(checkoutProductId);
  const indexRemoveBook = productsArr.findIndex(
    checkoutProductId => checkoutProductId.id === id
  );
  productsArr.splice(indexRemoveBook, 1);
  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(productsArr));
}

// const addBoock = document.querySelector(".addNotification");
// const removeBoock = document.querySelector(".removeNotification");
// const emptyList = document.querySelector(".shop-list-empty")
// const LOCALSTORAGE_KEY = "storageKey";

// updateAddBoock();
// addBoock.addEventListener("submit", saveAddBook);

// function saveAddBook(evt) {
//     evt.preventDefault();
//     localStorage.setItem(LOCALSTORAGE_KEY, addBoock.elements.value);
//         updateAddBoock();
//         addBoock.reset();
// }
// console.log(updateAddBoock);

// function updateAddBoock() {
//     removeBoock.textContent =
//     localStorage.getItem(LOCALSTORAGE_KEY) || (emptyList);
// }
// console.log(updateAddBoock);

// const save = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (error) {
//       console.error("Set state error: ", error.message);
//     }
//   };

//   const load = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//       console.error("Get state error: ", error.message);
//     }
//   };

//   export default {
//     save,
//     load,
//   };
