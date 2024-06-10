"use strict";
if (!localStorage.getItem("current")) {
  window.location.href = "/index.html";
}
let current = JSON.parse(localStorage.getItem("current"));
const user = document.querySelector(".currentUser");
user.textContent = current.nickname;
console.log(current);
const yourScore = document.querySelector(".yourScore");
yourScore.textContent = current.score;
const nameWinner = document.querySelector(".nameWinner");
const scoreWinner = document.querySelector(".scoreWinner");
let temp;
if (!localStorage.getItem("winner")) {
  const winner = {
    name: current.name,
    score: 0,
  };
  temp = JSON.stringify(winner);
  localStorage.setItem("winner", temp);
}
const winner = JSON.parse(localStorage.getItem("winner"));
if (current.score > winner.score) {
  winner.name = current.name;
  winner.score = current.score;
  temp = JSON.stringify(winner);
  localStorage.setItem("winner", temp);
}

nameWinner.textContent = winner.name;
scoreWinner.textContent = winner.score;
const logOut = document.querySelector(".logOut");
function out(event) {
  localStorage.removeItem("current");
  window.location.href = "/index.html";
}
logOut.addEventListener("click", out);
