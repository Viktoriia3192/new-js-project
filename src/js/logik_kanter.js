import axios from 'axios';

const refs = {
  categories: document.querySelector('.categories-list'),
  list: document.querySelector('.categories-books'),
};

const arrayError =
  'Sorry, there are no books matching the selected category. Please select something else.';
const fechError = 'Sorry, something went wrong. Try again!';

refs.categories.addEventListener('click', onCategoriesClick);

let currentCategory = '';

function onCategoriesClick(event) {
  if (event.target.className !== 'categories-link') {
    return;
  }
  currentCategory = event.target.textContent.replaceAll(' ', '%20');

  searchService(currentCategory)
    .then(resp => {
      if (resp.data.length === 0) {
        throw new Error(arrayError);
        // throw new Error(Notify.info(arrayError));
      }
      refs.list.innerHTML = createMarkup(resp.data);
    })
    .catch(function (error) {
      if (error.response) {
        console.log(fechError);
        // Notify.failure(fechError);
      } else if (error.request) {
        console.log(fechError);
        // Notify.failure(fechError);
      }
    });
}

async function searchService(categoryValue) {
  const URL = `https://books-backend.p.goit.global/books/category?category123=${categoryValue}`;

  const data = await axios.get(URL);
  return data;
}

function createMarkup(arr) {
  return arr
    .map(({ book_image, author, list_name, title }) => {
      const card = `<li class="book-item">
            <a href="#" class="book-link">
                <img src="${book_image}" alt="${title}"> 
                <h4 class="book-title">${title}</h4>
                <p class="book-author">${author}</p>
            </a>
        </li>`;

      return card;
    })
    .join('');
}
