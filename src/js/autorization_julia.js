<<<<<<< Updated upstream
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
=======
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set, getDatabase } from "firebase/database";

>>>>>>> Stashed changes
import axios from 'axios';
import Notiflix from 'notiflix';

// Закриття вікна/відкриття вікна
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector("[data-auth-open]");
  const closeButton = document.querySelector("[data-modal-close]");
  const modal = document.querySelector(".auth-backdrop");

  function openModal() {
    modal.style.display = "block";
     document.querySelector(".auth").style.visibility = "visible";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
});


// Авторизація

<<<<<<< Updated upstream

// Отримуємо посилання на кнопку за допомогою класу js

closeButton = document.querySelector('.js_auth-button-signup');

// Додаємо обробник події для кнопки
closeButton.addEventListener('click', closeButton);

// Оголошуємо параметри конфігурації Firebase
=======
>>>>>>> Stashed changes
const firebaseConfig = {
  apiKey: "AIzaSyBbyJ1YQ4-GD4N0lhO_z3BVagmCNn0IKFk",
  authDomain: "bookshelf-ee661.firebaseapp.com",
  databaseURL: "https://bookshelf-ee661-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookshelf-ee661",
  storageBucket: "bookshelf-ee661.appspot.com",
  messagingSenderId: "956258341440",
  appId: "1:956258341440:web:ca611f9dfc8a224323c5a5",
  measurementId: "G-WDP0VVBWDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

<<<<<<< Updated upstream
// Ініціалізація Firebase з використанням конфігурації
firebase.initializeApp(firebaseConfig);
=======
// Отримуємо посилання на кнопку за допомогою класу js
const closeButtonup = document.querySelector('.js_auth-button-signup');

// Додаємо обробник події для кнопки
closeButtonup.addEventListener('click', closeButtonup);
>>>>>>> Stashed changes

document.addEventListener("DOMContentLoaded", function () {
  const refs = {
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    closeBtn: document.querySelector(".auth-btn-close"),
  };

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  // Отримання посилань на елементи форми
  const signUpForm = document.querySelector(".auth-form");
  const signUpButton = document.querySelector(".auth-button-signup");
  const userNameInput = signUpForm.querySelector('input[name="user_name"]');
  const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
  const userPasswordInput = signUpForm.querySelector('input[name="user_password"]');

  // Функція, яка викликається при натисканні кнопки SIGN UP
  signUpButton.addEventListener("click", (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;

    // Отримуємо посилання на об'єкт авторизації та бази даних
    const auth = getAuth(app);
    const database = getDatabase(app);

    // Реєстрація користувача за допомогою Firebase
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // Реєстрація успішна
        const user = userCredential.user;
        console.log("Successfully registered with UID:", user.uid);

        // Збереження інформації про користувача в базі даних Firebase
        const userId = user.uid;
        const userRef = ref(database, 'users/' + userId); // Шлях до користувача у базі даних
        const userData = {
          name: userName,
          email: userEmail,
        };

        set(userRef, userData)
          .then(() => {
            console.log('User data saved in the database.');
          })
          .catch((error) => {
            console.error('Error saving user data:', error);
          });

      })
      .catch((error) => {
        // Реєстрація не вдалася, обробка помилки
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error("Registration failed:", errorMessage);
      });
  });
});