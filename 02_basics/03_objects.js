// singleTon -> 


// object literals

// Object.create

const mySym = Symbol("key1");

const jsUser = {
    name: "Arvind",
    "full name": "Arvind SIngh Thakur",
    [mySym] : "mySym1",
    age: 18,
    location: "Gwalior",
    email: "arvind@2552",
    isLoggedIn: false,
    lastLogunDays: ["Monday", "Saturday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "arvind@chatgpt4.com";
// Object.freeze(jsUser);
jsUser.email = "arvind@microsooft.com";
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(jsUser.greeting());
// console.log(jsUser.greeting);
console.log(jsUser.greetingTwo());



