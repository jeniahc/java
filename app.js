const text = document.querySelector(".title");
const changeColor = document.querySelector (".changeColor");



changeColor.addEventListener("click", function(){
    text.classList.toggle("change");
});

const subtitle = document.querySelectorAll(".subtitle");

for (sub of subtitle) {
  sub.addEventListener("click", function(){
    this.style.color = "yellow";
  });
}

const userList = document.querySelector(".name-list"); 
const listInput = document.querySelector(".list-input"); 
const addListBtn = document.querySelector(".addListBtn");

const names = ["Yolanda", "Georgia", "Taylor"];

for (name of names) {
  console.log(`Welome ${name}!`);
}

addListBtn.addEventListener("click", function(){
  //create an li
const newLi = document.createElement('LI');
  //add the input value inside of new li
const liContent = document.createTextNode(listInput.value);
  //attaching the li to the user list
console.log(`Hello ${listInput.value}. How are you doing today?`);

newLi.appendChild(liContent);
userList.appendChild(newLi); 
});

const myObject = {
    firstName:"Jeniah",
    lastName: "Clarke",
    fullName: function() {
      return "I will be your instructor for today. " + "My name is " + this.firstName + " " + this.lastName + ".";
    }
  }
  document.getElementById("myName").innerHTML = myObject.fullName(); 


const x = 34.276; 
document.getElementById("answers").onclick = function() {revealAnswers()}; 
  function revealAnswers() {
    document.getElementById("answers").innerHTML =
    x.toPrecision(4) + "<br>" +
    x.toPrecision(3) + "<br>" +
    x.toPrecision(2);
  }


const questionA = document.querySelector(".questionA");
const addAnsA = document.querySelector(".addAnsA");
const answerA = document.querySelector(".answerA");

addAnsA.addEventListener("click", function(){

  let ansAPopup;

if (answerA === 34.28) {
  ansAPopup = "Correct";
  console.log("You are correct");
} else {
  ansAPopup = "Try Again";
  console.log("Please try again");
}

const newH4 = document.createElement("H4");
const h4Content = document.createTextNode(ansAPopup);

newH4.appendChild(h4Content);
questionA.appendChild(newH4);

});



const questionB = document.querySelector(".questionB");
const answerB = document.querySelector(".answerB");
const addAnsB = document.querySelector(".addAnsB");


addAnsB.addEventListener("click", function(){

let ansBPopup;
if (answerB === 34.3) {
  ansBPopup = "Correct";
} else {
  ansBPopup = "Try Again";
}

  switch(answerB){
    case 34.3:
      console.log("Correct");
      break;
      case 34.4:
      console.log("Incorrect");
      break;
      default:
      console.log("Incorrect");
      break;
  }


const newH4 = document.createElement("H4");
const h4Content = document.createTextNode(ansBPopup);
newH4.appendChild(h4Content);
questionB.appendChild(newH4);

});


const questionC = document.querySelector(".questionC");
const addAnsC = document.querySelector(".addAnsC");
const answerC = document.querySelector(".answerC");


addAnsC.addEventListener("click", function(){

let ansCPopup;

for (ansC of answerC.value) {
  
if (ansC === 34) {
  ansCPopup = "Correct";
} else {
  ansCPopup = "Try Again";
}}
console.log(`${answerC.value}`);
const newH4 = document.createElement("H4");
const h4Content = document.createTextNode(ansCPopup);
console.log(`${ansCPopup}!`);

newH4.appendChild(h4Content);
questionC.appendChild(newH4);
});


let congrats = "You did it!<br>";
let result = congrats.repeat(4);

document.getElementById("success").innerHTML = result;

let grade = 0;

while (grade < 100) {
  console.log("A+ Grade!!");

  grade++;
}


//const functionToBecalled = () => {
  //  console.log("This is the function to be finally called!"); }

//const callingFunction = (functionToBeCalled) => {
  //  functionToBeCalled(); }

//const anotherFunction = () => {
  //  console.log("This is the function to be finally called!"); }

//callingFunction(anotherFunction);