const savedTheme = localStorage.getItem('theme');

const themeSliderEl = document.getElementById('slider');

// Функция для установки темы
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'light') {
    themeSliderEl.checked = false;
  } else {
    themeSliderEl.checked = true;
  }
}


if (savedTheme) {
  setTheme(savedTheme);
} else {
  
  setTheme('light'); 
}

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