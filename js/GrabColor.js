"use strict";
if (!localStorage.getItem("current")) {
  window.location.href = "/index.html";
}
const open = document.querySelector(".open");
const instructions = document.querySelector(".instructions");
const p_instructions = document.querySelector("p_instructions");
const closed = document.querySelector(".closed");
open.addEventListener("click", (event) => {
  instructions.children[1].style.display = "block";
  instructions.children[2].style.display = "block";
});
closed.addEventListener("click", (event) => {
  instructions.children[1].style.display = "none";
  instructions.children[2].style.display = "none";
});
const game = document.querySelector(".game");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
let arrSoftware = [];
const current = JSON.parse(localStorage.getItem("current"));
const user = JSON.parse(localStorage.getItem(current.name));

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

  computer();
}
let counterClick = 0;
function userQueue(event) {
  //מוסיף איבר למערך של המשתמש
  const e = event.target;
  if (e.className == "game" || !plyhr) {
    return;
  }
  document.querySelector(".yourTurn").textContent = "תורך";
  document.querySelector(".counterUser").textContent = arrSoftware.length;
  if (Number(e.dataset.name) != arrSoftware[counterClick]) {
    p_loss.textContent = `קיבלת ${arrSoftware.length - 1} נקודות`;
    current.score += arrSoftware.length - 1;
    console.log(current.score);
    user.score += arrSoftware.length - 1;
    console.log(user.score);
    const strCurrent = JSON.stringify(current);
    const strUser = JSON.stringify(user);
    localStorage.setItem("current", strCurrent);
    localStorage.setItem(current.name, strUser);
    counterClick += 100;
    return;
  }
  counterClick++;
  if (counterClick == arrSoftware.length) {
    counterClick = 0;
    computer();
  }
}

let plyhr;
function computer() {
  document.querySelector(".yourTurn").textContent = "תור המחשב";
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

  setTimeout(() => (plyhr = true), 1000 * arrSoftware.length);
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
const buttonNweGame = document.querySelector(".buttonNweGame");
buttonNweGame.addEventListener("click", reset);
game.addEventListener("click", userQueue);
