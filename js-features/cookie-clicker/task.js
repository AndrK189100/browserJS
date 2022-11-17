
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

let flag = true;
let lastClick = 0;
let currClick = 0;;
cookie.onclick = () => {
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    currClick = Date.now();
    clickerSpeed.textContent = (1 / ((currClick - lastClick) / 1000)).toFixed(3);
    lastClick = currClick;
    if (flag) {
        cookie.width += 20;
        flag = false;
        
    }
    else {
        cookie.width -=20;
        flag = true;
        
    }

