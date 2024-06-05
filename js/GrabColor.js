"use strict";
const game = document.querySelector(".game");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
let arrSoftware = [];
function f1() {
  //הכנסת איבר חדש למערך של המחשב
  let num = Math.floor(Math.random() * 4);
  arrSoftware.push(num);
}

function f2() {
  //איפוס משחק
  counterClick = 0;
  arrSoftware = [];
  p_loss.textContent = "";

  // setTimeout(() => f4(), index);
  f4();
}

let counterClick = 0;
function f3(event) {
  //מוסיף איבר למערך של המשתמש
  const e = event.target;
  if (e.className == "game" || !plyhr) {
    return;
  }

  if (Number(e.dataset.name) != arrSoftware[counterClick]) {
    p_loss.textContent = "הפסדת";
    counterClick += 2;
    return false;
  }
  counterClick++;
  //   console.log(Number(e.dataset.name));
  //   console.log(counterClick);
  if (counterClick == arrSoftware.length) {
    counterClick = 0;
    f4();
  }
}

let plyhr;
function f4() {
  plyhr = false;
  //ניהול תור המחשב
  f1();

  let index = 1000;
  for (const element of arrSoftware) {
    setTimeout(() => f5(element), index);
    index += 500;
    setTimeout(() => f6(element), index);
    index += 500;
    numOfcounterSoftware--;
  }

  setTimeout(() => (plyhr = true), 1000 * arrSoftware.length);
}
function f5(num) {
  //מכבה בתור המחשב
  game.children[num].className = "boxSofter";
}
function f6(num) {
  //מדליק בתור המחשב
  game.children[num].className = "box";
}

// function f8() {
//   let index = 1000;
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => f5(0), index);
//     setTimeout(() => f5(3), index);
//     setTimeout(() => f6(1), index);
//     setTimeout(() => f6(2), index);

//     index += 500;
//     setTimeout(() => f6(0), index);
//     setTimeout(() => f6(3), index);
//     setTimeout(() => f5(1), index);
//     setTimeout(() => f5(2), index);
//     index += 500;
//   }
// }
let numOfcounterSoftware = counterClick + 1;
document.querySelector(".counterSoftware").textContent = numOfcounterSoftware;
document.querySelector(".counterUser").textContent = counterClick;
const p_loss = document.querySelector(".loss");
const button = document.querySelector("button");
button.addEventListener("click", f2);
game.addEventListener("click", f3);
// game.addEventListener("mouseover", f9);
