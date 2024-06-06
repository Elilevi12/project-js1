"use strict";
const game = document.querySelector(".game");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
let arrSoftware = [];
function pushArr() {
  //הכנסת איבר חדש למערך של המחשב
  let num = Math.floor(Math.random() * 4);
  arrSoftware.push(num);
}

function reset() {
  //איפוס משחק
  counterClick = 0;
  arrSoftware = [];
  p_loss.textContent = "";

  // setTimeout(() => computer(), index);
  computer();
}

let counterClick = 0;
function user(event) {
  //מוסיף איבר למערך של המשתמש
  const e = event.target;
  if (e.className == "game" || !plyhr) {
    return;
  }
  document.querySelector(".yourTurn").textContent="תורך"
  document.querySelector(".counterUser").textContent = arrSoftware.length;
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
    computer();
  }
}

let plyhr;
function computer() {
  document.querySelector(".yourTurn").textContent="תור המחשב"
  plyhr = false;
  //ניהול תור המחשב
  pushArr();

  let index = 1000;
  for (const element of arrSoftware) {
    setTimeout(() => lighting(element), index);
    index += 500;
    setTimeout(() => turnOff(element), index);
    index += 500;
  }
 
 
  setTimeout(() => (plyhr = true ), 1000 * arrSoftware.length);
}


function lighting(num) {
  //מכבה בתור המחשב
  game.children[num].className = "boxSofter";
}
function turnOff(num) {
  //מדליק בתור המחשב
  game.children[num].className = "box";
}

const p_loss = document.querySelector(".loss");
const button = document.querySelector("button");
button.addEventListener("click", reset);
game.addEventListener("click", user);

