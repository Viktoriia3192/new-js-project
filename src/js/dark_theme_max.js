
localStorage.setItem('theme', 'light');


const themeSliderEl = document.getElementById('slider');

themeSliderEl.addEventListener('change', toggleTheme);

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); 
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); 
  }
}

const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'light') {
    themeSliderEl.checked = false;
  } else themeSliderEl.checked = true;
}