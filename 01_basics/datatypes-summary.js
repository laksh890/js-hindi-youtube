// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score =  100
const scoreValue = 100.3

const isLoggesdIn = false
const outsideTemp = null

let userEmail;  //undefined value

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 57657464775765765765985n

//Reference (Non primitive)

// Array, Objects, Funcions

const heros = ["shaktiman", "naagraj", "doga"]   //Array
let myObj = {
    name: "hitesh",
    age: 22, 
}    //Object

const myFunction = function() {
    console.log("Hello World")
} 

console.log(typeof bigNumber)

/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function object
       Object  =>  object
*/

// https://262.ecma-international.org/5.1/#sec-11.4.3 


// +++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive),  Heap (Non-Primitive)
let myYoutubename = "LakshayGandotracom"
let anothername = myYoutubename 
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Heap memory reference 
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "lakshay@google.com"

console.log(userOne.email);
console.log(userTwo.email);