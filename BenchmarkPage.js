const allQuestions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What internet protocol was documented in RFC 1459?",
    correct_answer: "IRC",
    incorrect_answers: ["HTTP", "HTTPS", "FTP"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What was the first company to use the term &quot;Golden Master&quot;?",
    correct_answer: "Apple",
    incorrect_answers: ["IBM", "Microsoft", "Google"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Released in 2001, the first edition of Apple&#039;s Mac OS X operating system (version 10.0) was given what animal code name?",
    correct_answer: "Cheetah",
    incorrect_answers: ["Puma", "Tiger", "Leopard"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Dutch computer scientist Mark Overmars is known for creating which game development engine?",
    correct_answer: "Game Maker",
    incorrect_answers: ["Stencyl", "Construct", "Torque 2D"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who invented the &quot;Spanning Tree Protocol&quot;?",
    correct_answer: "Radia Perlman",
    incorrect_answers: ["Paul Vixie", "Vint Cerf", "Michael Roberts"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
    correct_answer: "Coffee Lake",
    incorrect_answers: ["Sandy Bridge", "Skylake", "Broadwell"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Lenovo acquired IBM&#039;s personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
    correct_answer: "2005",
    incorrect_answers: ["1999", "2002", "2008"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the founder of Palantir?",
    correct_answer: "Peter Thiel",
    incorrect_answers: ["Mark Zuckerberg", "Marc Benioff", "Jack Dorsey"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Whistler was the codename of this Microsoft Operating System.",
    correct_answer: "Windows XP",
    incorrect_answers: ["Windows 2000", "Windows 7", "Windows 95"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "On which computer hardware device is the BIOS chip located?",
    correct_answer: "Motherboard",
    incorrect_answers: ["Hard Disk Drive", "Central Processing Unit", "Graphics Processing Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Nvidia&#039;s headquarters are based in which Silicon Valley city?",
    correct_answer: "Santa Clara",
    incorrect_answers: ["Palo Alto", "Cupertino", "Mountain View"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In the server hosting industry IaaS stands for...",
    correct_answer: "Infrastructure as a Service",
    incorrect_answers: ["Internet as a Service", "Internet and a Server", "Infrastructure as a Server"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the programming language &quot;Python&quot;, which of these statements would display the string &quot;Hello World&quot; correctly?",
    correct_answer: "print(&quot;Hello World&quot;)",
    incorrect_answers: [
      "console.log(&quot;Hello World&quot;)",
      "echo &quot;Hello World&quot;",
      "printf(&quot;Hello World&quot;)",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "In computing terms, typically what does CLI stand for?",
    correct_answer: "Command Line Interface",
    incorrect_answers: ["Common Language Input", "Control Line Interface", "Common Language Interface"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "medium",
    question: "Android versions are named in alphabetical order.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question: "Which programming language was developed by Sun Microsystems in 1995?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "Solaris OS", "C++"],
  },
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
    question: `In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?`,
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

let questions = [];

const header = document.createElement("header");
const body = document.getElementsByTagName("body")[0];
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

function onTimesUp() {
  displayAnswer();
}

function startTimer(timeLimit, timePassed) {
  let timeLeft = timeLimit;
  timerInterval = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      onTimesUp();
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

const displayAnswer = () => {
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
  h1.innerText = `${questions[questionNumber].question}`;
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
      buttons[i].innerText === questions[questionNumber].correct_answer
    ) {
      buttons[i].id = "selectedButtonCorrect";
    } else if (
      (buttons[i].innerText === lastClickedText[questionNumber] &&
        buttons[i].innerText === questions[questionNumber].incorrect_answers[0]) ||
      (buttons[i].innerText === lastClickedText[questionNumber] &&
        buttons[i].innerText === questions[questionNumber].incorrect_answers[1]) ||
      (buttons[i].innerText === lastClickedText[questionNumber] &&
        buttons[i].innerText === questions[questionNumber].incorrect_answers[2])
    ) {
      buttons[i].id = "selectedButtonIncorrect";
    } else if (buttons[i].innerText === questions[questionNumber].correct_answer) {
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
    questionNumber++;
    if (questionNumber === questions.length) {
      for (let i = 0; i < questions.length; i++) {
        correctQuestionsAnswer.push(questions[i].correct_answer);
        if (correctQuestionsAnswer[i] === lastClickedText[i]) {
          correctAnswer += 1;
        }
      }
      incorrectAnswer = questions.length - correctAnswer;
      let correctGradient = (correctAnswer * 360) / questions.length;
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
        <div style="background-image: conic-gradient(#00ffff ${correctGradient}deg, #c2128d ${correctGradient}deg); box-shadow: 0px 0px 20px 10px #090D2C;">
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
    } else if (questions[questionNumber].type === "boolean") {
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
      next.onclick = displayAnswer;
      footer.innerHTML = "";
      footer.appendChild(next);
      numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
      footer.appendChild(numberQuestion);
      body.appendChild(footer);
    }
  }, 1000);
};

const firstQuestion = () => {
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
  next.onclick = displayAnswer;
  footer.innerHTML = "";
  footer.appendChild(next);
  numberQuestion.innerHTML = `QUESTION ${questionNumber + 1} <span> / 10</span>`;
  footer.appendChild(numberQuestion);
  body.appendChild(header);
  body.appendChild(main);
  body.appendChild(footer);
};

function goToQuizPage(submitEvent) {
  if (document.getElementById("square").checked === true) {
    for (let i = 0; i < allQuestions.length; i++) {
      if (allQuestions[i].difficulty === "easy") {
        questions.push(allQuestions[i]);
      }
    }
    firstQuestion();
  }
}
