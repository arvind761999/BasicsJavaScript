// if

// const Isuseruoggeaxn = true
// if( 2 === "2"){
// console.log( "executed" );
// }

// <, > , <=, >=, ==, !=, === -> strictly equal, !== 

// const temperature = 41;

// if(temperature === 41){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// console.log("Executed");


// const score = 200;

// if (score > 100) {
// let power = "fly";
// console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000;
// implicit
// if (balance > 500) console.log("test") ,console.log("test2");



// if (balance < 500) {
//     console.log("less than 500") ;
//     } else if (balance < 750) {
//         console.log("less than 750") ;
//     }else if (balance < 900) {
//         console.log("less than 900") ;
//     }else if (balance < 1200) {
//         console.log("less than 1200") ;
//     }


const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2){
console.log("Allow to buy course");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User logged in");
}