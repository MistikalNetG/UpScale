document.addEventListener('mousemove', (e) => {
    const background = document.querySelector('.background');
    const speed = 0.02;
    const x = (e.pageX - window.innerWidth / 2) * speed;
    const y = (e.pageY - window.innerHeight / 2) * speed;
    background.style.transform = `translateX(${x}px) translateY(${y}px)`;
});


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
