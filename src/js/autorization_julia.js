import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
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




// Отримуємо посилання на кнопку за допомогою класу js

closeButton = document.querySelector('.js');

// Додаємо обробник події для кнопки
closeButton.addEventListener('click', closeWindow);

// Оголошуємо параметри конфігурації Firebase
const firebaseConfig = {
  databaseURL: "https://bookshelf-ee661-default-rtdb.europe-west1.firebasedatabase.app/"
};


// Ініціалізація Firebase з використанням конфігурації
firebase.initializeApp(firebaseConfig);

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

    // Реєстрація користувача за допомогою Firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(userEmail, userPassword)
      .then((userCredential) => {
        // Реєстрація успішна
        const user = userCredential.user;
        console.log("Successfully registered with UID:", user.uid);

        // Збереження інформації про користувача в базі даних Firebase
        const userId = user.uid;
        const userRef = firebase.database().ref('users/' + userId); // Шлях до користувача у базі даних
        userRef.set({
          name: userName,
          email: userEmail,
        }).then(() => {
          console.log('User data saved in the database.');
        }).catch((error) => {
          console.error('Error saving user data:', error);
        });

      })
      .catch((error) => {
        // Реєстрація не вдалася, обробка помилки
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration failed:", errorMessage);
      });
  });
});