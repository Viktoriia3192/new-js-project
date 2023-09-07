import axios, { formToJSON } from 'axios';
import amazon from '../images/book-shop/amazon.png';
import applebooks from '../images/book-shop/apple-books.png';
import bookshop from '../images/book-shop/bookshop.png';
//!------------------------------------

import { save, load } from './localStorageService';

//!------------------------------------------
const commonListRef = document.querySelector('.common-list');
const modalContent = document.querySelector('.modal__content');
const backDrop = document.querySelector('#book-modal');
const modal = document.getElementById('book-modal');
const closeButton = document.querySelector('.modal__close-btn');
const addBtn = document.querySelector('.add-bookBtn');
const addNotification = document.querySelector('.addNotification');
const removeNotification = document.querySelector('.removeNotification');
const notification = document.querySelector('.notification');
const removeBook = document.querySelector('.remove-book');
const modalWindow = document.querySelector('.modal');

commonListRef.addEventListener('click', onClick);

let book = {};

function onClick(e) {
  if (!e.target.closest('.book-item')) {
    return;
  }

  let value = e.target.dataset.id;
  fetchBook(value).then(resp => {
    const {
      author,
      title,
      description,
      book_image,
      buy_links,
      list_name,
      _id,
    } = resp.data;

    book = {
      author,
      title,
      description,
      book_image,
      buy_links,
      list_name,
      id: _id,
    };

    //!--------------------
    modalContent.innerHTML = '';
    modalContent.insertAdjacentHTML('afterbegin', addModalMarkup(resp.data));
    document.body.style.overflow = 'hidden';
    backDrop.classList.remove('is-hidden');
    addBtn.textContent = `${check(resp.data._id)}`;
    if (addBtn.textContent === 'Remove from the shopping list') {
      notification.classList.remove('hidden');
    } else if (addBtn.textContent === 'Add to shopping list') {
      notification.classList.add('hidden');
    }
  });
}

async function fetchBook(bookId) {
  const URL = `https://books-backend.p.goit.global/books/${bookId}`;

  const data = await axios.get(URL);
  return data;
}

function addModalMarkup({ author, title, description, book_image, buy_links }) {
  const card = `<div class="modal__img-container"> 
        <img src="${book_image}" alt="${title}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${title}</h2> 
        <p class="modal__author">${author}</p> 
        <p class="modal__book-desc">${description}</p>
        <ul class="modal-book-image-list">
        <li>
        <a class="modal-book-shop-amazon" href=${getUrl(
          buy_links,
          'Amazon'
        )} target= _blank><img src="${amazon}" alt="Amazon"></a>
          
        </li>
        <li>
        <a class="modal-book-shop" href=${getUrl(
          buy_links,

          'Apple Books'
        )} target= _blank><img src="${applebooks}" alt="Apple-Books"></a>
          

        </li>
        <li>
        <a class="modal-book-shop" href=${getUrl(
          buy_links,
          'Bookshop'
        )} target= _blank> <img src="${bookshop}" alt="Book-Shop"></a>
         
       
        </li>
      </ul> 
</div>`;
  return card;
}

function getUrl(buy_links, market) {
  for (const { name, url } of buy_links) {
    if (name === market) {
      return url;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  function closeModal() {
    modalContent.innerHTML = '';
    document.body.style.overflow = 'auto';
    modal.classList.add('is-hidden');
  }

  closeButton.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  modalContent.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

//!--------------------------------
const PRODUCTS_LS_KEY = 'bookArr';
modalWindow.addEventListener('click', onAddButtonClick);

function onAddButtonClick(e) {
  if (e.target.textContent === 'Add to shopping list') {
    addToBasket(book);
  } else if (e.target.textContent === 'Remove from the shopping list') {
    removeFromBasket(book);
  }
}

function addToBasket(obj) {
  const products = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) ?? [];
  if (products.length === 0) {
    products.push(obj);
  } else if (products.length > 0) {
    const productId = obj.id;
    const productsArr = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));
    const checkoutProductId = products.findIndex(({ id }) => id === productId);
    if (checkoutProductId === -1) {
      products.push(obj);
    }
  }
  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(products));
  addBtn.textContent = `${check(obj.id)}`;
  addClassHiddenToNotification(obj.id);
}

function removeFromBasket({ id }) {
  const productsArr = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));
  const checkoutProductId = productsArr.find(elem => elem.id === id);
  const indexRemoveBook = productsArr.findIndex(
    checkoutProductId => checkoutProductId.id === id
  );
  productsArr.splice(indexRemoveBook, 1);
  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(productsArr));
  addBtn.textContent = `${check(id)}`;
  addClassHiddenToNotification(id);
}
//!--------------------------------

//! Check if the book has alredy been in LS
//!-------------------------------------------------------

function check(id) {
  const booksStorage = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));

  if (!booksStorage) {
    return 'Add to shopping list';
  }

  const index = booksStorage.findIndex(book => book.id === id);

  return index === -1
    ? 'Add to shopping list'
    : 'Remove from the shopping list';
}
//!--------------------------------------------------------

function addClassHiddenToNotification(id) {
  const booksStorage = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY));

  if (!booksStorage) {
    return;
  }
  const index = booksStorage.findIndex(book => book.id === id);

  if (index !== -1) {
    notification.classList.remove('hidden');
  } else {
    notification.classList.add('hidden');
  }
}
