"use strict";
if (!localStorage.getItem("current")) {
  window.location.href = "/index.html";
}
const current = JSON.parse(localStorage.getItem("current"));
const user = JSON.parse(localStorage.getItem(current.name));
const ScoreP = document.querySelector(".ScoreP");
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
let arr = [
  "/img/bee-8709123_1280.jpg",
  "/img/crocus-8586117_1280.jpg",
  "/img/fish-8265114_1280.jpg",
  "/img/leaves-7597975_1280.jpg",
  "/img/orange-parrots-8608540_1280.jpg",
  "/img/rose-7698947_1280.jpg",
  "/img/sun-1758348_1280.jpg",
  "/img/swan-8242931_1280.jpg",
];
let temp1;
let temp;
function reset() {
  //פונקצייה להתחלת משחק
  counterGame = 0;
  counterClick = 0;
  counterWinner = 0;
  for (let i = 0; i < 16; i++) {
    game.children[i].className = "null";
    game.children[i].children[0].style.display = "none";
  }

  for (let i = 0; i < 8; i++) {
    let counter = 0;
    while (counter < 2) {
      let num = Math.floor(Math.random() * 16);
      if (game.children[num].className == "null") {
        game.children[num].children[0].setAttribute("src", arr[i]);
        game.children[num].className = `${i}`;
        counter++;
      }
    }
  }
}
let counterTempWinner = 0;
let counterWinner = 0;
let counterClick = 0;
let counterGame = 0;
function gameManager(event) {
  //פונקצייה לניהול המשחק
  if (counterClick > 1) {
    return;
  }

  let v = event.target;
  if (
    v.className == "game" ||
    v.tagName == "IMG" ||
    v.className == buttonNweGame
  ) {
    return;
  }
  counterTempWinner++;
  counterClick++;
  if (counterGame % 2 == 0) {
    temp = event.target.className;
    temp1 = Number(v.id) - 1;
    v.children[0].style.display = "block";
    counterGame++;
  } else {
    v.children[0].style.display = "block";
    console.log(temp);
    console.log(v.className);
    if (temp == v.className) {
      counterGame++;
      counterWinner++;
      counterClick = 0;
      if (counterWinner == 8) {
        current.score += Math.floor(64 / counterTempWinner);
        user.score += Math.floor(64 / counterTempWinner);
        ScoreP.textContent = `קיבלת${Math.floor(64 / counterTempWinner)}נקודות`;
        console.log(user.score);
        const strCurrent = JSON.stringify(current);
        const strUser = JSON.stringify(user);
        localStorage.setItem("current", strCurrent);
        localStorage.setItem(current.name, strUser);
      }
      return;
    }
    setTimeout(function () {
      const temp2 = Number(v.id - 1);
      game.children[temp2].children[0].style.display = "none";
      game.children[temp1].children[0].style.display = "none";
      counterGame++;
      counterClick = 0;
    }, 1000);
  }
}

const buttonNweGame = document.querySelector(".buttonNweGame");
buttonNweGame.addEventListener("click", reset);
const game = document.querySelector(".game");
game.addEventListener("click", gameManager);
