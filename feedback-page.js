const main = document.getElementsByTagName("main")[0];
const h3 = document.createElement("h3");
const br = document.createElement("br");
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

    for (let j = 0; j <= i; j++) {
      Stars[j].src = "./assets/starafterclick.svg";
    }
  };
}
Stars[0].onclick = () => {
  if (
    Stars[0].src === "http://127.0.0.1:5500/assets/starafterclick.svg" &&
    Stars[1].src === "http://127.0.0.1:5500/assets/starafterclick.svg"
  ) {
    for (let k = 1; k < Stars.length; k++) {
      Stars[k].src = "./assets/star.svg";
    }
  } else if (Stars[0].src === "http://127.0.0.1:5500/assets/starafterclick.svg") {
    Stars[0].src = "./assets/star.svg";
  } else {
    Stars[0].src = "./assets/starafterclick.svg";
  }
};

const moreInfoButton = document.getElementById("buttonMoreInfo");
moreInfoButton.addEventListener("click", (submitEvent) => {
  submitEvent.preventDefault();
  let counterStar = 0;
  // const sadFace = document.createElement("i");
  // sadFace.classList.toggle("far fa-frown");
  // sadFace.style = "color: #C0008E";
  // console.log(sadFace);
  // const happyFace = document.createElement("i");
  // happyFace.classList.add("far fa-smile-beam");
  // happyFace.style = "color: #00FFFF";
  for (let i = 0; i < Stars.length; i++) {
    if (Stars[i].src === "http://127.0.0.1:5500/assets/starafterclick.svg") {
      counterStar++;
    }
  }
  // h3.appendChild(sadFace);
  if (counterStar === 0) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
    // for (let i = 0; i < 10; i++) {
    //   const circle = document.createElement("i");
    //   //circle.classList.add("fas fa-circle");
    //   if (counterStar >= 0) {
    //     circle.style = "color: #C0008E";
    //     h3.appendChild(circle);
    //     counterStar--;
    //   } else {
    //     circle.style = "color: #C0008E";
    //     h3.appendChild(circle);
    //   }
    // }
    // h3.appendChild(happyFace);
    // h3.appendChild(br);
  } else if (counterStar === 1) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 2) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 3) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 4) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 5) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 6) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #C0008E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 7) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> Thanks for the good rating! We'll make sure to follow your feedback to improve the quality of our services.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 8) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #05b1f7"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> Thanks for the good rating! We'll make sure to follow your feedback to improve the quality of our services.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 9) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> Thanks a lot for the excelent rating! We'll make sure to mantain the quality of our services.`;
    div.appendChild(h3);
    main.appendChild(div);
  } else if (counterStar === 10) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i><i class="fas fa-circle" style="color: #00FFFF"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> Thanks a lot for the excelent rating! We'll make sure to mantain the quality of our services.`;
    div.appendChild(h3);
    main.appendChild(div);
  }
});
