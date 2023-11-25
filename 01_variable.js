
const accountId = 56532
let accountEmail = "arvind@123.com"
var accountPassword = "73486573"
accountCity = "Bhopal"
let accountState;

// accountId = 2  // not allowed because we can not change the const variable

/*
Prefer not use var
beacuse of issue in block scope and functional scope
*/

accountEmail = "arv@123.com"
accountPassword = "324324"
accountCity = "Indore"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

