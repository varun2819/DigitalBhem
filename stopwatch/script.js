let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

document.getElementById('startBtn').addEventListener('click', start);
document.getElementById('stopBtn').addEventListener('click', stop);
document.getElementById('resetBtn').addEventListener('click', reset);

function start() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(getShowTime, 1000);
        document.getElementById('startBtn').disabled = true;
        document.getElementById('stopBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        running = true;
    }
}

function stop() {
    if (running) {
        clearInterval(timerInterval);
        difference = new Date().getTime() - startTime;
        document.getElementById('startBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
        running = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById('display').innerHTML = "00:00:00";
    document.getElementById('startBtn').disabled = false;
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    difference = 0;
    running = false;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('display').innerHTML = hours + ":" + minutes + ":" + seconds;
}
