import axios from 'axios';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix';

const refs = {
  categories: document.querySelector('.categories-list'),
  title: document.querySelector('.main-title'),
  list: document.querySelector('.common-list'),
};

const arrayError =
  'Sorry, there are no books matching the selected category. Please select something else.';
const fechError = 'Sorry, something went wrong. Try again!';

refs.categories.addEventListener('click', onCategoriesClick);
refs.list.addEventListener('click', onSeeMoreBtnClick);

let currentCategory = '';
let buttonCategory = '';
let activeCategory = refs.categories.firstElementChild.firstElementChild;

categoryActiveColorChange(activeCategory);

function onCategoriesClick(event) {
  if (event.target.className !== 'categories-link') {
    return;
  }

  categoryActiveColorChange(event.target);
  currentCategory = event.target.textContent.replaceAll(' ', '%20');

  if (event.target !== refs.categories.firstElementChild.firstElementChild) {
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
}

async function searchService(categoryValue) {
  const URL = `https://books-backend.p.goit.global/books/category?category=${categoryValue}`;

  const data = await axios.get(URL);
  return data;
}

function createMarkup(arr) {
  return arr
    .map(({ book_image, author, title, _id }) => {
      const card = `<li class="book-item" data-id="${_id}" tabindex="0">
              <div class="thumb" data-id="${_id}">
              <img src="${
                book_image || '../images/default_image.png'
              }" alt="${title}" class="book-img" data-id="${_id}">
              <p class="notifications" data-id="${_id}">quick view</p>
              </div> 
              <h3 class="book-title" data-id="${_id}">${title}</h3>
              <p class="book-author" data-id="${_id}">${author}</p>
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

  const categoriesChildrensArr = Array.from(refs.categories.children);
  categoriesChildrensArr.forEach(category => {
    const categoryName = category.firstElementChild.textContent.replaceAll(
      ' ',
      '%20'
    );
    if (categoryName === buttonCategory) {
      categoryActiveColorChange(category);
    }
  });

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

function categoryActiveColorChange(category) {
  if (activeCategory) {
    activeCategory.classList.remove('category-active');
  }
  category.classList.add('category-active');
  activeCategory = category;
}
