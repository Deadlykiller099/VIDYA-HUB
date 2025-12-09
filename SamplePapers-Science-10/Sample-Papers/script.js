// 3 hours in seconds
let totalTime = 3 * 60 * 60;

const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');

function updateClock() {
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = totalTime % 60;
    
    hoursBox.textContent = hours.toString().padStart(2, '0');
    minutesBox.textContent = minutes.toString().padStart(2, '0');
    secondsBox.textContent = seconds.toString().padStart(2, '0');
    
    if (totalTime <= 0) {
        clearInterval(timerInterval);
        alert("Time's up! Submit your paper.");
    }
    
    totalTime--;
}

let timerInterval = setInterval(updateClock, 1000);
updateClock();