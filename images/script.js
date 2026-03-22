// Небольшой скрипт для приятной интерактивности.
// Этот файл реализует улучшения из пункта 8 (динамика).

const animateButton = (button) => {
    button.addEventListener('pointerenter', () => {
        button.style.transform = 'scale(1.03)';
    });
    button.addEventListener('pointerleave', () => {
        button.style.transform = 'scale(1)';
    });
};

const texts = {
    ru: {
        title: 'Игры',
        signup: 'Записаться',
        social: 'Наши социальные сети',
        back: 'Назад'
    },
    en: {
        title: 'Games',
        signup: 'Sign Up',
        social: 'Our Social Networks',
        back: 'Back'
    }
};

let currentLang = 'ru';

const toggleLanguage = () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    document.querySelector('.banner').textContent = texts[currentLang].title;
    document.querySelector('.signup-link').textContent = texts[currentLang].signup;
    document.querySelector('h2').textContent = texts[currentLang].social;
    document.querySelector('.back-button').textContent = texts[currentLang].back;
    document.getElementById('lang-toggle').textContent = currentLang === 'ru' ? 'EN' : 'RU';
};

window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => animateButton(btn));

    const links = document.querySelectorAll('a[href^="https://"]');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);
});
