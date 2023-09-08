import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import axios from 'axios';
import Notiflix from 'notiflix';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { getDatabase } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, set, update } from "firebase/database";

// // Конфігурація Firebase
// // const firebaseConfig = {
// //   apiKey: 'AIzaSyAt0t0gqY2cwwnnmHCmmlq6c2d_Q7sG2wI',
// //   authDomain: 'boocks-f43bd.firebaseapp.com',
// //   projectId: 'boocks-f43bd',
// //   storageBucket: 'boocks-f43bd.appspot.com',
// //   messagingSenderId: '679284035166',
// //   appId: '1:679284035166:web:7c3e330ead5760e6196ecf',
// //   measurementId: 'G-MRP841QGMJ',
// // };

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAt0t0gqY2cwwnnmHCmmlq6c2d_Q7sG2wI",
// //   authDomain: "boocks-f43bd.firebaseapp.com",
// //   projectId: "boocks-f43bd",
// //   storageBucket: "boocks-f43bd.appspot.com",
// //   messagingSenderId: "679284035166",
// //   appId: "1:679284035166:web:7c3e330ead5760e6196ecf",
// //   measurementId: "G-MRP841QGMJ"
// // };

// // The right config
const firebaseConfig = {
  apiKey: "AIzaSyDYvmClYDnczss8bLGIfXbzybVXNclm_eo",
  authDomain: "books-bf04b.firebaseapp.com",
  projectId: "books-bf04b",
  storageBucket: "books-bf04b.appspot.com",
  messagingSenderId: "89062929009",
  appId: "1:89062929009:web:8cb92664b2e27c70a321d0",
  measurementId: "G-9SSZKB8KZ1"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

document.addEventListener('DOMContentLoaded', function () {
  const openButton = document.querySelector('[data-auth-open]');
  const closeButton = document.querySelector('.auth-btn-close');
  const modal = document.querySelector('.auth-backdrop');
  const signUpForm = document.querySelector('.auth-form');
  const signUpButton = document.querySelector('.auth-button-signup');
  const userNameInput = signUpForm.querySelector('input[name="user_name"]');
  const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
  const userPasswordInput = signUpForm.querySelector(
    'input[name="user_password"]'
  );

const changeLogOutBtn = document.querySelector(".menu-btn-start-tab")
const shoppingListLink = document.querySelector(".header-shopping-list")

  // Відкриття/закриття вікна
  function openModal() {
    modal.style.display = 'block';
    document.querySelector('.auth').style.visibility = 'visible';
    userNameInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  openButton.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);

  // Реєстрація користувача при натисканні кнопки SIGN UP

  signUpButton.addEventListener('click', async event => {
    event.preventDefault();
             
// _____________SIGN IN __________________
if(changeLogOutBtn.textContent === 'Sign in'){
  const signUpForm = document.querySelector('.auth-form');


  const email = userEmailInput.value;
  const password = userPasswordInput.value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
      last_login: dt,
      })
      closeModal();
      Notiflix.Notify.success('User is signed in!')
      // shoppingListLink.classList.remove("header-shopping-list-hidden")
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    
  });
}else{
// ___________________________________________

    console.log(changeLogOutBtn.textContent)  
    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;

    // const userData = {
    //   userName: userName,
    //   userEmail: userEmail,
    //   userPassword: userPassword,
    // };

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Before")
            set(ref(database, 'users/' + user.uid), {
              userName,
              userEmail,
            })
            console.log("After")
            closeModal();
            Notiflix.Notify.success('User is signed up!');
            // shoppingListLink.classList.remove("header-shopping-list-hidden")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
            Notiflix.Notify.failure(errorMessage)
        });
      }

        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            changeLogOutBtn.textContent = 'Log out';
            // updateUI(userName)
          } else {
          }
        }
      );
      

  //   async function addUserToFirebase(userData) {
  //     const usersCol = collection(db, 'user_data');

  //     try {
  //       await addDoc(usersCol, userData);
  //       console.log('Дані користувача успішно додано в базу даних');
  //       updateUI(userData.userName, userData.userEmail, userData.userPassword);
  //       closeModal();
  //     } catch (error) {
  //       console.error('Помилка при додаванні даних користувача:', error);
  //       Notiflix.Notify.Failure('Помилка при реєстрації');
  //     }
  //   }
  //   await addUserToFirebase(userData, analytics);
  });
  
  function updateUI(userName) {
    const signUpButtonUp = document.querySelector('[data-auth-open]');
    signUpButtonUp.textContent = `Hello, ${userName}`;
  }
});





// -----------------------------


// Кнопка "SIGN IN"
var signInButton = document.querySelector('.auth-button-in');
const authSignUpButton = document.querySelector('.auth-button-up');
var userNameInput = document.querySelector('.auth-input');
const changeLogOutBtn = document.querySelector(".menu-btn-start-tab");
const signUpButton = document.querySelector('.auth-button-signup');


signInButton.addEventListener('click', function () {
  if (userNameInput) {
    userNameInput.classList.add("auth-input-hidden");
    changeLogOutBtn.textContent = 'Sign in'
    signUpButton.textContent = 'Sign in'
  }
});

authSignUpButton.addEventListener('click', function () {
  if (userNameInput) {
    userNameInput.classList.remove("auth-input-hidden");
    changeLogOutBtn.textContent = 'Sign up'
    signUpButton.textContent = 'Sign up'
  }
});
