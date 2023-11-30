// 1. Primitive Data Types
// 7 Types: String, Number, Boolean, null, undifined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log("id is" ,id);
// console.log("anotherId is" ,anotherId);
// console.log(id == anotherId);

const bigNumber = 236578976543214256777876534n;


// 2. Non-Primitive Or Reference Dtat Types  

// Array, Objects, Functions

const heros = ["shaktiman", "Arvind", "Rohit"];

let myObj = {
    name: "Arvind",
    age: 22
}

const myFunction = function() {
         console.log("hello world");
}
myFunction();

// console.log(typeof score); // number
// console.log(typeof scoreValue); // number
// console.log(typeof outsideTemp); // object
// console.log(typeof userEmail); // undefined
// console.log(typeof heros); // array => object
// console.log(typeof myObj); // object => object
// console.log(typeof myFunction); //  function => function


// *****************************************************

//  Stack (Primitive), Heap (Non-Primitive)


// Stack (Primitive)
let myYoutubename = "Arvindsinghthakurdotcom";

let anothername = myYoutubename;
anothername = "ThakurAvengers";

// console.log(myYoutubename);
// console.log(anothername);


// Heap (Non-Primitive)
let userOne = {
    email: "user@123.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "arvind@google.com";
console.log(userOne.email);
console.log(userTwo.email);