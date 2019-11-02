"use strict";

// const primary = document.querySelector("section");
// console.log(primary);

// primary.firstElementChild.style.color = "steelblue";
// console.log(primary.firstElementChild);
// console.log(primary.childNodes);

// const ps = document.querySelectorAll("p");

// for (const p of ps) {
//   p.style.fontFamily = "arial";
// }

// const header = document.getElementsByTagName("header");
// console.log(header);
// console.log(header.childNodes);

/* --------------------------------------------------------------- */

// const info = () => console.log(window.navigator.userAgent);
// console.log(info);

// const message = () => {
//   console.log(window.innerWidth);
// };

// setTimeout(() => {
//   console.log(message);
// }, 3000);

// let num = 10;

// const count = () => {
//   if (num > 0) {
//     console.log(num--);
//   } else {
//     console.log("se acabó el tiempo!!");
//     clearInterval(int);
//   }
// };

// const int = setInterval(count, 2000);

/*--------------------------------------------------*/

// const header = document.querySelector("header");
// const newParagraph = document.createElement("p");
// const newText = document.createTextNode("Este es un nuevo parrafo");

// newParagraph.appendChild(newText);
// header.appendChild(newParagraph);

/*--------------------------------------------------*/
let arr = [1, 2, 0, 0, 2, 2, 2];

function ClosestEnemy(arr) {
  let total = 0;
  let indiceUno = arr.indexOf(1);
  let indiceDos = arr.indexOf(2);

  let result = arr.reduce((contador, num) => {
    return contador + num;
  }, 0);

  if (result < 1) {
    return 0;
  } else if (indiceUno < indiceDos) {
    total = indiceDos - indiceUno;
  } else if (indiceUno > indiceDos) {
    total = indiceUno - indiceDos;
  }
  return total;
}
// keep this function call here
ClosestEnemy(readline());
