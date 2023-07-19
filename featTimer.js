const timeLimit = 30;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

const div = document.getElementsByClassName("timer")[0];
const p = document.getElementsByTagName("p")[0];
p.innerHTML = `second <br /> <span class="spanTimer">${timeLimit}</span> <br /> remaning`;
div.appendChild(p);

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    p.innerHTML = `second <br /> <span class="spanTimer">${timeLeft}</span> <br /> remaning`;

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
function formatTime(time) {
  let seconds = time % 60;
  return `${seconds}`;
}
