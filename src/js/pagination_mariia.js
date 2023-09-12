import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { shopingListBookMarkup } from '../shopping_list_olexandr';

// Отримати дані з localStorage
let shoppingList = JSON.parse(localStorage.getItem('bookArr'));
// console.log(shoppingList);

// Задати розмір порції на сторінці
const itemsPerPage = 3;
const visiblePages = 3;
let totalItems = shoppingList.length;

const paginationEl = document.querySelector('.tui-pagination');
const rightWrapper = document.querySelector('.shop-list-container');

function addPagination() {
  shoppingList = JSON.parse(localStorage.getItem('bookArr'));
  const options = {
    totalItems,
    itemsPerPage,
    visiblePages,
    centerAlign: true,
    currentPage: 1,
  };
  //  Розподіл даних на порції
  function changeArray(arr, itemsPerPage) {
    const changedArr = [];
    let index = 0;
    while (index < arr.length) {
      const book = arr.slice(index, itemsPerPage + index);

      changedArr.push(book);
      index += itemsPerPage;
    }

    return changedArr;
  }
  const changedArrBooks = changeArray(shoppingList, options.itemsPerPage);
  console.log(changedArrBooks);
  let booksOnPage = changedArrBooks[options.currentPage - 1];
  console.log(booksOnPage);

  rightWrapper.innerHTML = shopingListBookMarkup(booksOnPage);

  const pagination = new Pagination(paginationEl, options);

  pagination.reset(totalItems);

  pagination.on('beforeMove', event => {
    options.currentPage = event.page;
    booksOnPage = changedArrBooks[options.currentPage - 1];
    // console.log(booksOnPage);
    rightWrapper.innerHTML = shopingListBookMarkup(booksOnPage);
  });

  pagination.reset(totalItems);
}
export { addPagination };

// // // Розподілити дані на порції
// let paginatedData = [];
// for (let i = 0; i < shoppingList.length; i += itemsPerPage) {
//   const page = shoppingList.slice(i, i + itemsPerPage);
//   paginatedData.push(page);
// }
// getPagination(paginatedData, itemsPerPage);
// function displayPage(pageNumber) {
//   //     // Отримати поточну порцію з paginatedData
//   const currentPage = paginatedData[pageNumber - 1];
//   console.log(currentPage);

//   // Очистити старий вміст сторінки
//   const shoppingListContainer = document.getElementById(
//     'shoppingListContainer'
//   );
//   shoppingListContainer.innerHTML = '';

//   // Відобразити елементи поточної порції
//   currentPage.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item.name; // Припускаючи, що у вас є поле "name" в об'єкті покупки
//     shoppingListContainer.appendChild(listItem);
//   });
// }

//   function onPageChange(pageNumber) {
//     displayPage(pageNumber);
//   }

//   // Приклад створення кнопок для переходу між сторінками
//   const totalPages = paginatedData.length;
//   for (let i = 1; i <= totalPages; i++) {
//     const pageButton = document.createElement('button');
//     pageButton.textContent = i;
//     pageButton.addEventListener('click', () => onPageChange(i));
//     document.getElementById('paginationButtons').appendChild(pageButton);
//   }
// //
