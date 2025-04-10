function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

function wiggle(element) {
    element.style.animation = 'wiggle 0.5s ease';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

function bubblePop(element) {
    element.style.transform = 'scale(1.5)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 300);
}

function submitForm(event) {
    event.preventDefault();
    alert('Thanks for reaching out! We’ll get back to you soon.');
    document.getElementById('contact-form').reset();
}

const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(-5deg); }
        75% { transform: rotate(5deg); }
        100% { transform: rotate(0deg); }
    }
`;
document.head.appendChild(styleSheet);