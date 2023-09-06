import {save,load} from './localStorageService';
import {fetchBooksData} from './best_sellers_api';
import {Notify} from 'notiflix';

const firstTitlePart = "Best Sellers";
const secondTitlePart = "Books";
showLoader();
const list = document.querySelector(".common-list");
const title = document.querySelector(".main-title");

const allCategories = document.querySelector(".categories-list");

let length = window.innerWidth < 767 ? 1 : window.innerWidth < 1439 ? 3 : 5;

allCategories.firstElementChild.addEventListener("click",render);
window.addEventListener("resize", checkResize);


fetchBooksData('top-books')
.then(data => {
  save("data",data);  // Save data to localStorage
  renderMarkup(data);
})
.catch(error => Notify.failure(error));


function checkResize() {  // Check wether we should render markup or not.
         
   let currentLength = window.innerWidth < 767 ? 1 : window.innerWidth < 1439 ? 3 : 5; 
 
   if (currentLength!=length) {
 
    length = currentLength;

     const data = load("data");

    renderMarkup(data);
   }

}

function render() {

  const data = load("data");
  renderMarkup(data);
}

function renderMarkup(data) {  //render categories

     const categories = shuffleCategories(data);
    
  hideLoader();
     let markup = '';

     title.textContent = `${firstTitlePart}`;
     title.insertAdjacentHTML('beforeend',`&nbsp;<span class="main-title main-title-wrapper">${secondTitlePart}</span>`);
       
   for( let category of categories) {
      
        const {books,list_name} = category;
        markup+=` 
        <li class="common-item">
        <h2 class="common-title">${list_name}</h2>
        <ul class="book-list">
            ${booksRender(books,length)}
        </ul>
        <button type="button" class="showMore-btn" name="${list_name}">see more</button>
    </li>`
       
    } 

    function booksRender(books,length) {  // render books inside the category
      
          let bookMarkup = '';
         
         for(let i =0;i<length;i+=1) {
          
            const {book_image,title,author,_id} = books[i];
              bookMarkup+=`
              <li class="book-item" data-id="${_id}" tabindex="0">
              <div class="thumb" data-id="${_id}">
              <img src="${book_image || '../images/default_image.png'}" alt="${title}" class="book-img" data-id="${_id}">
              <p class="notifications" data-id="${_id}">quick view</p>
              </div> 
              <h3 class="book-title" data-id="${_id}">${title}</h3>
              <p class="book-author" data-id="${_id}">${author}</p>
              </li>
            `
         }

         return bookMarkup;

    }

     list.innerHTML=markup;

}


function showLoader() {

  const loader = document.querySelector(".loader-besteseller");
  loader.style.display="block";
}

function hideLoader() {

  const loader = document.querySelector(".loader-besteseller");
  loader.style.display="none";
}


function shuffleCategories(categories) {

    const shuffledArray = [...categories];
    
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
   
  return shuffledArray;
}