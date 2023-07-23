let questions = [];
let timePassed = 0;
let timeGradient = 0;

const easy = document.getElementById("easy");
const medium = document.getElementById("medium");
const hard = document.getElementById("hard");
const chekbox = document.getElementById("square");

function goToQuizPage(submitEvent) {
  if (chekbox.checked === true) {
    if (easy.checked === true) {
      for (let i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].difficulty === "easy") {
          questions.push(allQuestions[i]);
        }
      }
    } else if (medium.checked === true) {
      for (let i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].difficulty === "medium") {
          questions.push(allQuestions[i]);
        }
      }
    } else if (hard.checked === true) {
      for (let i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i].difficulty === "hard") {
          questions.push(allQuestions[i]);
        }
      }
    }
    firstQuestion();
  }
}

const body = document.getElementsByTagName("body")[0];
const header = document.createElement("header");
const main = document.createElement("main");
const question = document.createElement("div");
question.classList.add("normal");
const br = document.createElement("br");
const footer = document.createElement("footer");
const numberQuestion = document.createElement("p");
numberQuestion.classList.add("footerParagraph");

const correctH4 = document.createElement("h4");
const correctH5 = document.createElement("h5");

const incorrectH4 = document.createElement("h4");
const incorrectH5 = document.createElement("h5");

const pText = document.createElement("p");
const secondP = document.createElement("p");

function corrPercentage(correctAnswer) {
  correctH4.innerText = `${(correctAnswer * 100) / 10}%`;
  correctH5.innerText = `${correctAnswer} / ${10} questions`;
}

function incorrPercentage(correctAnswer, incorrectAnswer) {
  incorrectH4.innerText = `${100 - (correctAnswer * 100) / 10}%`;
  incorrectH5.innerText = `${incorrectAnswer} / ${10} questions`;
}

function chartText(correctAnswer) {
  if (correctAnswer >= 5) {
    pText.innerHTML = `Congratulations! <br /><span>You passed the exam.</span>`;
    secondP.innerHTML = `We'll send you the certificate <br />
    in few minutes. <br />
    Check your email (including <br />
    promotions / spam folder)`;
  } else {
    pText.innerHTML = `Sorry! <br /><span>You failed the exam.</span>`;
    secondP.innerHTML = `This time it went wrong. <br />
    We will notify you <br />
    when you can try again`;
  }
}

//Funzionalità del timer dinamico
function startTimer(timeLimit, timePassed) {
  let timeLeft = timeLimit;
  timerInterval = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      displayAnswer();
    } else {
      timePassed = timePassed += 1;
      timeLeft = timeLimit - timePassed;
      timeGradient = (timeLeft * 360) / timeLimit;
      header.innerHTML = "";
      header.innerHTML = `<img id="benchmarkLogo" src="assets/epicode_logo.png" alt="Logo epicode" />
      <div id="timerContainer" style="background : conic-gradient(#00ffff ${timeGradient}deg, #98699c ${timeGradient}deg);">
      <div class="timer">
      <p id="timerStamp">
      second <br />
      <span class="spanTimer">${timeLeft}</span>
      <br />
      remaning
      </p>
      </div>
      </div>`;
    }
  }, 1000);
}

function formatTime(time) {
  let seconds = time % 60;
  return `${seconds}`;
}

//Funzionalità randomiche del quiz
let indexRandomQuestions = [];
let randomQuestions = () => {
  for (let i = 0; i < 10; i++) {
    let indice = parseInt(Math.floor(Math.random() * 30));
    if (indexRandomQuestions.some((n) => n === indice)) {
      i--;
      continue;
    } else {
      indexRandomQuestions.push(indice);
      return indice;
    }
  }
};

let indiciIncorrectAnswers = [];
let randomIndex = () => {
  for (let i = 0; i < 3; i++) {
    let indice = parseInt(Math.floor(Math.random() * 3));
    if (indiciIncorrectAnswers.some((n) => n === indice)) {
      i--;
      continue;
    } else {
      indiciIncorrectAnswers.push(indice);
      return indice;
    }
  }
};

