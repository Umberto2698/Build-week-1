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

/*Ho ricreato la pagina con JS*/
let questionNumber = 0;

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

let buttons = [];
const nextQuestion = (submitEvent) => {
  submitEvent.preventDefault();
  if (questionNumber === questions.length) {
    //Andare alla pagina risultati
  } else {
    console.log(submitEvent);
    questionNumber++;
    main.innerHTML = "";
    question.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerText = `${questions[questionNumber].question}`;
    const form = document.createElement("form");
    form.id = "formAnswer";
    form.addEventListener("click", (clicco) => {
      clicco.preventDefault();
      console.log(1);
      //Domani vedere da qui
      for (let i = 0; i < clicco.currentTarget.childNodes.length; i++) {
        if (clicco.currentTarget.childNodes[i].type !== undefined) {
          console.log(clicco.currentTarget.childNodes[i].type);
        }
      }
      clicco.target.id = "selectedButton";
      console.log(clicco.target);
    });
    for (let i = 0; i < 4; i++) {
      const button = document.createElement("button");
      button.id = "answerButton";
      button.style.type = "submit";
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
};

const clicked = (clicco) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].id = "answerButton ";
  }
  clicco.target.id = "selectedButton";
};

const next = document.getElementById("answerButton");
next.onclick = nextQuestion;
const br = document.createElement("br");
const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("main")[0];
const question = document.createElement("div");
question.innerHTML = `<h1>${questions[0].question}</h1>
<form id="formAnswer" >
<button id="answerButton" >${questions[0].incorrect_answers[0]}</button>
<button id="answerButton" >${questions[0].correct_answer}</button>
<br />
<button id="answerButton" >${questions[0].incorrect_answers[1]}</button>
<button id="answerButton" >${questions[0].incorrect_answers[2]}</button>
</form>`;
main.appendChild(question);
main.appendChild(next);

const footer = document.getElementsByTagName("footer")[0];
const numberQuestion = document.createElement("p");
numberQuestion.classList.add("footerParagraph");
numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
footer.appendChild(numberQuestion);
body.appendChild(footer);
