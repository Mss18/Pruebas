"use strict";

const primary = document.querySelector("section");
console.log(primary);

primary.firstElementChild.style.color = "steelblue";
console.log(primary.firstElementChild);
console.log(primary.childNodes);

const ps = document.querySelectorAll("p");

for (const p of ps) {
  p.style.fontFamily = "arial";
}

const header = document.getElementsByTagName("header");
console.log(header);
console.log(header.childNodes);

/* --------------------------------------------------------------- */

/* const info = () => console.log(window.navigator.userAgent);
console.log(info);

const message = () => {
  console.log(window.innerWidth);
};

setTimeout(() => {
  console.log(message);
}, 3000); */

let num = 10;

const count = () => {
  if (num > 0) {
    console.log(num--);
  } else {
    console.log("se acabó el tiempo!!");
    clearInterval(int);
  }
};

const int = setInterval(count, 2000);
