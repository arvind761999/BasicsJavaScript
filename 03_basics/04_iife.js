// Immediately Invoked Function Expressions(IIFE)

/*Fro Interview : Global Scope ke pollution se 
 problem hoti hai kai bar to jo bhi golbal 
 scope ke declariation  hai usse bachane ke
liye iife ka use karte hai */

(function chai(){
    // name iife
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Arvind');