// let score = 23
// console.log(typeof score);  // number
// console.log(typeof(score)); // number

let score = "23abc"     // "23"=> 33(number)      "23abc"=>NaN(not a number)   null=> 0  true=> 1   false=> 0  undefind=> NaN    "mukesh"=> NaN
console.log(typeof score);    //string
console.log(typeof(score));      //string

let valueInNumber = Number(score)   // 
console.log(typeof valueInNumber);
console.log(valueInNumber);



let isLoggedIn ="hitesh"     // ""=> false   1 => true    "mukesh"=> true  0 => false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
   


console.log(1 + 2 + "3");   // 33
console.log("1" + 2 + 3);   // 123



console.log(null >0);   //false
console.log(null ==0);   // false
console.log(null >=0);    // true





console.log(undefined >0);     // false
console.log(undefined ==0);    // false
console.log(undefined >=0);     // false


// ===    ---> stricted check check with data type