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

window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(btn => animateButton(btn));

    const links = document.querySelectorAll('a[href^="https://"]');
    links.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});
