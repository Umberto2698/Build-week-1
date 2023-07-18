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
