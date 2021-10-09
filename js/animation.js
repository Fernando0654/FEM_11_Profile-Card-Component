const container = document.querySelector('body');
const card = document.querySelector('main');

container.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.clientX) / 10;
    let y = (window.innerHeight / 2 - e.clientY) / 10;
    card.style.transform = `translate(-50%, -50%) rotateY(${x}deg) rotateX(${y}deg)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transform = "translate(-50%, -50%) rotate(0deg)";
});