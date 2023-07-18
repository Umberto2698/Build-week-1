const timeLimit = 30;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = timeLimit - timePassed;
    document.getElementsByClassName("spanTimer")[0].innerHTML = formatTime(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}
function formatTime(time) {
  let seconds = time % 60;
  return `${seconds}`;
}
