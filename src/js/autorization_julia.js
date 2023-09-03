import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import axios from 'axios';
import Notiflix from 'notiflix';


 // Отримуємо посилання на об'єкт авторизації та бази даних
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

// Закриття вікна/відкриття вікна
document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.querySelector('[data-auth-open]');
  const closeButton = document.querySelector('.auth-btn-close');
  const modal = document.querySelector('.auth-backdrop');
  const signUpForm = document.querySelector('.auth-form');
  const signUpButton = document.querySelector('.auth-button-signup');
  const ButtonUp = document.querySelector('.auth-button-up');
  const userNameInput = signUpForm.querySelector('input[name="user_name"]');
  const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
  const userPasswordInput = signUpForm.querySelector('input[name="user_password"]');
  const signInButton = document.querySelector('.auth-button-in');


  // Відкриття/закриття вікна
  function openModal() {
    modal.style.display = 'block';
    document.querySelector('.auth').style.visibility = 'visible';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);
   signInButton.addEventListener('click', signInButton);

  // Функція, яка викликається при натисканні кнопки SIGN UP 
    signUpButton.addEventListener('click', (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;

   
    // Реєстрація користувача за допомогою Firebase
   createUserWithEmailAndPassword(auth,userName, userEmail, userPassword)
      .then((userCredential) => {
        // Реєстрація успішна
        const user = userCredential.user;
        Notiflix.Notify.Success('Successfully registered with UID: ' + user.uid); 

        // Оновлюємо інтерфейс з ім'ям користувача
        updateUI(userName);

        // Збереження інформації про користувача в базі даних Firebase
        const userId = user.uid;
        const userRef = ref(database, 'users/' + userId); // Шлях до користувача у базі даних
        const userData = {
          name: userName,
          email: userEmail,
          password: userPassword,
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
        console.error('Registration failed:', errorMessage);
      });
  });

  // Оновлення інтерфейсу з іменем користувача
  function updateUI(userName) {
    // Знайдіть третю кнопку з ім'ям "Sign up" та оновіть її текст
    const signUpButtonUp = document.querySelector('[data-auth-open]');
    signUpButtonUp.textContent = `Sign up\Hello, ${userName}`;
  }
});
