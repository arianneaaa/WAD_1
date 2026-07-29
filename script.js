Score = 0;  

const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
const display = document.getElementById('display');

incrementBtn.addEventListener('click', () => {
    Score++;
    display.textContent = `Score: ${Score}`;
});

decrementBtn.addEventListener('click', () => {
    Score--;
    display.textContent = `Score: ${Score}`;
});

resetBtn.addEventListener('click', () => {
    Score=0;
    display.textContent = `Score: ${Score}`;
});