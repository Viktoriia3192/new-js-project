!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},o.parcelRequired7c6=i),i.register("iE7OH",function(t,o){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var n,r,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},r=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,r={};n=function(e){var t=r[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),r[e]=t),t}}),i("iE7OH").register(JSON.parse('{"kKLfj":"shopping_list_olexandr.b6cc770b.js","ee16w":"sprite.34e09d89.svg","kSqT3":"amazon.a0223db0.png","hTMkK":"apple-books.5a9f17e3.png","9Qt2K":"bookshop.801e98bc.png","5DnEE":"index.04dadda3.js","8IgoO":"index.a0a6d74e.js"}')),i("6JpON");var s={};s=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("kSqT3");var a={};a=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("hTMkK");var l={};l=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("9Qt2K"),i("knWGd"),i("ksGdE"),i("E6hPi");// import Pagination from 'tui-pagination';
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
var c={};c=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("ee16w");let d=document.querySelector(".shop-list-container"),u=document.querySelector(".shop-list-empty"),p="bookArr";function f(e){let t=JSON.parse(localStorage.getItem(p));if(0===t.length){d.innerHTML="",u.classList.remove("shoping-hidden");return}u.classList.add("shoping-hidden"),d.insertAdjacentHTML("beforeend",h(t)),document.querySelector(".shop-button-book-remove"),d.innerHTML=h(t)}function h(e){return e.map(({author:e,title:o,description:n,book_image:r,buy_links:i,list_name:d,id:u})=>{let p=`<li class="shop-list-item" data-id="${u}">
                <img class="shop-list-img" src="${r||"../images/default_image.jpg"}" alt="${o}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${o}</h3>
                <p class="shop-category">${d}</p>
                <p class="shop-description">${n}</p>
                <div class="shop-autor-links">
                <p class="shop-book-author">${e}</p>
                <ul class="shop-links-img">
        <li class="shop-link shop-link-amazon">
        <a class="item-link" href=${g(i,"Amazon")} target= _blank><img src="${/*@__PURE__*/t(s)}" alt="Amazon" width="48px" height="15px"class="card-image card-imge-amazon"></a>
        </li>
        <li>
        <a class="item-link" href=${g(i,"Apple Books")} target= _blank><img src="${/*@__PURE__*/t(a)}" alt="Apple-Books" width="30px"class="card-image"></a>
        </li>
        <li>
        <a class="item-link" href=${g(i,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/t(l)}" alt="Book-Shop" width="30px"class="card-image"></a>
        </li>
      </ul>
      </div>
                </div>
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" width="20" height="20">
                    <use href="${/*@__PURE__*/t(c)}#icon-shop-trash"></use>
                </svg>
      </button>
        </li>`;return p}).join("")}function g(e,t){for(let{name:o,url:n}of e)if(o===t)return n}window.addEventListener("DOMContentLoaded",f),d.addEventListener("click",function(e){if("shop-button-book-remove"!==e.target.className)return;let t=e.target.parentNode.dataset.id;(function(e){let t=JSON.parse(localStorage.getItem(p));t.find(t=>t.id===e);let o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(p,JSON.stringify(t))})(t),f()})}();//# sourceMappingURL=shopping_list_olexandr.b6cc770b.js.map

//# sourceMappingURL=shopping_list_olexandr.b6cc770b.js.map
