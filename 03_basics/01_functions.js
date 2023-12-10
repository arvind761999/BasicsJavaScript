
function myfun() {
    console.log("A");
    console.log("R");
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("D");
}

// myfun => it is called a rfference 
// myfun() => it is called a function call

// function addTwoNUmbers(number1, number2){
//     console.log(number1+number2);
// }

// addTwoNUmbers(3, "4");
// addTwoNUmbers(3, 8);
// addTwoNUmbers(3, null);
// addTwoNUmbers(3, "a");


function addTwoNUmbers(number1, number2){
    let Result = number1+number2;
    // return Result;
    return number1+number2;

}

const result = addTwoNUmbers(3,5);

// console.log("Result", result);


function loginUserMessage(username = "Rohit"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }

    //  ** OR **
    if(!username){
        console.log("Please enter a username");
        return;
    }

    return `${username} just logged in`;
}

// console.log(loginUserMessage("Arvind"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

// Here ... is a Rest operator
function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,900));

const user = {
    username: "arvind123",
    price:199
};

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));


