const container = document.getElementById('container');
const card = document.getElementById('card');
const upperPart = document.querySelector('.upper_part');
const lowerPart = document.querySelector('.lower_part');
const lowerPartUl = document.querySelector('.lower_part ul');

// Функція для відкриття картки
function openCard() {
    card.style.width = '100%';
    card.style.height = '100%';
    card.style.opacity = '1';
    upperPart.style.transform = 'translateY(-38%)';
    upperPart.style.borderRadius = '70px';
    upperPart.style.height = '65%';
    lowerPart.style.transform = 'translateY(30%)';
    lowerPart.style.borderRadius = '30px';
    lowerPartUl.style.transform = 'translateY(0)';
    
    // Додаємо клас для відстеження стану картки
    container.classList.add('card-open');
}

// Функція для закриття картки
function closeCard() {
    card.style.width = '0%';
    card.style.height = '0%';
    card.style.opacity = '0';
    upperPart.style.transform = 'translateY(0)';
    upperPart.style.borderRadius = '60px 60px 0 0';
    upperPart.style.height = '75%';
    lowerPart.style.transform = 'translateY(0)';
    lowerPart.style.borderRadius = '0 0 60px 60px';
    lowerPartUl.style.transform = 'translateY(100%)';
    
    // Видаляємо клас для відстеження стану картки
    container.classList.remove('card-open');
}

// Визначаємо, чи є пристрій мобільним
function isMobile() {
    return window.matchMedia("(max-width: 950px)").matches;
}

// Обробник кліку на контейнер
container.addEventListener('click', (event) => {
    if (isMobile()) {
        // Якщо картка закрита, відкриваємо її
        if (!container.classList.contains('card-open')) {
            openCard();
            // Зупиняємо розповсюдження подій, щоб клік на картці не призвів до закриття
            event.stopPropagation();
        }
    }
});

// Обробник кліку на документ (для закриття картки на мобільних)
document.addEventListener('click', (event) => {
    if (isMobile() && container.classList.contains('card-open')) {
        // Перевіряємо, чи клік був не на картці
        if (!container.contains(event.target)) {
            closeCard();
        }
    }
});

// Видаляємо CSS hover ефект для мобільних і додаємо його програмно для десктопів
document.addEventListener('DOMContentLoaded', () => {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    
    // Видаляємо hover ефекти з CSS
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.selectorText && rule.selectorText.includes('#container:hover')) {
            styleSheet.deleteRule(i);
            i--; // Коригуємо індекс після видалення
        }
    }
    
    // Додаємо відстеження hover для десктопів
    container.addEventListener('mouseenter', () => {
        if (!isMobile()) {
            openCard();
        }
    });
    
    container.addEventListener('mouseleave', () => {
        if (!isMobile()) {
            closeCard();
        }
    });
});

// Обробник зміни розміру вікна
window.addEventListener('resize', () => {
    // Закриваємо картку при зміні розміру вікна
    closeCard();
});

// Додаємо обробник зміни орієнтації для мобільних
window.addEventListener('orientationchange', () => {
    // Закриваємо картку при зміні орієнтації
    closeCard();
});

// Додайте цей код в кінець вашого основного JavaScript файлу

// Функція для визначення горизонтальної орієнтації
function isLandscape() {
    return window.innerWidth > window.innerHeight;
}

// Функція для закриття картки
function closeCard() {
    card.style.width = '0%';
    card.style.height = '0%';
    card.style.opacity = '0';
    upperPart.style.transform = 'translateY(0)';
    upperPart.style.borderRadius = isLandscape() ? '60px 60px 0 0' : '60px 60px 0 0';
    upperPart.style.height = '75%';
    lowerPart.style.transform = 'translateY(0)';
    lowerPart.style.borderRadius = isLandscape() ? '0 0 60px 60px' : '0 0 60px 60px';
    lowerPartUl.style.transform = 'translateY(100%)';
    
    // Видаляємо клас для відстеження стану картки
    container.classList.remove('card-open');
}

// Обробник зміни орієнтації
window.addEventListener('orientationchange', function() {
    // Закриваємо картку при зміні орієнтації
    closeCard();
});

// Обробник для закриття картки при кліку поза нею (для мобільних)
document.addEventListener('click', function(event) {
    const isMobileOrLandscape = window.matchMedia("(max-width: 950px)").matches || isLandscape();
    
    if (isMobileOrLandscape && container.classList.contains('card-open')) {
        if (!container.contains(event.target)) {
            closeCard();
        }
    }
});