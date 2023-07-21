const main = document.getElementsByTagName("main")[0];
const h3 = document.createElement("h3");
const div = document.createElement("div");
div.style = "margin-top: 25%;";

const Stars = document.getElementsByClassName("star");
let glowingStars = [];
for (let i = 1; i < Stars.length; i++) {
  let star = Stars[i];
  star.onclick = () => {
    for (let k = 0; k < Stars.length; k++) {
      Stars[k].src = "./assets/star.svg";
    }
    glowingStars.splice(0, glowingStars.length);
    for (let j = 0; j <= i; j++) {
      Stars[j].src = "./assets/starafterclick.svg";
      glowingStars.push(Stars[j]);
    }
  };
}
Stars[0].onclick = () => {
  if (
    Stars[0].src === "http://127.0.0.1:5500/assets/starafterclick.svg" &&
    Stars[1].src === "http://127.0.0.1:5500/assets/starafterclick.svg"
  ) {
    glowingStars.splice(0, glowingStars.length);
    for (let k = 1; k < Stars.length; k++) {
      Stars[k].src = "./assets/star.svg";
    }
    glowingStars.push(Stars[0]);
  } else if (Stars[0].src === "http://127.0.0.1:5500/assets/starafterclick.svg") {
    glowingStars.pop();
    Stars[0].src = "./assets/star.svg";
  } else {
    glowingStars.push(Stars[0]);
    Stars[0].src = "./assets/starafterclick.svg";
  }
};

const moreInfoButton = document.getElementById("buttonMoreInfo");
moreInfoButton.addEventListener("click", (submitEvent) => {
  submitEvent.preventDefault();
  if (glowingStars.length >= 0 && glowingStars.length < 7) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #FF1200"></i> <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;

    div.appendChild(h3);
    main.appendChild(div);
  } else if (glowingStars.length >= 7 && glowingStars.length < 9) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-smile-beam" style="color: #BFFF10"></i> <br> </> Thanks for the good rating! We'll make sure to follow your feedback to improve the quality of our services.`;

    div.appendChild(h3);
    main.appendChild(div);
  } else {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-laugh-beam" style="color: #05FF04"></i> <br> </> Thanks a lot for the excelent rating! We'll make sure to mantain the quality of our services.`;

    div.appendChild(h3);
    main.appendChild(div);
  }
});