let indici = [];
let randomPosition = () => {
  for (let i = 0; i < 4; i++) {
    let posizione = parseInt(Math.floor(Math.random() * 4));
    if (indici.some((n) => n === posizione)) {
      i--;
      continue;
    } else {
      indici.push(posizione);
      return posizione;
    }
  }
};
let randomPositionTrueFalse = () => {
  for (let i = 0; i < 2; i++) {
    let posizione = parseInt(Math.floor(Math.random() * 2));
    if (indici.some((n) => n === posizione)) {
      i--;
      continue;
    } else {
      indici.push(posizione);
      return posizione;
    }
  }
};

let questionNumber = 0;

let buttons = [];
let buttonsMultiple = [];
let buttonsBoolean = [];
let lastClickedText = [];
let verify = [];
let correctQuestionsAnswer = [];

const displayAnswer = () => {
  let timeLimit = 0;
  if (easy.checked === true) {
    timeLimit = 30;
  } else if (medium.checked === true) {
    timeLimit = 40;
  } else if (hard.checked === true) {
    timeLimit = 60;
  }
  let timeLeft = timeLimit;
  clearInterval(timerInterval);
  main.innerHTML = "";
  question.innerHTML = "";
  footer.innerHTML = "";
  const next = document.createElement("button");
  next.id = "rateUs";
  next.innerText = "Next question";
  next.style.cursor = "pointer";
  footer.appendChild(next);
  numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
  footer.appendChild(numberQuestion);
  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.innerText = `${questions[indexRandomQuestions[questionNumber]].question}`;
  const form = document.createElement("form");
  form.id = "formAnswer";
  if (lastClickedText[questionNumber] === undefined) {
    lastClickedText.push("");
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].type = "button";
    if (i === 2) {
      form.appendChild(br);
    }
    if (
      buttons[i].innerText === lastClickedText[questionNumber] &&
      buttons[i].innerText === questions[indexRandomQuestions[questionNumber]].correct_answer
    ) {
      buttons[i].id = "selectedButtonCorrect";
    } else if (
      (buttons[i].innerText === lastClickedText[questionNumber] &&
        buttons[i].innerText === questions[indexRandomQuestions[questionNumber]].incorrect_answers[0]) ||
      (buttons[i].innerText === lastClickedText[questionNumber] &&
        buttons[i].innerText === questions[indexRandomQuestions[questionNumber]].incorrect_answers[1]) ||
      (buttons[i].innerText === lastClickedText[questionNumber] &&
        buttons[i].innerText === questions[indexRandomQuestions[questionNumber]].incorrect_answers[2])
    ) {
      buttons[i].id = "selectedButtonIncorrect";
    } else if (buttons[i].innerText === questions[indexRandomQuestions[questionNumber]].correct_answer) {
      buttons[i].id = "correctButton";
    } else {
      buttons[i].id = "incorrectButton";
    }
    form.appendChild(buttons[i]);
  }
  question.appendChild(h1);
  question.appendChild(form);
  main.appendChild(question);
  body.appendChild(main);
  body.appendChild(footer);
  indici = [];
  indiciIncorrectAnswers = [];
  buttons = [];
  const nextQuestion = setTimeout(function () {
    questionNumber++;
    if (questionNumber === 10) {
      clearInterval(setInterval);
      let correctAnswer = 0;
      for (let i = 0; i < 10; i++) {
        correctQuestionsAnswer.push(questions[indexRandomQuestions[i]].correct_answer);
        if (correctQuestionsAnswer[i] === lastClickedText[i]) {
          correctAnswer += 1;
          verify.push(true);
        } else {
          verify.push(false);
        }
      }
      let incorrectAnswer = 10 - correctAnswer;
      let correctGradient = 360 - (correctAnswer * 360) / 10;
      corrPercentage(correctAnswer);
      incorrPercentage(correctAnswer, incorrectAnswer);
      chartText(correctAnswer);
      body.innerHTML = `<div id="logoContainer"><img src="./assets/epicode_logo.png" alt="Logo EPICODE" class="logo" /></div>
        <main>
        <h1>Results</h1>
        <h2>The summary of your answers:</h2>
        <div id="correctAnswer">
        <h3>Correct</h3>
        <h4>${correctH4.innerText}</h4>
        <h5>${correctH5.innerText}</h5>
        </div>
        <div style="background-image: conic-gradient(#c2128d ${correctGradient}deg, #00ffff ${correctGradient}deg); box-shadow: 0px 0px 20px 10px #090D2C;">
        <div id="chart">
        <p>${pText.innerHTML}</p>
        <p>${secondP.innerHTML}</p>
        </div>
        </div>
        <div id="incorrectAnswer">
        <h3>Wrong</h3>
        <h4>${incorrectH4.innerText}</h4>
        <h5>${incorrectH5.innerText}</h5>
        </div>
        <footer>
        <button id="rateUs" onclick="firstQuestion()">TRY AGAIN</button>
        <a href="feedback-page.html"><button id="rateUs">RATE US</button></a>
        <button id="rateUs" onclick="quizResult()">RESULTS</button>
        </footer>
        </main>
        <script src="./BenchmarkPage.js"></script>`;
    } else {
      header.innerHTML = "";
      header.innerHTML = `<img id="benchmarkLogo" src="assets/epicode_logo.png" alt="Logo epicode" />
      <div id="timerContainer" style="background : conic-gradient(#00ffff ${360}deg, #98699c ${360}deg);">
      <div class="timer">
      <p id="timerStamp">
      second <br />
      <span class="spanTimer">${timeLeft}</span>
      <br />
      remaning
      </p>
      </div>
      </div>`;
      startTimer(timeLimit, timePassed);
      let position = randomQuestions();
      if (questions[position].type === "boolean") {
        main.innerHTML = "";
        question.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.classList.add("title");
        h1.innerText = `${questions[position].question}`;
        const form = document.createElement("form");
        form.id = "formAnswer";
        form.addEventListener("click", (clicco) => {
          clicco.preventDefault();
          for (let i = 0; i < clicco.currentTarget.childNodes.length; i++) {
            if (clicco.currentTarget.childNodes[i].type !== undefined) {
              clicco.currentTarget.childNodes[i].id = "answerButton";
            }
          }
          if (clicco.target.tagName === "BUTTON") {
            clicco.target.id = "selectedButton";
            let last = clicco.target.innerText;
            lastClickedText.splice(questionNumber, 1, last);
          } else if (clicco.target.tagName === "FORM") {
            lastClickedText.splice(questionNumber, 1, "");
          }
        });
        let index = 0;
        for (let i = 0; i < 2; i++) {
          const button = document.createElement("button");
          button.id = "answerButton";
          button.style.type = "submit";
          button.style.cursor = "pointer";
          buttons.push(button);
          randomPositionTrueFalse();
        }
        buttons[indici[0]].innerText = `${questions[position].incorrect_answers[index]}`;
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].innerText === "") {
            buttons[i].innerText = `${questions[position].correct_answer}`;
          }
        }
        for (let i = 0; i < 2; i++) {
          buttonsBoolean.push(buttons[i]);
        }
        form.appendChild(buttons[0]);
        form.appendChild(buttons[1]);
        question.appendChild(h1);
        question.appendChild(form);
        main.appendChild(question);
        const next = document.createElement("button");
        next.id = "rateUs";
        next.innerText = "Next question";
        next.style.cursor = "pointer";
        next.onclick = displayAnswer;
        footer.innerHTML = "";
        footer.appendChild(next);
        numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
        footer.appendChild(numberQuestion);
        body.appendChild(footer);
      } else {
        main.innerHTML = "";
        question.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.classList.add("title");
        h1.innerText = `${questions[position].question}`;
        const form = document.createElement("form");
        form.id = "formAnswer";
        form.addEventListener("click", (clicco) => {
          clicco.preventDefault();
          for (let i = 0; i < clicco.currentTarget.childNodes.length; i++) {
            if (clicco.currentTarget.childNodes[i].type !== undefined) {
              clicco.currentTarget.childNodes[i].id = "answerButton";
            }
          }
          if (clicco.target.tagName === "BUTTON") {
            clicco.target.id = "selectedButton";
            let last = clicco.target.innerText;
            lastClickedText.splice(questionNumber, 1, last);
          } else if (clicco.target.tagName === "FORM") {
            lastClickedText.splice(questionNumber, 1, "");
          }
        });
        for (let i = 0; i < 4; i++) {
          const button = document.createElement("button");
          button.id = "answerButton";
          button.style.type = "submit";
          button.style.cursor = "pointer";
          buttons.push(button);
          randomPosition();
        }
        for (let i = 0; i < 3; i++) {
          let index = randomIndex();
          buttons[indici[i]].innerText = `${questions[position].incorrect_answers[index]}`;
        }
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].innerText === "") {
            buttons[i].innerText = `${questions[position].correct_answer}`;
          }
        }
        for (let i = 0; i < 4; i++) {
          buttonsMultiple.push(buttons[i]);
        }
        form.appendChild(buttons[0]);
        form.appendChild(buttons[1]);
        form.appendChild(br);
        form.appendChild(buttons[2]);
        form.appendChild(buttons[3]);
        question.appendChild(h1);
        question.appendChild(form);
        main.appendChild(question);
        const next = document.createElement("button");
        next.id = "rateUs";
        next.innerText = "Next question";
        next.style.cursor = "pointer";
        next.onclick = displayAnswer;
        footer.innerHTML = "";
        footer.appendChild(next);
        numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
        footer.appendChild(numberQuestion);
        body.appendChild(footer);
      }
    }
  }, 1000);
};

