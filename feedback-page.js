// ricrea la struttura della pagina

const main = document.getElementsByTagName("main")[0];
const h3 = document.createElement("h3");
const br = document.createElement("br");
const div = document.createElement("div");
div.style = "margin-top: 25%;";

// stars è un array che contiene tutti gli elementi che nella pagina del feedback hanno la classe star cioè tutte le stelle
// si cicla l'array dando alla prima stella la posizione 1 e non 0 in quanto dovrà avere delle funzionalità diverse dalle
// altre. Si chiama "stella" l'elemento in posizione [i] e si da onclick a tutte le stelle dalla seconda in poi per fare in modo che
// si spengano e poi dalla stella in posizione 0 fino alla stella cliccata si illuminano.
// per la prima stella si creano vari if: se la prima e la seconda sono accete vanno spente tutte dalla seconda in poi
// se invece la prima è accesa ma la seconda è spenta allora spegni la prima, se la prima è spenta allora accendila.
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

// il bottone more info ha un eventListener che controlla il click che blocca il default.
// si definisce il contatore di stelle e lo pone a 0.
//  cicla l'array stars e se una è accesa aumenta il contatore di 1
// Crea tutti i pallini in base alle stelle cliccate svutando il main e riempiendo l'h3
// con un messaggio corretto e i pallini con l'icona e poi appende

const moreInfoButton = document.getElementById("buttonMoreInfo");
moreInfoButton.addEventListener("click", (submitEvent) => {
  submitEvent.preventDefault();
  let counterStar = 0;
  for (let i = 0; i < Stars.length; i++) {
    if (Stars[i].src === "http://127.0.0.1:5500/assets/starafterclick.svg") {
      counterStar++;
    }
  }
  if (counterStar === 0) {
    main.innerHTML = "";
    h3.innerHTML = `<i class="far fa-frown" style="color: #C0008E"></i> <i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i><i class="fas fa-circle" style="color: #121B5E"></i> <i class="far fa-smile-beam" style="color: #00FFFF"></i>  <br> </> We are truly sorry for your bad experience, we'll make sure to follow your feedback.`;
    div.appendChild(h3);
    main.appendChild(div);
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
