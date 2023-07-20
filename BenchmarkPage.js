const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const header = document.getElementsByTagName("header")[0];
const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("main")[0];
const question = document.createElement("div");
question.classList.add("normal");
const br = document.createElement("br");

const footer = document.getElementsByTagName("footer")[0];
const numberQuestion = document.createElement("p");
numberQuestion.classList.add("footerParagraph");

const correctH4 = document.createElement("h4");
const correctH5 = document.createElement("h5");

const incorrectH4 = document.createElement("h4");
const incorrectH5 = document.createElement("h5");

const pText = document.createElement("p");
const secondP = document.createElement("p");

let questionNumber = 0;
let correctQuestionsAnswer = [];
let correctAnswer = 0;
let incorrectAnswer = 0;

let buttons = [];
let lastClickedText = [];
let last = "";

function corrPercentage() {
  correctH4.innerText = `${(correctAnswer * 100) / questions.length}%`;
  correctH5.innerText = `${correctAnswer} / ${questions.length} questions`;
}

function incorrPercentage() {
  incorrectH4.innerText = `${100 - (correctAnswer * 100) / questions.length}%`;
  incorrectH5.innerText = `${incorrectAnswer} / ${questions.length} questions`;
}

function chartText() {
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
let timeLimit = 30;
let timePassed = 0;
let timeLeft = timeLimit;
let timeGradient = 0;

//const div = document.getElementsByClassName("timer")[0];
//const p = document.getElementById("timerStamp");

function onTimesUp() {
  timeLimit = timeLimit;
  header.innerHTML = "";
  header.innerHTML = `<img id="Logo" src="assets/epicode_logo.png" alt="Logo epicode" />
      <div id="timerContainer" style="background : conic-gradient(#00ffff ${0}deg, #98699c ${0}deg);">
        <div class="timer">
          <p id="timerStamp">
            second <br />
            <span class="spanTimer">${0}</span>
            <br />
            remaning
          </p>
        </div>
      </div>`;
  function time0() {
    questionNumber++;
    if (questionNumber === questions.length) {
      for (let i = 0; i < questions.length; i++) {
        correctQuestionsAnswer.push(questions[i].correct_answer);
        if (correctQuestionsAnswer[i] === lastClickedText[i]) {
          correctAnswer += 1;
        }
      }
      incorrectAnswer = questions.length - correctAnswer;
      let correctGradient = (correctAnswer * 360) / 10;
      corrPercentage();
      incorrPercentage();
      chartText();
      body.innerHTML = `<div id="logoContainer"><img src="./assets/epicode_logo.png" alt="Logo EPICODE" class="logo" /></div>
      <main>
        <h1>Results</h1>
        <h2>The summary of your answers:</h2>
        <div id="correctAnswer">
          <h3>Correct</h3>
          <h4>${correctH4.innerText}</h4>
          <h5>${correctH5.innerText}</h5>
        </div>
        <div style="background: conic-gradient(#00ffff ${correctGradient}deg, #c2128d ${correctGradient}deg);">
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
          <a href="feedback-page.html"><button id="rateUs">RATE US</button></a>
        </footer>
      </main>
      <script src="./BenchmarkPage.js"></script>`;
    } else {
      if (questions[questionNumber].correct_answer === "False" || questions[questionNumber].correct_answer === "True") {
        startTimer(timeLimit, timePassed);
        main.innerHTML = "";
        question.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.classList.add("title");
        h1.innerText = `${questions[questionNumber].question}`;
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
        buttons[indici[0]].innerText = `${questions[questionNumber].incorrect_answers[index]}`;
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].innerText === "") {
            buttons[i].innerText = `${questions[questionNumber].correct_answer}`;
          }
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
        next.onclick = nextQuestion;
        footer.innerHTML = "";
        footer.appendChild(next);
        numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
        footer.appendChild(numberQuestion);
        body.appendChild(footer);
        indici = [];
        indiciIncorrectAnswers = [];
        buttons = [];
      } else {
        startTimer(timeLimit, timePassed);
        main.innerHTML = "";
        question.innerHTML = "";
        const h1 = document.createElement("h1");
        h1.classList.add("title");
        h1.innerText = `${questions[questionNumber].question}`;
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
          buttons[indici[i]].innerText = `${questions[questionNumber].incorrect_answers[index]}`;
        }
        for (let i = 0; i < buttons.length; i++) {
          if (buttons[i].innerText === "") {
            buttons[i].innerText = `${questions[questionNumber].correct_answer}`;
          }
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
        next.onclick = nextQuestion;
        footer.innerHTML = "";
        footer.appendChild(next);
        numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
        footer.appendChild(numberQuestion);
        body.appendChild(footer);
      }
      indici = [];
      indiciIncorrectAnswers = [];
      buttons = [];
    }
  }
  lastClickedText.push("");
  time0();
}

