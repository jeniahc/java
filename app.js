const text = document.querySelector(".title");
const changeColor = document.querySelector (".changeColor");


changeColor.addEventListener("click", function(){
    text.classList.toggle("change");
});

const subtitle = document.querySelector(".subtitle");

const userList = document.querySelector(".name-list"); 
const listInput = document.querySelector(".list-input"); 
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function(){
const newLi = document.createElement('LI');
const liContent = document.createTextNode(listInput.value);
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
document.getElementById("number").onclick = function() {revealAnswers()}; 
  function revealAnswers() {
    document.getElementById("number").innerHTML =
    x.toPrecision(4) + "<br>" +
    x.toPrecision(3) + "<br>" +
    x.toPrecision(2);
  }



//my_element.addEventListener("click", function (e) {
   // console.log(this.className); // logs the className of my_element
   // console.log(e.currentTarget === this); // logs `true` });

  function handleEvent(event) {
    if (event.type === "fullscreenchange") {
      /* handle a full screen toggle */
    } else {
      /* handle a full screen toggle error */
    }
  }

  //function greet(name, greeting, message = `${greeting} ${name}`) {
   // return [name, greeting, message]; }
  
  //greet("David", "Hi"); // ["David", "Hi", "Hi David"]
  //greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]

//const functionToBecalled = () => {
  //  console.log("This is the function to be finally called!"); }

//const callingFunction = (functionToBeCalled) => {
  //  functionToBeCalled(); }

//const anotherFunction = () => {
  //  console.log("This is the function to be finally called!"); }

//callingFunction(anotherFunction);