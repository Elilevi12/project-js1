"use strict";
if(!localStorage.getItem("current")){
  window.location.href ="/index.html"
   
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
// <!-- red blue yellow green brown black white purple gray -->

const game = document.querySelector(".game");
let arr = [
    "black",
  "white",
  "purple",
  "gray",

  "red",
  "blue",
  "yellow",
  "green",
  "brown",]
  
// game.children[2].className =arr[0]
for(let i=0;i<10;i++){

    game.children[i].className = arr[i]

}

// let counter = 0;
// while (counter < 9) {
//   let num = Math.floor((Math.random()) * 9);
//   if (game.children[num].className == "") {
//     game.children[num].className = arr[counter];
//     counter++;
//   }
// }
