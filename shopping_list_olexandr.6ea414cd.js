!function(){function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequired7c6=i),i.register("iE7OH",function(t,o){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,n={};r=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),i("iE7OH").register(JSON.parse('{"kKLfj":"shopping_list_olexandr.6ea414cd.js","ee16w":"sprite.91fed135.svg","kSqT3":"amazon.a0223db0.png","hTMkK":"apple-books.5a9f17e3.png","9Qt2K":"bookshop.801e98bc.png","QSTeH":"index.6c83ab3f.js","547K7":"index.0442f1dd.js"}')),i("6JpON");var s={};s=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("kSqT3");var a={};a=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("hTMkK");var l={};l=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("9Qt2K"),i("knWGd"),i("ksGdE"),i("E6hPi");// import Pagination from 'tui-pagination';
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
var c={};c=i("aNJCr").getBundleURL("kKLfj")+i("iE7OH").resolve("ee16w");let u=document.querySelector(".shop-list-container"),d=document.querySelector(".shop-list-empty"),f="bookArr";function p(e){let t=JSON.parse(localStorage.getItem(f));if(0===t.length){u.innerHTML="",d.classList.remove("shoping-hidden");return}d.classList.add("shoping-hidden"),u.insertAdjacentHTML("beforeend",g(t)),document.querySelector(".shop-button-book-remove"),u.innerHTML=g(t)}function g(e){return e.map(({author:e,title:o,description:r,book_image:n,buy_links:i,list_name:u,id:d})=>{let f=`<li class="shop-list-item" data-id="${d}">
                <img class="shop-list-img" src="${n||"../images/default_image.jpg"}" alt="${o}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${o}</h3>
                <p class="shop-category">${u}</p>
                <p class="shop-description">${r}</p>
                <p class="shop-book-author">${e}</p>
                </div>
                <ul class="shop-links-img">
        <li class="shop-link">
        <a href=${h(i,"Amazon")} target= _blank><img src="${/*@__PURE__*/t(s)}" alt="Amazon"></a>
        </li>
        <li>
        <a href=${h(i,"Apple Books")} target= _blank><img src="${/*@__PURE__*/t(a)}" alt="Apple-Books"></a>
        </li>
        <li>
        <a href=${h(i,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/t(l)}" alt="Book-Shop"></a>
        </li>
      </ul> 
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" widht="12" height="12">
      <use xlink:href="${/*@__PURE__*/t(c)}"></use>
      </svg>
      </button>
        </li>`;return f}).join("")}function h(e,t){for(let{name:o,url:r}of e)if(o===t)return r}window.addEventListener("DOMContentLoaded",p),u.addEventListener("click",function(e){if("shop-button-book-remove"!==e.target.className)return;let t=e.target.parentNode.dataset.id;(function(e){let t=JSON.parse(localStorage.getItem(f));t.find(t=>t.id===e);let o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(f,JSON.stringify(t))})(t),p()})}();//# sourceMappingURL=shopping_list_olexandr.6ea414cd.js.map

//# sourceMappingURL=shopping_list_olexandr.6ea414cd.js.map
