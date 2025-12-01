// Primirive
// 7 types : String, Number, Boolearn, null, udefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 34565425766543567n

// Reference (Non Primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "srishti",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);

// ******************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "srishti.com"
anothername = "xyz"

let anothername = myYoutubename

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "srishti@google.com"

console.log(userOne.email);
console.log(userTwo.email);