function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequired7c6=i),i.register("kyEFX",function(t,o){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return n},function(e){return n=e});var r,n,i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("kyEFX").register(JSON.parse('{"eUPFY":"shopping_list_olexandr.0a851f6b.js","8XY7q":"amazon.a0223db0.png","3WxNb":"apple-books.5a9f17e3.png","lJIFT":"bookshop.801e98bc.png","lp5u4":"sprite.91fed135.svg","2fsHU":"index.f8a9ec18.js","iaVm6":"index.cb9187f2.js"}')),i("7Y9D8");var s={};s=new URL(i("kyEFX").resolve("8XY7q"),import.meta.url).toString();var l={};l=new URL(i("kyEFX").resolve("3WxNb"),import.meta.url).toString();var a={};a=new URL(i("kyEFX").resolve("lJIFT"),import.meta.url).toString(),i("5Szup"),i("fewGv"),i("dGLOO");// import Pagination from 'tui-pagination';
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
var u={};u=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString();const p=document.querySelector(".shop-list-container"),c=document.querySelector(".shop-list-empty"),d="bookArr";function f(e){let t=JSON.parse(localStorage.getItem(d));if(0===t.length){p.innerHTML="",c.classList.remove("shoping-hidden");return}c.classList.add("shoping-hidden"),p.insertAdjacentHTML("beforeend",g(t)),document.querySelector(".shop-button-book-remove"),p.innerHTML=g(t)}function g(e){return e.map(({author:e,title:o,description:r,book_image:n,buy_links:i,list_name:p,id:c})=>{let d=`<li class="shop-list-item" data-id="${c}">
                <img class="shop-list-img" src="${n||"../images/default_image.jpg"}" alt="${o}"> 
                <div class="shop-list-info">
                <h3 class="shop-book-title">${o}</h3>
                <p class="shop-category">${p}</p>
                <p class="shop-description">${r}</p>
                <p class="shop-book-author">${e}</p>
                </div>
                <ul class="shop-links-img">
        <li class="shop-link">
        <a href=${h(i,"Amazon")} target= _blank><img src="${/*@__PURE__*/t(s)}" alt="Amazon"></a>
        </li>
        <li>
        <a href=${h(i,"Apple Books")} target= _blank><img src="${/*@__PURE__*/t(l)}" alt="Apple-Books"></a>
        </li>
        <li>
        <a href=${h(i,"Bookshop")} target= _blank> <img src="${/*@__PURE__*/t(a)}" alt="Book-Shop"></a>
        </li>
      </ul> 
      <button class="shop-button-book-remove" type="button">
      <svg class="shop-remove-btn" widht="12" height="12">
      <use xlink:href="${/*@__PURE__*/t(u)}"></use>
      </svg>
      </button>
        </li>`;return d}).join("")}function h(e,t){for(let{name:o,url:r}of e)if(o===t)return r}window.addEventListener("DOMContentLoaded",f),p.addEventListener("click",function(e){if("shop-button-book-remove"!==e.target.className)return;let t=e.target.parentNode.dataset.id;(function(e){let t=JSON.parse(localStorage.getItem(d));t.find(t=>t.id===e);let o=t.findIndex(t=>t.id===e);t.splice(o,1),localStorage.setItem(d,JSON.stringify(t))}//# sourceMappingURL=shopping_list_olexandr.0a851f6b.js.map
)(t),f()});
//# sourceMappingURL=shopping_list_olexandr.0a851f6b.js.map
