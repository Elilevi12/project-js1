document.querySelector("#signup_mode").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".userExist").style.display = "none";
  document.querySelector(".newUser").style.display = "block";
});

document.querySelector("#login_mode").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".newUser").style.display = "none";
  document.querySelector(".userExist").style.display = "block";
});
document.querySelector("#signup_button").addEventListener("click", (event) => {
  event.preventDefault();
  let nam = document.querySelector("#myNameOfNewUser").value;
  let pas = document.querySelector("#myPasswrdOfNewUser").value;
  let nec = document.querySelector("#nickname").value;
  let email = document.querySelector("#myEmail").value;
  if (nam && pas && nec && email) {

    if (!localStorage.getItem(nec)) {
     let object= {
        name: nam,
        password: pas,
        nickname: nec,
        emailAdrres: email,
        scor:0,
      };
      let temp = JSON.stringify(object);
      localStorage.setItem(object.name, temp);
      
    }
  }
});
document.querySelector("#login_button").addEventListener("click",(event)=>{
event.preventDefault();
let tempName=document.querySelector("#myName")
let tempPasswrd=document.querySelector("#myPasswrd")
let temp= JSON.parse(localStorage.getItem(tempName.value))
console.log(temp);
if (temp.name==tempName.value&&temp.password==tempPasswrd.value){
    window.location.href = "/html/main.html";


}
const message= document.querySelector(".message")
message.textContent="סיסמה שגויה"

}
)
