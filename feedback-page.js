const Stars = document.getElementsByClassName("star");
for (let i = 1; i < Stars.length; i++) {
  let star = Stars[i];
  star.onclick = () => {
    for (let k = 0; k < Stars.length; k++) {
      Stars[k].src = "./assets/star.svg";
    }
    for (let j = 0; j <= i; j++) {
      Stars[j].src = "./assets/starafterclick.svg";
    }
  };
}
Stars[0].onclick = () => {
  if (Stars[0].src === "http://127.0.0.1:5500/assets/starafterclick.svg") {
    Stars[0].src = "./assets/star.svg";
    for (let k = 1; k < Stars.length; k++) {
      Stars[k].src = "./assets/star.svg";
    }
  } else {
    Stars[0].src = "./assets/starafterclick.svg";
  }
};

//   star.addEventListener("click", (clickedstar) => {
//     console.log(clickedstar);
//     console.log(clickedstar.target);
//     console.log(clickedstar.currentTarget);
//     if (clickedstar.target.currentSrc === ".http://127.0.0.1:5500/assets/starafterclick.svg") {
//       clickedstar.target.currentSrc = "http://127.0.0.1:5500/assets/star.svg";
//     } else {
//       for (let k = 0; k < Stars.length; k++) {
//         Stars[k].src = "./assets/star.svg";
//       }
//       for (let j = 0; j <= i; j++) {
//         Stars[j].src = "./assets/starafterclick.svg";
//       }
//     }
//     console.log(typeof Stars[3].src);
//     console.log(Stars[3].src === "./assets/starafterclick.svg");
//   });

// const text = document.getElementsByTagName("input");
// let keyCounter = 0;
// text.innertText = "";
// text[0].addEventListener("keyup", (key) => {
//   console.log(key);
//   if (key.code === "Backspace") {
//     keyCounter--;
//     text.innertText = text.innertText.slice(0, -1);
//     console.log(text.innertText);
//   } else {
//     if (key.shiftKey === true) {
//       text.innertText += "";
//     }
//   }
//   console.log(keyCounter);
// });
