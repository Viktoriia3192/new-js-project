import {save,load} from './localStorageService';
import {fetchBooksData} from './best_sellers_api';

const list = document.querySelector(".common-list");
let length = window.innerWidth < 767 ? 1 : window.innerWidth < 1439 ? 3 : 5;

window.addEventListener("resize", checkResize);


fetchBooksData()
.then(data => {
   
  save("data",data);
  renderMarkup(data);

})
.catch(error => console.log(error));

function checkResize() {  // Check wether we should render markup or not.
         
   let currentLength = window.innerWidth < 767 ? 1 : window.innerWidth < 1439 ? 3 : 5; 
 
   if (currentLength!=length) {
 
    length = currentLength;

     const data = load("data");

    renderMarkup(data);
   }

}

function renderMarkup(categories) {  //render categories

     let markup = '';
       
   for( let category of categories) {
      
        const {books,list_name} = category;
        markup+=` 
        <li class="common-item">
        <h2 class="common-title">${list_name}</h2>
        <ul class="book-list">
            ${booksRender(books,length)}
        </ul>
        <button type="button" class="showMore-btn" name=${list_name}>see more</button>
    </li>`
       
    } 

    function booksRender(books,length) {  // render books inside the category
      
          let bookMarkup = '';
         
         for(let i =0;i<length;i+=1) {
            const {book_image,title,author,_id} = books[i];
              bookMarkup+=`
              <li class="book-item" data-id="${_id}">
              <a href="#" class="book-link">
              <img src="${book_image || '../images/default_image.jpg'}" alt="${title}" class="book-img" data-id="${_id}"> 
              <h3 class="book-title">${title}</h3>
              <p class="book-author">${author}</p>
              </a>
              </li>
            `
         }

         return bookMarkup;

    }

     list.innerHTML=markup;

}