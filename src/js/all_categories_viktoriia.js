import axios from 'axios';
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
    categoryList.insertAdjacentHTML(
      'beforeend',
      createMarkupListCategory(category)
    );
  } catch (err) {
    console.log('TRY-CATCH:', err);
  }
}

categoryList.addEventListener('click', e => {
  e.preventDefault();
});
