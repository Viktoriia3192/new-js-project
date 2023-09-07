const showModalBtn = document.getElementById('showModalBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

showModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  showModalBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  showModalBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    showModalBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
});

// /////////////////////

const currentURL = window.location.href;

const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');

if (currentURL.includes('index.html')) {
  link1.classList.add('page1');
} else if (currentURL.includes('shopping_list_olexandr.html')) {
  link2.classList.add('page2');
}
