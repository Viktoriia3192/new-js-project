import axios from 'axios';
import amazon from '../images/book-shop/amazon.png';
import applebooks from '../images/book-shop/apple-books.png';
import bookshop from '../images/book-shop/bookshop.png';

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

//!----------
let book = {
  

}

//!------------------

function onClick(e) {
  if (e.target.className !== 'book-img') {
    return;
  }
  document.body.style.overflow = 'hidden';
  backDrop.classList.remove('is-hidden');
  let value = e.target.dataset.id;
  fetchBook(value).then(resp => {
   //!-------
   const {author, title, description, book_image, buy_links,list_name} = resp.data;

   book = {author,title,description,book_image,buy_links,list_name};
    
  
   console.log(book);

   //!--------------------
    modalContent.innerHTML = '';
    modalContent.insertAdjacentHTML('afterbegin', addModalMarkup(resp.data));
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

//!--------------------------------
addBtn.addEventListener("click", addToBasket);

function addToBasket()
 {

  
 

 }


 //!--------------------------------