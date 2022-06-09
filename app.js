const result = document.getElementById('result');
const timeLeft = document.getElementById('time');
const holes = document.querySelectorAll('.square');
const button = document.getElementById('button');

let resultS = 0;
let time = 60;
result.innerHTML = resultS;
timeLeft.innerHTML = time;
const Interval = 400;

function spawnMole(){
    holes.forEach(hole => {
        hole.setAttribute('src','res/images/Whac-a-Mole-In.png')
        hole.removeEventListener('click',score);
    });
    if(time == 0){
        return;
    } else {
        let randomHole = holes[Math.floor(Math.random() * 9)];
        randomHole.setAttribute('src','res/images/Whac-a-Mole-Out.png');
        randomHole.addEventListener('click',score);
    }
}
function moveMole(){
    let timerId = null;
    timerId = setInterval(spawnMole,Interval);
}
function score(){
    resultS += 1;
    result.innerHTML = resultS;
}
function timer(){
    if(time != 0) {
        time -= 1;
        timeLeft.innerHTML = time;
        setTimeout(timer,1000);
    } 
}
function startGame(){
    const start = document.createElement('button');
    start.setAttribute('id','start');
    start.innerHTML = 'START';
    start.addEventListener('click', () => {
        isOver = false;
        resultS = 0;
        time = 60;
        timer();
        moveMole();
        button.removeChild(start);
    });
    button.appendChild(start);
}
startGame();



