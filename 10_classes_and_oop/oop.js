// Object literal -> an object literal is a comma-separated list of name-value pairs inside of curly braces.Those values can be properties and functions. 


const user = {
    username: "Arvind",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);   
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
     this.username = username;
     this.logincount = loginCount;
     this.isLoggedIn = isLoggedIn;

    //  We can write here methods also

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    //  return this;  
    // without this bhi ye implicity return karega
}

const userOne = new User("Arivnd", 12, true);
const userTwo = new User("Thakur", 11, false);
console.log(userOne.constructor);
console.log(userTwo);