const firstQuestion = () => {
  lastClickedText = [];
  correctQuestionsAnswer = [];
  verify = [];
  indexRandomQuestions = [];
  indici = [];
  indiciIncorrectAnswers = [];
  buttons = [];
  questionNumber = 0;
  let position = randomQuestions();
  let timeLimit = 0;
  if (easy.checked === true) {
    timeLimit = 30;
    let timeLeft = timeLimit;
  } else if (medium.checked === true) {
    timeLimit = 40;
    let timeLeft = timeLimit;
  } else if (hard.checked === true) {
    timeLimit = 60;
    let timeLeft = timeLimit;
  }
  body.innerHTML = "";
  header.innerHTML = `<img id="benchmarkLogo" src="assets/epicode_logo.png" alt="Logo epicode" />
  <div id="timerContainer" style="background : conic-gradient(#00ffff ${360}deg, #98699c ${360}deg);">
    <div class="timer">
      <p id="timerStamp">
        second <br />
        <span class="spanTimer">${timeLimit}</span>
        <br />
        remaning
      </p>
    </div>
  </div>`;
  startTimer(timeLimit, timePassed);
  if (questions[position].type === "multiple") {
    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = `${questions[position].question}`;
    const form = document.createElement("form");
    form.id = "formAnswer";
    form.addEventListener("click", (clicco) => {
      clicco.preventDefault();
      for (let i = 0; i < clicco.currentTarget.childNodes.length; i++) {
        if (clicco.currentTarget.childNodes[i].type !== undefined) {
          clicco.currentTarget.childNodes[i].id = "answerButton";
        }
      }
      if (clicco.target.tagName === "BUTTON") {
        clicco.target.id = "selectedButton";
        let last = clicco.target.innerText;
        lastClickedText.splice(questionNumber, 1, last);
      } else if (clicco.target.tagName === "FORM") {
        lastClickedText.splice(questionNumber, 1, "");
      }
    });
    for (let i = 0; i < 4; i++) {
      const button = document.createElement("button");
      button.id = "answerButton";
      button.style.type = "submit";
      button.style.cursor = "pointer";
      buttons.push(button);
      randomPosition();
    }
    for (let i = 0; i < 3; i++) {
      let index = randomIndex();
      buttons[indici[i]].innerText = `${questions[position].incorrect_answers[index]}`;
    }
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "") {
        buttons[i].innerText = `${questions[position].correct_answer}`;
      }
    }
    for (let i = 0; i < 4; i++) {
      buttonsMultiple.push(buttons[i]);
    }
    form.appendChild(buttons[0]);
    form.appendChild(buttons[1]);
    form.appendChild(br);
    form.appendChild(buttons[2]);
    form.appendChild(buttons[3]);
    question.innerHTML = "";
    question.appendChild(h1);
    question.appendChild(form);
    main.appendChild(question);
    const next = document.createElement("button");
    next.id = "rateUs";
    next.innerText = "Next question";
    next.style.cursor = "pointer";
    next.onclick = displayAnswer;
    footer.innerHTML = "";
    footer.appendChild(next);
    numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
    footer.appendChild(numberQuestion);
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
  } else {
    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = `${questions[position].question}`;
    const form = document.createElement("form");
    form.id = "formAnswer";
    form.addEventListener("click", (clicco) => {
      clicco.preventDefault();
      for (let i = 0; i < clicco.currentTarget.childNodes.length; i++) {
        if (clicco.currentTarget.childNodes[i].type !== undefined) {
          clicco.currentTarget.childNodes[i].id = "answerButton";
        }
      }
      if (clicco.target.tagName === "BUTTON") {
        clicco.target.id = "selectedButton";
        let last = clicco.target.innerText;
        lastClickedText.splice(questionNumber, 1, last);
      } else if (clicco.target.tagName === "FORM") {
        lastClickedText.splice(questionNumber, 1, "");
      }
    });
    let index = 0;
    for (let i = 0; i < 2; i++) {
      const button = document.createElement("button");
      button.id = "answerButton";
      button.style.type = "submit";
      button.style.cursor = "pointer";
      buttons.push(button);
      randomPositionTrueFalse();
    }
    buttons[indici[0]].innerText = `${questions[position].incorrect_answers[index]}`;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "") {
        buttons[i].innerText = `${questions[position].correct_answer}`;
      }
    }
    for (let i = 0; i < 2; i++) {
      buttonsBoolean.push(buttons[i]);
    }
    form.appendChild(buttons[0]);
    form.appendChild(buttons[1]);
    form.appendChild(br);
    question.innerHTML = "";
    question.appendChild(h1);
    question.appendChild(form);
    main.appendChild(question);
    const next = document.createElement("button");
    next.id = "rateUs";
    next.innerText = "Next question";
    next.style.cursor = "pointer";
    next.onclick = displayAnswer;
    footer.innerHTML = "";
    footer.appendChild(next);
    numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
    footer.appendChild(numberQuestion);
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(footer);
  }
};

