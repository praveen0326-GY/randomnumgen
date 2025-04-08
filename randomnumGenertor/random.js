//Random Number genetor

const myButton = document.getElementById("myButton");
const Lable1 = document.getElementById("Lable1");
const Lable2 = document.getElementById("Lable2");
const Lable3 = document.getElementById("Lable3");
const min = 1;
const max = 9;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  Lable1.textContent = randomNum1;
  Lable2.textContent = randomNum2;
  Lable3.textContent = randomNum3;
};
