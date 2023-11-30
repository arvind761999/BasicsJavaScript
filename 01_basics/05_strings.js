const name = "arvind";
const repoCount = 50;

// console.log(name + repoCount + "value");

// String Interpolation

console.log((`Hello my name is ${name} and my repo count is ${repoCount}`));

const gameName = new String('Cricket-Board-India');

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// SubString
const newString = gameName.substring(0, 6);
console.log(newString);

const anotherString = gameName.slice(-2, 4);
console.log(anotherString);


const newStringOne = "  Arvind   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://arvind.com.arvind%20thakur"

console.log(url.replace('%20'), '-');

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
