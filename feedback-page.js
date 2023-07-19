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
