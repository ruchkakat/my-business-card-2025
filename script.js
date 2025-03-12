const container = document.getElementById('container');
    const card = document.getElementById('card');
    const upperPart = document.querySelector('.upper_part');
    const lowerPart = document.querySelector('.lower_part');
    const lowerPartUl = document.querySelector('.lower_part ul');

    container.addEventListener('click', () => {
        card.style.width = '100%';
        card.style.height = '100%';
        card.style.opacity = '1';
        upperPart.style.transform = 'translateY(-38%)';
        upperPart.style.borderRadius = '70px';
        upperPart.style.height = '65%';
        lowerPart.style.transform = 'translateY(30%)';
        lowerPart.style.borderRadius = '30px';
        lowerPartUl.style.transform = 'translateY(0)';
    });