function startTimer(timeLimit, timePassed) {
  let timeLeft = timeLimit;
  timerInterval = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      onTimesUp();
    } else {
      timeGradient = (timeLeft * 360) / 30;
      header.innerHTML = "";
      header.innerHTML = `<img id="Logo" src="assets/epicode_logo.png" alt="Logo epicode" />
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
      timePassed = timePassed += 1;
      timeLeft = timeLimit - timePassed;
    }
  }, 1000);
}

function formatTime(time) {
  let seconds = time % 60;
  return `${seconds}`;
}

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

const nextQuestion = (submitEvent) => {
  clearInterval(timerInterval);
  submitEvent.preventDefault();
  header.innerHTML = "";
  header.innerHTML = `<img id="Logo" src="assets/epicode_logo.png" alt="Logo epicode" />
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
  questionNumber++;
  if (questionNumber === questions.length) {
    for (let i = 0; i < questions.length; i++) {
      correctQuestionsAnswer.push(questions[i].correct_answer);
      if (correctQuestionsAnswer[i] === lastClickedText[i]) {
        correctAnswer += 1;
      }
    }
    incorrectAnswer = questions.length - correctAnswer;
    let correctGradient = (correctAnswer * 360) / 10;
    corrPercentage();
    incorrPercentage();
    chartText();
    body.innerHTML = `<div id="logoContainer"><img src="./assets/epicode_logo.png" alt="Logo EPICODE" class="logo" /></div>
      <main>
        <h1>Results</h1>
        <h2>The summary of your answers:</h2>
        <div id="correctAnswer">
          <h3>Correct</h3>
          <h4>${correctH4.innerText}</h4>
          <h5>${correctH5.innerText}</h5>
        </div>
        <div style="background: conic-gradient(#00ffff ${correctGradient}deg, #c2128d ${correctGradient}deg);">
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
          <a href="feedback-page.html"><button id="rateUs">RATE US</button></a>
        </footer>
      </main>
      <script src="./BenchmarkPage.js"></script>`;
  } else if (
    questions[questionNumber].correct_answer === "False" ||
    questions[questionNumber].correct_answer === "True"
  ) {
    main.innerHTML = "";
    question.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = `${questions[questionNumber].question}`;
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
    buttons[indici[0]].innerText = `${questions[questionNumber].incorrect_answers[index]}`;
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "") {
        buttons[i].innerText = `${questions[questionNumber].correct_answer}`;
      }
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
    next.onclick = nextQuestion;
    footer.innerHTML = "";
    footer.appendChild(next);
    numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
    footer.appendChild(numberQuestion);
    body.appendChild(footer);
    indici = [];
    indiciIncorrectAnswers = [];
    buttons = [];
  } else {
    main.innerHTML = "";
    question.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.classList.add("title");
    h1.innerText = `${questions[questionNumber].question}`;
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
      buttons[indici[i]].innerText = `${questions[questionNumber].incorrect_answers[index]}`;
    }
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerText === "") {
        buttons[i].innerText = `${questions[questionNumber].correct_answer}`;
      }
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
    next.onclick = nextQuestion;
    footer.innerHTML = "";
    footer.appendChild(next);
    numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
    footer.appendChild(numberQuestion);
    body.appendChild(footer);
  }
  indici = [];
  indiciIncorrectAnswers = [];
  buttons = [];
  lastClickedText.push("");
};

const img = document.createElement("img");
img.id = "Logo";
img.src = "assets/epicode_logo.png";

const firstQuestion = () => {
  header.innerHTML = "";
  const timerContainer = document.createElement("div");
  timerContainer.innerHTML = "";
  timerContainer.id = "timerContainer";
  timerContainer.style = "background : conic-gradient(#98699c 0deg, #00ffff 0deg);";
  const div = document.createElement("div");
  div.innerHTML = "";
  div.classList.add("timer");
  const p = document.createElement("p");
  p.innerHTML = `second <br /> <span class="spanTimer">${timeLeft}</span> <br /> remaning`;
  p.id = "timerStamp";
  div.appendChild(p);
  timerContainer.appendChild(div);
  header.appendChild(img);
  header.appendChild(timerContainer);
  startTimer(timeLimit, timePassed);
  main.innerHTML = "";
  question.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.innerText = `${questions[questionNumber].question}`;
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
    buttons[indici[i]].innerText = `${questions[questionNumber].incorrect_answers[index]}`;
  }
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText === "") {
      buttons[i].innerText = `${questions[questionNumber].correct_answer}`;
    }
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
  next.onclick = nextQuestion;
  footer.innerHTML = "";
  footer.appendChild(next);
  numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
  footer.appendChild(numberQuestion);
  body.appendChild(footer);
  indici = [];
  indiciIncorrectAnswers = [];
  buttons = [];
  lastClickedText.push("");
};
firstQuestion();
