import axios from 'axios';

const commonListRef = document.querySelector('.common-list');
const modalContent = document.querySelector('.modal__content');
const backDrop = document.querySelector('#book-modal');
const modal = document.getElementById('book-modal');
const closeButton = document.querySelector('.modal__close-btn');
const addBtn = document.querySelector('.add-bookBtn');
const addNotification = document.querySelector('.addNotification');
const removeNotification = document.querySelector('.removeNotification');
const notification = document.querySelector('.notification');

commonListRef.addEventListener('click', onClick);
// console.log(commonListRef);

function onClick(e) {
  if (e.target.className !== 'book-img') {
    return;
  }
  backDrop.classList.remove('is-hidden');
  let value = e.target.dataset.id;
  fetchBook(value).then(resp => {
    modalContent.innerHTML = '';
    modalContent.insertAdjacentHTML('afterbegin', addModalMarkup(resp.data));
  });
}

async function fetchBook(bookId) {
  const URL = `https://books-backend.p.goit.global/books/${bookId}`;

  const data = await axios.get(URL);
  return data;
}

function addModalMarkup({ author, title, description, book_image }) {
  const card = `<div class="modal__img-container"> 
        <img src="${book_image}" alt="${title}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${title}</h2> 
        <p class="modal__author">${author}</p> 
        <p class="modal__book-desc">${description}</p> 
        // <ul class="modal__list"> 
        //   <li class="modal__item"><a href="${amazon_product_url}" class="amazon-link"><img class="store-link-img amazon-img" src="${title}" alt=""></a></li> 
        //   <li class="modal__item"><a href="${title}" class="app-book-link"><img class="store-link-img" src="${title}" alt=""></a></li> 
        //   <li class="modal__item"><a href="${title}" class="book-shop-link"><img class="store-link-img" src="${title}" alt=""></a></li> 
        // </ul> 
       
</div>`;
  return card;
}

document.addEventListener('DOMContentLoaded', function () {
  function closeModal() {
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

document.addEventListener('DOMContentLoaded', function () {
  function toggleButtonText() {
    if (addBtn.textContent === 'Add to shopping list') {
      addBtn.textContent = 'Remove from the shopping list';
      removeNotification.classList.remove('hidden');
      notification.classList.remove('hidden');
    } else {
      addBtn.textContent = 'Add to shopping list';
      removeNotification.classList.add('hidden');
      notification.classList.add('hidden');
    }
  }
  addBtn.addEventListener('click', toggleButtonText);
});
