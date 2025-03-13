const container = document.getElementById('container');
const card = document.getElementById('card');
const upperPart = document.querySelector('.upper_part');
const lowerPart = document.querySelector('.lower_part');
const lowerPartUl = document.querySelector('.lower_part ul');

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
    
    container.classList.add('card-open');
}

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
    
    container.classList.remove('card-open');
}

function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

container.addEventListener('click', (event) => {
    if (isMobile()) {
        if (!container.classList.contains('card-open')) {
            openCard();
            event.stopPropagation();
        }
    }
});

document.addEventListener('click', (event) => {
    if (isMobile() && container.classList.contains('card-open')) {
        if (!container.contains(event.target)) {
            closeCard();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const styleSheet = document.styleSheets[document.styleSheets.length - 1];
    
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.selectorText && rule.selectorText.includes('#container:hover')) {
            styleSheet.deleteRule(i);
            i--;
        }
    }
    
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

window.addEventListener('resize', () => {
    closeCard();
});