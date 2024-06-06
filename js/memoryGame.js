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
// let arr = [
//   "www.jbhtech.org.il/wp-content/uploads/2023/10/Frame-33.png",
//   "www.jbhtech.org.il/wp-content/uploads/2023/10/Frame-20.png",
//   "www.jbhtech.org.il/wp-content/uploads/2023/10/Ellipse-77-1.png",
//   "www.jbhtech.org.il/wp-content/uploads/2023/10/Frame-36.png",
// "  www.jbhtech.org.il/wp-content/uploads/2023/10/Ellipse-77.png",
// "www.jbhtech.org.il/wp-content/uploads/2023/10/Frame-17-1.png",
// "www.jbhtech.org.il/wp-content/uploads/2023/10/Frame-27.png",
// "www.jbhtech.org.il/wp-content/uploads/2023/10/Frame-35.png"]






let temp1;
let temp;

function reset() {
  //פונקצייה להתחלת משחק

  for (let i = 0; i < 16; i++) {
    game.children[i].className = "null";
    game.children[i].children[0].style.display = "none";
    count = 0;
    counterClick = 0;
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

let counterClick = 0;
let count = 0;
function f1(event) {
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
  counterClick++;
  if (count % 2 == 0) {
    temp = event.target.className;
    temp1 = Number(v.id) - 1;
    v.children[0].style.display = "block";
    count++;
  } else {
    v.children[0].style.display = "block";
    console.log(temp);
    console.log(v.className);
    if (temp == v.className) {
      count++;
      counterClick = 0;
      return;
    }
    setTimeout(function () {
      const temp2 = Number(v.id - 1);
      game.children[temp2].children[0].style.display = "none";
      game.children[temp1].children[0].style.display = "none";
      count++;
      counterClick = 0;
    }, 1000);
  }
}

const buttonNweGame = document.querySelector(".buttonNweGame");
buttonNweGame.addEventListener("click", reset);
const game = document.querySelector(".game");
game.addEventListener("click", f1);
