import axios from 'axios';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix';

const refs = {
  categories: document.querySelector('.categories-list'),
  title: document.querySelector('.main-title'),
  list: document.querySelector('.common-list'),
  titleSpan: document.querySelector('.main-title-wrapper'),
};
console.log(refs.titleSpan);

const arrayError =
  'Sorry, there are no books matching the selected category. Please select something else.';
const fechError = 'Sorry, something went wrong. Try again!';

refs.categories.addEventListener('click', onCategoriesClick);
refs.list.addEventListener('click', onSeeMoreBtnClick);

let currentCategory = '';
let buttonCategory = '';

function onCategoriesClick(event) {
  if (event.target.className !== 'categories-link') {
    return;
  }
  currentCategory = event.target.textContent.replaceAll(' ', '%20');

  searchService(currentCategory)
    .then(resp => {
      if (resp.data.length === 0) {
        throw new Error(Notify.info(arrayError));
      }
      const listName = resp.data[0].list_name;

      refs.title.textContent = firstPartTitleSplit(listName);
      refs.title.insertAdjacentHTML(
        'beforeend',
        `&nbsp;<span class="main-title main-title-wrapper">${lastPartTitleSplit(
          listName
        )}</span>`
      );

      refs.list.innerHTML = createMarkup(resp.data);
    })
    .catch(function (error) {
      if (error.response) {
        Notify.failure(fechError);
      } else if (error.request) {
        Notify.failure(fechError);
      }
    });
}

async function searchService(categoryValue) {
  const URL = `https://books-backend.p.goit.global/books/category?category=${categoryValue}`;

  const data = await axios.get(URL);
  return data;
}

function createMarkup(arr) {
  return arr
    .map(({ book_image, author, list_name, title, _id }) => {
      const card = `<li class="book-item" data-id="${_id}">
            <a href="#" class="book-link">
                <img class="book-img" src="${
                  book_image || '../images/default_image.jpg'
                }" data-id="${_id}" alt="${title}"> 
                <h3 class="book-title">${title}</h3>
                <p class="book-author">${author}</p>
            </a>
        </li>`;

      return card;
    })
    .join('');
}

function onSeeMoreBtnClick(event) {
  if (event.target.className !== 'showMore-btn') {
    return;
  }
  buttonCategory = event.target.name.replaceAll(' ', '%20');

  searchService(buttonCategory)
    .then(resp => {
      if (resp.data.length === 0) {
        throw new Error(Notify.info(arrayError));
      }
      const listName = resp.data[0].list_name;

      refs.title.textContent = firstPartTitleSplit(listName);
      refs.title.insertAdjacentHTML(
        'beforeend',
        `&nbsp;<span class="main-title main-title-wrapper">${lastPartTitleSplit(
          listName
        )}</span>`
      );

      refs.list.innerHTML = createMarkup(resp.data);
    })
    .catch(function (error) {
      if (error.response) {
        Notify.failure(fechError);
      } else if (error.request) {
        Notify.failure(fechError);
      }
    });
}

function firstPartTitleSplit(title) {
  const arr = title.split(' ');
  return arr.splice(0, arr.length - 1).join(' ');
}

function lastPartTitleSplit(title) {
  const arr = title.split(' ');
  return arr[arr.length - 1];
}
