"use strict";
const game = document.querySelector(".game");
// const a = document.querySelector("div[data-name='0']");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");
let arrUser=[];
let arrSoftware=[];
function f1(){//הכנסת איבר חדש למערך של המחשב
let num=Math.floor((Math.random())*4)
arrSoftware.push(num)
}
function f2(){//איפוס משחק
    arrUser=[];
    arrSoftware=[]  
}
function f3(event){//מוסיף איבר למערך של המשתמש
const e=event.target;
    if(e.className == "game"){
        return;
    }
    arrUser.push(Number(e.dataset.name))
    // console.log(arrUser);
}
setInterval
let counterInterval=0;
function f4(){//ניהול תור המחשב
f1();
let index=1000;


for(const element of arrSoftware){
   
    setTimeout(()=>f6(element),index);
    index+=1000;
    setTimeout(()=>f5(element),index);
  index+=1000;
}

}
function f5(num){//מהבהבת בתור המחשב
game.children[num].className="box"
}
function f6(num){//מהבהבת בתור המחשב
game.children[num].className="boxSofter"
}
// console.log((b.dataset.name));
// console.log(Number(b.dataset.name)+1);
const button= document.querySelector("button")
button. addEventListener("click",f4)
game.addEventListener("click",f3)