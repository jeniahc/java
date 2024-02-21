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
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("myName").innerHTML = myObject.fullName(); 


  function greet(name, greeting, message = `${greeting} ${name}`) {
    return [name, greeting, message];
  }
  
  greet("David", "Hi"); // ["David", "Hi", "Hi David"]
  greet("David", "Hi", "Happy Birthday!"); // ["David", "Hi", "Happy Birthday!"]
  

  console.log()

const functionToBecalled = () => {
    console.log("This is the function to be finally called!");
}

const callingFunction = (functionToBeCalled) => {
    functionToBeCalled();
}

const anotherFunction = () => {
    console.log("This is the function to be finally called!");
}

callingFunction(anotherFunction);