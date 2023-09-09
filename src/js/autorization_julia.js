import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, update } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Notiflix from 'notiflix';


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
const database = getDatabase(app);
const auth = getAuth(app);


const openButton = document.querySelector('[data-auth-open]');
const openButtonMobile = document.querySelector('.mobile-menu-open');
const closeButton = document.querySelector('.auth-btn-close');
const modal = document.querySelector('.auth-backdrop');
const signUpForm = document.querySelector('.auth-form');
const signUpButton = document.querySelector('.auth-button-signup');
const userNameInput = signUpForm.querySelector('input[name="user_name"]');
const userEmailInput = signUpForm.querySelector('input[name="user_email"]');
const userPasswordInput = signUpForm.querySelector('input[name="user_password"]');
const shoppingListLink = document.querySelector(".header-shopping-list");
const addBooksBtn = document.querySelector(".add-bookBtn");
const regNotification = document.querySelector(".notification-log")


  // Відкриття/закриття вікна
function openModal() {
    if(openButton.textContent === 'Log out' || openButtonMobile.textContent === 'Log out'){
      if(window.innerWidth<767){
        openButtonMobile.textContent = 'Sign up';
      }else{
        openButton.textContent = 'Sign up';}
      onClickLogOut();
      return
    }else{
    modal.style.display = 'block';
    document.querySelector('.auth').style.visibility = 'visible';
    userNameInput.value = '';
    userEmailInput.value = '';
    userPasswordInput.value = '';}
  }



  function closeModal() {
    modal.style.display = 'none';
  }



  openButton.addEventListener('click', openModal);
  openButtonMobile.addEventListener('click', openModal);
  closeButton.addEventListener('click', closeModal);

  // Реєстрація користувача при натисканні кнопки SIGN UP

  signUpButton.addEventListener('click', async event => {
    event.preventDefault();
             
// _____________SIGN IN __________________
if(openButton.textContent === 'Sign in' || openButtonMobile.textContent === 'Sign in'){
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

  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
      Notiflix.Notify.failure(errorMessage)
    
  });
}else{
// ___________________________________________ 
    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
              userName,
              userEmail,
            })
            closeModal();
            Notiflix.Notify.success('User is signed up!');
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message; 
            Notiflix.Notify.failure(errorMessage)
        });
      }

      //   const user = auth.currentUser;
      //   onAuthStateChanged(auth, (user) => {
      //     if (user) {
      //       const uid = user.uid;
      //       if(window.innerWidth<767){
      //         openButtonMobile.textContent = 'Log out';;
      //       }else{
      //         openButton.textContent = 'Log out';}
      //     } 
      //   }
      // );
      
  });
  

function onClickLogOut() {
  signOut(auth).then(() => {
    Notiflix.Notify.success('User logged out!');
    shoppingListLink.classList.add("header-shopping-list-hidden")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    Notiflix.Notify.failure(errorMessage);
  });
}



// -----------------------------
// Кнопка "SIGN IN"
const signInButton = document.querySelector('.auth-button-in');
const authSignUpButton = document.querySelector('.auth-button-up');


signInButton.addEventListener('click', function () {
  if (userNameInput) {
    userNameInput.classList.add("auth-input-hidden");
    if(window.innerWidth<767){
      openButtonMobile.textContent = 'Sign in';
    }else{
      openButton.textContent = 'Sign in';}
    signUpButton.textContent = 'Sign in'
    
  }
});

authSignUpButton.addEventListener('click', function () {
  if (userNameInput) {
    userNameInput.classList.remove("auth-input-hidden");
    if(window.innerWidth<767){
      openButtonMobile.textContent = 'Sign up';
    }else{
      openButton.textContent = 'Sign up';}
      signUpButton.textContent = 'Sign up'
  }
});



const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    if(window.innerWidth<767){
      openButtonMobile.textContent = 'Log out';
    }else{
    openButton.textContent = 'Log out';}

    shoppingListLink.classList.remove("header-shopping-list-hidden")
    addBooksBtn.removeAttribute('disabled')
    addBooksBtn.classList.add("add-bookBtn-registered")
    regNotification.classList.add("hidden") 
  } else {
    shoppingListLink.classList.add("header-shopping-list-hidden")  
    addBooksBtn.setAttribute('disabled', 'true')
    addBooksBtn.classList.remove("add-bookBtn-registered")
    regNotification.classList.remove("hidden")
  }
}
);