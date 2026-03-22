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

    const safeSetText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) {
            el.textContent = text;
        }
    };

    safeSetText('.banner', texts[currentLang].title);
    safeSetText('.signup-link', texts[currentLang].signup);
    safeSetText('h2', texts[currentLang].social);
    safeSetText('.back-button', texts[currentLang].back);

    const button = document.getElementById('lang-toggle');
    if (button) {
        const buttonText = currentLang === 'ru' ? 'EN' : 'RU';
        button.textContent = buttonText;
    }
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
