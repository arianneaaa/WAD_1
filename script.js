Score = 0;  

const incrementBtn = document.querySelector('#increment');
const display = document.getElementById('display');

incrementBtn.addEventListener('click', () => {
    Score++;
    display.textContent = `Score: ${Score}`;
});