const Stars = document.getElementsByClassName("star");
for (let i = 0; i < Stars.length; i++) {
  let star = Stars[i];
  star.addEventListener("click", (clickedstar) => {
    for (let k = 0; k < Stars.length; k++) {
      Stars[k].src = "./assets/star.svg";
    }
    for (let j = 0; j <= i; j++) {
      Stars[j].src = "./assets/starafterclick.svg";
    }
  });
}
/*
if ((clickedstar.target.currentSrc = ".http://127.0.0.1:5500/assets/starafterclick.svg")) {
  console.log(clickedstar.target.currentSrc);
  clickedstar.target.currentSrc = "http://127.0.0.1:5500/assets/star.svg";
}
const text = document.getElementsByTagName("input");
let keyCounter = 0;
text.innertText = "";
text[0].addEventListener("keyup", (key) => {
  console.log(key);
  if (key.code === "Backspace") {
    keyCounter--;
    text.innertText = text.innertText.slice(0, -1);
    console.log(text.innertText);
  } else {
    if (key.shiftKey === true) {
      text.innertText += "";
    }
  }
  console.log(keyCounter);
});*/
