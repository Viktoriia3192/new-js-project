import axios from 'axios';
import Notiflix from 'notiflix';

import './js/header_hrebinchuk';
import './js/support_daryna';
import './js/modal_andrii';
import './js/dark_theme_max';
import './js/pagination_mariia';

// const addBoock = document.querySelector(".addNotification");
// const removeBoock = document.querySelector(".removeNotification");
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