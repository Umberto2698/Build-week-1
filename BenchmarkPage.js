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

const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("main")[0];
const question = document.createElement("div");
const br = document.createElement("br");

const footer = document.getElementsByTagName("footer")[0];
const numberQuestion = document.createElement("p");
numberQuestion.classList.add("footerParagraph");

let questionNumber = 0;
let correctQuestionsAnswer = [];
let correctAnswer = 0;
let incorrectAnswer = questions.length;

//Funzionalità del timer dinamico
let timeLimit = 30;
let timePassed = 0;
let timeLeft = timeLimit;
let timerInterval = null;

const div = document.getElementsByClassName("timer")[0];
const p = document.getElementById("timerStamp");
p.innerHTML = `second <br /> <span class="spanTimer">${timeLeft}</span> <br /> remaning`;
div.appendChild(p);

function onTimesUp() {
  function time0() {
    questionNumber++;
    if (questionNumber === questions.length) {
      console.log(lastClickedText);
      for (let i = 0; i < questions.length; i++) {
        correctQuestionsAnswer.push(questions[i].correct_answer);
        if (correctQuestionsAnswer[i] === lastClickedText[i]) {
          correctAnswer += 1;
        }
      }
      console.log(correctQuestionsAnswer);
      console.log(correctAnswer);
    } else {
      if (questions[questionNumber].correct_answer === "False" || questions[questionNumber].correct_answer === "True") {
        clearInterval(timerInterval);
        startTimer(timeLimit, timePassed);
        main.innerHTML = "";
        question.innerHTML = "";
        const h1 = document.createElement("h1");
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
        next.id = "answerButton";
        next.innerText = "Next question";
        next.style.cursor = "pointer";
        next.onclick = nextQuestion;
        main.appendChild(next);
        footer.innerHTML = "";
        numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
        footer.appendChild(numberQuestion);
        body.appendChild(footer);
        indici = [];
        indiciIncorrectAnswers = [];
        buttons = [];
      } else {
        clearInterval(timerInterval);
        startTimer(timeLimit, timePassed);
        main.innerHTML = "";
        question.innerHTML = "";
        const h1 = document.createElement("h1");
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
        next.id = "answerButton";
        next.innerText = "Next question";
        next.style.cursor = "pointer";
        next.onclick = nextQuestion;
        main.appendChild(next);
        footer.innerHTML = "";
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

let buttons = [];
let lastClickedText = [];
let last = "";
const nextQuestion = (submitEvent) => {
  submitEvent.preventDefault();
  clearInterval(timerInterval);
  startTimer(timeLimit, timePassed);
  questionNumber++;
  if (questionNumber === questions.length) {
    for (let i = 0; i < questions.length; i++) {
      correctQuestionsAnswer.push(questions[i].correct_answer);
      if (correctQuestionsAnswer[i] === lastClickedText[i]) {
        correctAnswer += 1;
      }
    }
    console.log(lastClickedText);
    console.log(correctAnswer);
    console.log(correctQuestionsAnswer);
  } else if (
    questions[questionNumber].correct_answer === "False" ||
    questions[questionNumber].correct_answer === "True"
  ) {
    main.innerHTML = "";
    question.innerHTML = "";
    const h1 = document.createElement("h1");
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
    next.id = "answerButton";
    next.innerText = "Next question";
    next.style.cursor = "pointer";
    next.onclick = nextQuestion;
    main.appendChild(next);
    footer.innerHTML = "";
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
    next.id = "answerButton";
    next.innerText = "Next question";
    next.style.cursor = "pointer";
    next.onclick = nextQuestion;
    main.appendChild(next);
    footer.innerHTML = "";
    numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
    footer.appendChild(numberQuestion);
    body.appendChild(footer);
  }
  indici = [];
  indiciIncorrectAnswers = [];
  buttons = [];
  lastClickedText.push("");
};

const firstQuestion = () => {
  startTimer(timeLimit, timePassed);
  main.innerHTML = "";
  question.innerHTML = "";
  const h1 = document.createElement("h1");
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
  next.id = "answerButton";
  next.innerText = "Next question";
  next.style.cursor = "pointer";
  next.onclick = nextQuestion;
  main.appendChild(next);
  footer.innerHTML = "";
  numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
  footer.appendChild(numberQuestion);
  body.appendChild(footer);
  indici = [];
  indiciIncorrectAnswers = [];
  buttons = [];
  lastClickedText.push("");
};
firstQuestion();
