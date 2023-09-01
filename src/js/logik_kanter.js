import axios from 'axios';

const refs = {
  categories: document.querySelector('.categories-list'),
};

refs.categories.addEventListener('click', onCategoriesClick);

let currentCategory = '';

function onCategoriesClick(event) {
  if (event.target.className !== 'categories-link') {
    return;
  }
  currentCategory = event.target.textContent.replaceAll(' ', '%20');
  console.log(currentCategory);

  searchService(currentCategory).then(data => {
    console.log(data);
  });
}

async function searchService(categoryValue) {
  const URL = `https://books-backend.p.goit.global/books/category?category=${categoryValue}`;

  const data = await axios.get(URL);
  return data;
}
