
const user = {
    username: "Arvind",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Krishna";
// user.welcomeMessage();

console.log(this);

// ++++++++++++++++++++++  this => we can not use this inside the function

// function chai(){
//     let username = "Arvind";
//     console.log(this.username);
// }

// chai();


// const chai = function chai(){
//     let username = "Arvind";
//     console.log(this.username);
// }

// chai();

const chai = () => {
    let username = "Arvind";
    console.log(this.username);
}

// chai();

// Basic Arrow function
// const addTwo = (num1, num2) => {
//         return num1+num2;
// }


// Implicit return

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);


const addTwo = (num1, num2) =>  ({username: "Arvind"});
console.log(addTwo(5,2));


