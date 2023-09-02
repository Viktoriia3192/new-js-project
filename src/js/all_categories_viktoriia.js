import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const URL_CATEGORY = 'https://books-backend.p.goit.global/books/category-list';
const categoryList = document.querySelector('.categories-list');

async function getCategories() {
  const { data } = await axios.get(URL_CATEGORY);
  return data;
}
getListCategories();

function createMarkupListCategory(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `
    <li class="categories-list-item">
      <a href="" class="categories-link">${list_name}</a>
    </li>
  `
    )
    .join('');
}

async function getListCategories() {
  try {
    const category = await getCategories();
    if (!category.length) {
      Notify.failure('Oops something going wrong.');
      return;
    }
    categoryList.insertAdjacentHTML(
      'beforeend',
      createMarkupListCategory(category)
    );
  } catch (err) {
    console.log('TRY-CATCH:', err);
    Notify.failure('Oops something going wrong.');
  }
}

categoryList.addEventListener('click', e => {
  e.preventDefault();
});
