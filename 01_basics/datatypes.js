"use strict";
//alert("hello") we are using nnodejs not web browser

console.log(3+3);

let name="vrinda"
let age=23
let isLoggedIn=false

//int bigint
//string=""
//boolean true/false
//null stand alone value
//undefined variable is declared but not assigned
//symbol

//object

console.log(typeof age);
console.log(typeof null)
console.log(typeof name)

let score=undefined;
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(valueInNumber);

//"33aabc"/undefined => NaN not a number
//null => 0

//primitve: sstring,number,bool,null,undefined,smbol,bigint
//reference(non-primitive)
//array,objects,functions
const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id===anotherId);

const bignum=34567893863875844n
console.log(typeof(bignum));

