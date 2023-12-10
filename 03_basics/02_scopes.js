// var c = 300;

// ** Scope of browser console  is diffrent from local editer scope 
// Global scope of browser is Window and Global scope of editer is {}

// Global Scope
let a = 300;

if (true){
    // Block Scope
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Arvind";

    function two(){
        const website = "youtube";
        console.log(username);

    }

    // console.log(website);

    // two();
}

// one();

if(true){
    const username = "Arvind";
    if(username === "Arvind"){
        const website = "youtube";
        // console.log(username + website);
    }

    // console.log(website);
}


// +++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1;
}

// Hoisting 
// addTwo(5);

const addTwo = function(num){
    return num + 2;
}



