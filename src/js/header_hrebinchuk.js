const showModalBtn = document.getElementById('showModalBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');

showModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  showModalBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

const lastModalOpenTime = localStorage.getItem('lastModalOpenTime');
if (
  !lastModalOpenTime ||
  Date.now() - parseInt(lastModalOpenTime) > 24 * 60 * 60 * 1000
) {
  showModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    showModalBtn.style.display = 'none';
    localStorage.setItem('lastModalOpenTime', Date.now().toString());
  });
}

if (!localStorage.getItem('modalOpened')) {
  showModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    showModalBtn.style.display = 'none';
    localStorage.setItem('modalOpened', 'true');
  });
}

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  showModalBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});

window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
    showModalBtn.style.display = 'block';
    closeBtn.style.display = 'none';
  }
});
