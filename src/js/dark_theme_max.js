const themeSwitch = document.getElementById('switch');
const content = document.getElementById('content');

// Функция для переключения темы
function toggleTheme() {
    // Проверяем текущую тему
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';

    // Меняем тему и сохраняем в localStorage
    if (currentTheme === 'light') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
        // Переключаем тему для header
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('light', currentTheme === 'dark');
        header.classList.toggle('dark', currentTheme === 'light');
    }
}

themeSwitch.addEventListener('change', toggleTheme);

// Проверяем localStorage при загрузке страницы и устанавливаем тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    if (savedTheme === 'dark') {
        themeSwitch.checked = true; // Установка чекбокса в "включено" для тёмной темы
    }
        // Устанавливаем тему для header при загрузке страницы
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('light', savedTheme === 'light');
        header.classList.toggle('dark', savedTheme === 'dark');
    }
}