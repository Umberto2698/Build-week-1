let sumCorrectAnswer = 4;
let questions = 10;
const correct = document.getElementById("correctAnswer");
const correctH4 = document.createElement("h4");
const correctH5 = document.createElement("h5");

function corrPercentage() {
  correctH4.innerText = `${(sumCorrectAnswer * 100) / 10}%`;
  correctH5.innerText = `${sumCorrectAnswer} / ${questions} questions`;
}
corrPercentage();

correct.appendChild(correctH4);
correct.appendChild(correctH5);

let sumIncorrectAnswer = 4;
const incorrect = document.getElementById("incorrectAnswer");
const incorrectH4 = document.createElement("h4");
const incorrectH5 = document.createElement("h5");

function incorrPercentage() {
  incorrectH4.innerText = `${(sumIncorrectAnswer * 100) / 10}%`;
  incorrectH5.innerText = `${sumIncorrectAnswer} / ${questions} questions`;
}
incorrPercentage();

incorrect.appendChild(incorrectH4);
incorrect.appendChild(incorrectH5);

const chartDiv = document.getElementById("chart");
const pText = document.createElement("p");
const secondP = document.createElement("p");

function chartText() {
  if (sumCorrectAnswer >= 5) {
    pText.innerHTML = `Congratulations! <br /><span>You passed the exam.</span>`;
    secondP.innerHTML = `We'll send you the certificate <br />
in few minutes. <br />
Check your email (including <br />
promotions / spam folder)`;
    chartDiv.appendChild(pText);
    chartDiv.appendChild(secondP);
  } else {
    pText.innerHTML = `Sorry! <br /><span>You failed the exam.</span>`;
    secondP.innerHTML = `This time it went wrong. <br />
  We will notify you <br />
  when you can try again`;
    chartDiv.appendChild(pText);
    chartDiv.appendChild(secondP);
  }
}

chartText();
