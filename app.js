const classSchedule = ["Time to round up numbers!", "Fraction Time!", "World of Geometry"];

console.log(classSchedule[0]);

const title = document.querySelector(".title");
const changeColor = document.querySelector (".changeColor");

changeColor.addEventListener("click", function(){
    title.classList.toggle("change");
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



const submitA = document.getElementById("submitA");
const answerA = document.getElementById("answerA");
const ansAPopup = document.getElementById("ansAPopup");
let ansA;

submitA.onclick = function(){

  ansA = answerA.value;
  ansA = Number(ansA);
  if (ansA === 34.28) {
  ansAPopup.textContent = `Correct`;
  console.log("You are correct");
} else {
  ansAPopup.textContent = `Try Again`;
  console.log("Please try again");
}}

switch(ansA){
  case 34.28:
    console.log("Correct");
    break;
    default:
    console.log("Please type in the answer for question 1.");
    break;
}


const submitB = document.getElementById("submitB");
const answerB = document.getElementById("answerB");
const ansBPopup = document.getElementById("ansBPopup");
let ansB;

submitB.onclick = function(){

  ansB = answerB.value;
  ansB = Number(ansB);
  if (ansB === 34.3) {
  ansBPopup.textContent = `Correct`;
  console.log("You are correct");
} else {
  ansBPopup.textContent = `Try Again`;
  console.log("Please try again");
}}

switch(ansB){
  case 34.3:
    console.log("Correct");
    break;
    default:
    console.log("Please type in the answer for question 2.");
    break;
}


const submitC = document.getElementById("submitC");
const answerC = document.getElementById("answerC");
const ansCPopup = document.getElementById("ansCPopup");
let ansC;

submitC.onclick = function(){

  ansC = answerC.value;
  ansC = Number(ansC);
  if (ansC === 34) {
  ansCPopup.textContent = `Correct`;
  console.log("You are correct");
} else {
  ansCPopup.textContent = `Try Again`;
  console.log("Please try again");
}}

  switch(ansC){
    case 34:
      console.log("Correct");
      break;
      default:
      console.log("Please type in the answer for question 3.");
      break;
  }

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