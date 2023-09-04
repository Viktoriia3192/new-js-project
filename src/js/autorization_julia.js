// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// import axios from 'axios';
// import Notiflix from 'notiflix';


//  // Конфігурація Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyBbyJ1YQ4-GD4N0lhO_z3BVagmCNn0IKFk",
//   authDomain: "bookshelf-ee661.firebaseapp.com",
//   databaseURL: "https://bookshelf-ee661-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "bookshelf-ee661",
//   storageBucket: "bookshelf-ee661.appspot.com",
//   messagingSenderId: "956258341440",
//   appId: "1:956258341440:web:ca611f9dfc8a224323c5a5",
//   measurementId: "G-WDP0VVBWDK"
// };

// // Ініціалізація Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase();
// const auth = getAuth();


// document.addEventListener('DOMContentLoaded', function () {
//   const openButton = document.querySelector('[data-auth-open]');
//   const closeButton = document.querySelector('.auth-btn-close');
//   const burgerButton = document.querySelector('.js-open-menu');
//   const modal = document.querySelector('.auth-backdrop');
//   const signUpForm = document.querySelector('.auth-form');
//   const signUpButton = document.querySelector('.auth-button-signup');
//   const userNameInput = signUpForm.querySelector('input[name="user_name"]');
//   const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
//   const userPasswordInput = signUpForm.querySelector('input[name="user_password"]');
  
  
  
//   // Відкриття/закриття вікна
//   function openModal() {
//     modal.style.display = 'block';
//     document.querySelector('.auth').style.visibility = 'visible';
//     userNameInput.value = '';
//     userEmailInput.value = '';
//     userPasswordInput.value = '';
//   }

//   function closeModal() {
//     modal.style.display = 'none';
//   }

//   openButton.addEventListener('click', openModal);
//   closeButton.addEventListener('click', closeModal);
//   burgerButton.addEventListener('click', openModal);
  
  

//   // Реєстрація користувача при натисканні кнопки SIGN UP
//   signUpButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     const userName = userNameInput.value;
//     const userEmail = userEmailInput.value;
//     const userPassword = userPasswordInput.value;

//     createUserWithEmailAndPassword(auth, userName, userEmail, userPassword)
//       .then((userCredential) => {
//         const user = userCredential.user;

//         // Збереження інформації про користувача в базі даних Firebase
//         const userId = user.uid;
//         const userRef = ref(database, 'users/' + userId);
//         const userData = {
//           name: userName,
//           email: userEmail,
//           password: userPassword,
//         };

//         set(userRef, userData)
//           .then(() => {
//             console.log('User data saved in the database.');
//           })
//           .catch((error) => {
//             console.error('Error saving user data:', error);
//           });

//         // Оновлення інтерфейсу з ім'ям користувача
//         updateUI(userName);

//         closeModal();
//       })
//       // .catch((error) => {
//       //    const errorMessage = error.message;
//       //   console.error('Registration failed:', errorMessage);
//       // });
//   });

//   // Оновлення інтерфейсу з іменем користувача
//   function updateUI(userName) {
//     const signUpButtonUp = document.querySelector('[data-auth-open]');
//     signUpButtonUp.textContent = `Hello, ${userName}`;
//   }
// });


// // кнопка "SIGN IN"
// // Отримуємо кнопку та інпут за допомогою їх класів
// var signInButton = document.querySelector('.auth-button-in');
// var userNameInput = document.querySelector('.auth-input');

// // Додаємо обробник події для кліку на кнопку
// signInButton.addEventListener('click', function() {
//     // Перевіряємо, чи інпут існує перед видаленням
//     if (userNameInput) {
//         // Видаляємо інпут з DOM
//         userNameInput.remove();
//     }
// });

