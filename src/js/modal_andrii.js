const backDrop = document.querySelector('#book-modal');
const closeBtn = document.querySelector('.modal__close-btn');
const addBookBtn = document.querySelector('.add-bookBtn');
const removeNotification = document.querySelector('.removeNotification');
const addNotification = document.querySelector('.addNotification');
const notification = document.querySelector('.notification');
const commonListRef = document.querySelector('.common-list');
let modalContent = document.querySelector('.modal__content');
let idToLocaleStorege = null;
let arrToLocaleStoreg = [];

addBookBtn.addEventListener('click', onAddBookClick);
closeBtn.addEventListener('click', onBtnCloseClick);

commonListRef.addEventListener('click', onClick);
console.log(commonListRef);

const commonListRef = document.querySelector('.common-list');
const modalContent = document.querySelector('.modal__content');
const backDrop = document.querySelector('#book-modal');

commonListRef.addEventListener('click', onClick);

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

function addModalMarkup({
  author,
  title,
  description,
  book_image,
  amazon_product_url,
}) {
  const card = `<div class="modal__img-container"> 
        <img src="${book_image}" alt="${title}" class="modal__img"> 
      </div> 
      <div class="modal__desc"> 
        <h2 class="modal__title">${title}</h2> 
        <p class="modal__author">${author}</p> 
        <p class="modal__book-desc">${description}</p> 
        <ul class="modal__list"> 
          <li class="modal__item"><a href="${amazon_product_url}" class="amazon-link"><img class="store-link-img amazon-img" src="${title}" alt=""></a></li> 
          <li class="modal__item"><a href="${title}" class="app-book-link"><img class="store-link-img" src="${title}" alt=""></a></li> 
          <li class="modal__item"><a href="${title}" class="book-shop-link"><img class="store-link-img" src="${title}" alt=""></a></li> 
        </ul> 
       
</div>`;
  return card;
}

function onBtnCloseClick(e) {
  console.log(e.code);
  // console.log(e.currentTarget)

  if (e.code === 'Escape') {
    backDrop.removeEventListener('keydown', onBtnCloseClick);
    backDrop.classList.add('is-hidden');
  }
  if (e.currentTarget === e.target) {
    backDrop.classList.add('is-hidden');
  }
  if (e.target.classList.contains('modal__close-img')) {
    backDrop.classList.add('is-hidden');
  }
}

function onAddBookClick(res) {
  notification.classList.toggle('hidden');
  removeNotification.classList.toggle('hidden');
  addNotification.classList.toggle('hidden');

  if (addNotification.classList.contains('hidden')) {
    arrToLocaleStoreg.push(idToLocaleStorege);

    localStorage.setItem('shopping-list', JSON.stringify(arrToLocaleStoreg));
  }
  if (removeNotification.classList.contains('hidden')) {
    const arrTofilter = JSON.parse(localStorage.getItem('shopping-list'));
    const filtredArr = arrTofilter.filter(id => id !== idToLocaleStorege);
    localStorage.setItem('shopping-list', JSON.stringify(filtredArr));
  }
}
