!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequired7c6=i),i.register("iE7OH",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,r={};n=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),i("iE7OH").register(JSON.parse('{"kKLfj":"shopping_list_olexandr.68c373c4.js","kSqT3":"amazon.a0223db0.png","hTMkK":"apple-books.5a9f17e3.png","9Qt2K":"bookshop.801e98bc.png","3Aako":"index.58548398.js","jgbYs":"index.824d9807.js"}')),i("6JpON");var s={};s=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("kSqT3");var a={};a=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("hTMkK");var l={};l=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("9Qt2K"),i("knWGd"),i("ksGdE"),i("E6hPi");// import Pagination from 'tui-pagination';
// // Отримати дані з localStorage
// const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
// // Задати розмір порції на сторінці
// const itemsPerPage = 3;
// // Розподілити дані на порції
// const paginatedData = [];
// for (let i = 0; i < shoppingList.length; i += itemsPerPage) {
//   const page = shoppingList.slice(i, i + itemsPerPage);
//   paginatedData.push(page);
// }
// function displayPage(pageNumber) {
//     // Отримати поточну порцію з paginatedData
//     const currentPage = paginatedData[pageNumber - 1];
//     // Очистити старий вміст сторінки
//     const shoppingListContainer = document.getElementById('shoppingListContainer');
//     shoppingListContainer.innerHTML = '';
//     // Відобразити елементи поточної порції
//     currentPage.forEach((item) => {
//       const listItem = document.createElement('li');
//       listItem.textContent = item.name; // Припускаючи, що у вас є поле "name" в об'єкті покупки
//       shoppingListContainer.appendChild(listItem);
//     });
//   }
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
// import './js/helper';
let c=document.querySelector(".shop-list-container"),u=document.querySelector(".shop-list-empty"),d="bookArr";function f(e){let t=JSON.parse(localStorage.getItem(d));if(0===t.length){c.innerHTML="",u.classList.remove("shoping-hidden");return}u.classList.add("shoping-hidden"),c.insertAdjacentHTML("beforeend",p(t)),document.querySelector(".shop-button-book-remove"),c.innerHTML=p(t)}function p(e){return e.map(({author:e,title:o,description:n,book_image:r,buy_links:i,list_name:c,id:u})=>{let d=`<li class="shop-list-item" data-id="${u}">
                <img class="shop-list-img" src="${r||"../images/default_image.jpg"}" alt="${o}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${o}</h3>
                <p class="shop-category">${c}</p>
                <p class="shop-description">${n}</p>
                <p class="shop-book-author">${e}</p>
                </div>
                <ul class="shop-links-img">
        <li>
        <a href=${g(i,"Amazon")} target= _blank><img src="${/*@__PURE__*/t(s)}" alt="Amazon"></a>
        </li>
        <li>
        <a href=${g(i,"Apple Books")} target= _blank><img src="${/*@__PURE__*/t(a)}" alt="Apple-Books"></a>
        </li>
        <li>
        <a href=${g(i,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/t(l)}" alt="Book-Shop"></a>
        </li>
      </ul> 
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" widht="12" height="12">
      <use xlink:href="./images/sprite.svg#icon-shop-trash"></use>
      </svg>
      </button>
        </li>`;return d}).join("")}function g(e,t){for(let{name:o,url:n}of e)if(o===t)return n}window.addEventListener("DOMContentLoaded",f),c.addEventListener("click",function(e){if("shop-button-book-remove"!==e.target.className)return;let t=e.target.parentNode.dataset.id;(function(e){let t=JSON.parse(localStorage.getItem(d)),o=t.find(t=>t.id===e);console.log(o);let n=t.findIndex(t=>t.id===e);t.splice(n,1),localStorage.setItem(d,JSON.stringify(t))}// const addBoock = document.querySelector(".addNotification");
)(t),f()});// const removeBoock = document.querySelector(".removeNotification");
// const emptyList = document.querySelector(".shop-list-empty")
// const LOCALSTORAGE_KEY = "storageKey";
// updateAddBoock();
// addBoock.addEventListener("submit", saveAddBook);
// function saveAddBook(evt) {
//     evt.preventDefault();
//     localStorage.setItem(LOCALSTORAGE_KEY, addBoock.elements.value);
//         updateAddBoock();
//         addBoock.reset();
// }
// console.log(updateAddBoock);
// function updateAddBoock() {
//     removeBoock.textContent =
//     localStorage.getItem(LOCALSTORAGE_KEY) || (emptyList);
// }
// console.log(updateAddBoock);
// const save = (key, value) => {
//     try {
//       const serializedState = JSON.stringify(value);
//       localStorage.setItem(key, serializedState);
//     } catch (error) {
//       console.error("Set state error: ", error.message);
//     }
//   };
//   const load = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//       console.error("Get state error: ", error.message);
//     }
//   };
//   export default {
//     save,
//     load,
//   };
}();//# sourceMappingURL=shopping_list_olexandr.68c373c4.js.map

//# sourceMappingURL=shopping_list_olexandr.68c373c4.js.map
