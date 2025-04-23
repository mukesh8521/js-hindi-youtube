//  object literal
 const mysym =Symbol("key1")




const jsUser ={
    name: "mukesh",
    "full name" : "mukesh kumar",
    [mysym]: "mykey1",         // or symbol
    age: 20,
    location: "bilaspur",
    email: "mukeshgoogle.com"
}
// console.log(jsUser.email) or
console.log(jsUser["email"]);
console.log( jsUser[mysym]);
console.log(typeof jsUser.mysym);


jsUser.email = "mukeshkumar457.rr"
Object.freeze(jsUser)
jsUser.email = "mukeshkumar426533.rr"
console.log(jsUser);



