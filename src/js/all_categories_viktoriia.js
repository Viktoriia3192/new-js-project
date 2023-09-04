import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getCategories } from './best_sellers_api';
const categoryList = document.querySelector('.categories-list');

getListCategories();

function createMarkupListCategory(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `
    <li class="categories-list-item">
      <a href="#" class="categories-link">${list_name}</a>
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