const quizResult = () => {
  body.innerHTML = `<div id="logoContainer"><img src="./assets/epicode_logo.png" alt="Logo EPICODE" class="logo" /></div>`;
  let n = 0;
  let counter = 0;
  for (let i = 0; i < 10; i++) {
    const titleQuestion = document.createElement("p");
    titleQuestion.classList.add("recupParagraph");
    const span = document.createElement("span");
    span.style = "cursor: pointer";
    const ulContainer = document.createElement("div");
    const ul = document.createElement("ul");
    ul.classList.add("recupParagraphUl");
    span.onclick = () => {
      if (n === 0) {
        ul.classList.remove("recupParagraphUl");
        ul.classList.add("display");
        n = n + 1;
      } else if (n === 1) {
        ul.classList.remove("display");
        ul.classList.add("recupParagraphUl");
        n = n - 1;
      }
    };
    //da vedere meglio
    if (verify[i]) {
      span.innerText = `${questions[indexRandomQuestions[i]].question}`;
      titleQuestion.innerHTML = `<i class="fas fa-circle" style="color: #00FFFF;"></i>`;
      titleQuestion.appendChild(span);
      if (questions[indexRandomQuestions[i]].type === "multiple") {
        for (let j = 0; j < 4; j++) {
          const text = document.createElement("span");
          if (buttonsMultiple[0].innerText === correctQuestionsAnswer[counter]) {
            text.innerHTML = `${buttonsMultiple[0].innerText} <i class="fas fa-check" style="color: #00FFFF; margin-bottom:0;"></i>`;
            text.style = "backgroumd=color: #b7008a";
            counter++;
          } else {
            text.innerHTML = `${buttonsMultiple[0].innerText} <i class="fas fa-times" style="color: #C0008E; margin-bottom:0;"></i>`;
          }
          const answer = document.createElement("li");
          answer.appendChild(text);
          buttonsMultiple = buttonsMultiple.splice(1, buttonsMultiple.length);
          ul.appendChild(answer);
        }
      } else {
        for (let j = 0; j < 2; j++) {
          const text = document.createElement("span");
          if (buttonsBoolean[0].innerText === correctQuestionsAnswer[counter]) {
            text.innerHTML = `${buttonsBoolean[0].innerText} <i class="fas fa-check" style="color: #00FFFF; margin-bottom:0;"></i>`;
            text.style = "background-color: #b7008a";
            counter++;
          } else {
            text.innerHTML = `${buttonsBoolean[0].innerText} <i class="fas fa-times" style="color: #C0008E; margin-bottom:0;"></i>`;
          }
          const answer = document.createElement("li");
          answer.appendChild(text);
          buttonsBoolean = buttonsBoolean.splice(1, buttonsBoolean.length);
          ul.appendChild(answer);
        }
      }
      ulContainer.appendChild(ul);
      titleQuestion.appendChild(ulContainer);
      body.appendChild(titleQuestion);
    } else {
      span.innerText = `${questions[indexRandomQuestions[i]].question}`;
      titleQuestion.innerHTML = `<i class="fas fa-circle" style="color: #C0008E;"></i>`;
      titleQuestion.appendChild(span);
      if (questions[indexRandomQuestions[i]].type === "multiple") {
        for (let j = 0; j < 4; j++) {
          const text = document.createElement("span");
          if (
            (buttonsMultiple[0].innerText === lastClickedText[i] &&
              buttonsMultiple[0].innerText === questions[indexRandomQuestions[i]].incorrect_answers[0]) ||
            (buttonsMultiple[0].innerText === lastClickedText[i] &&
              buttonsMultiple[0].innerText === questions[indexRandomQuestions[i]].incorrect_answers[1]) ||
            (buttonsMultiple[0].innerText === lastClickedText[i] &&
              buttonsMultiple[0].innerText === questions[indexRandomQuestions[i]].incorrect_answers[2])
          ) {
            text.innerHTML = `${buttonsMultiple[0].innerText} <i class="fas fa-times" style="color: #C0008E; margin-bottom:0;"></i>`;
            text.style = "background-color: #b7008a";
          } else if (buttonsMultiple[0].innerText === correctQuestionsAnswer[counter]) {
            text.innerHTML = `${buttonsMultiple[0].innerText} <i class="fas fa-check" style="color: #00FFFF; margin-bottom:0;"></i>`;
            counter++;
          } else {
            text.innerHTML = `${buttonsMultiple[0].innerText} <i class="fas fa-times" style="color: #C0008E; margin-bottom:0;"></i>`;
          }
          const answer = document.createElement("li");
          answer.appendChild(text);
          buttonsMultiple = buttonsMultiple.splice(1, buttonsMultiple.length);
          ul.appendChild(answer);
        }
      } else {
        for (let j = 0; j < 2; j++) {
          const text = document.createElement("span");
          if (
            (buttonsBoolean[0].innerText === lastClickedText[i] &&
              buttonsBoolean[0].innerText === questions[indexRandomQuestions[i]].incorrect_answers[0]) ||
            (buttonsBoolean[0].innerText === lastClickedText[i] &&
              buttonsBoolean[0].innerText === questions[indexRandomQuestions[i]].incorrect_answers[1])
          ) {
            text.innerHTML = `${buttonsBoolean[0].innerText} <i class="fas fa-times" style="color: #C0008E; margin-bottom:0;"></i>`;
            text.style = "background-color: #b7008a";
          } else {
            text.innerHTML = `${buttonsBoolean[0].innerText} <i class="fas fa-check" style="color: #00FFFF; margin-bottom:0;"></i>`;
            counter++;
          }
          const answer = document.createElement("li");
          answer.appendChild(text);
          buttonsBoolean = buttonsBoolean.splice(1, buttonsBoolean.length);
          ul.appendChild(answer);
        }
      }
      ulContainer.appendChild(ul);
      titleQuestion.appendChild(ulContainer);
      body.appendChild(titleQuestion);
    }
  }
};
