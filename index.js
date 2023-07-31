// console.log('This contains code for ultimate learning process')
// var a = 67
// console.log(a)
// a ='Hashim'
// console.log( a)
//Difference between var,let and const
//giving values a constant variable throws an error that the varaible name is already chosen as a constant
//try not to use var instead use const and let simultaneously
//primitive datatypes in javascript(there are seven null,number, symbol,String,Boolean,Bigint,Undefined)
//primitives and objects
let a = null;
let b = 355;
let c = true;//Can also be false
let d = BigInt("567")
let e = 'Ali'
let f =Symbol('I am a nice symbol')
let g =undefined
console.log(a,b,c,d,f,g)
console.log(typeof d)
//objects in javascript(key value pairs,mapping can be done)
const item ={
    'Name':'Ali_Abdullah',
    'Adult':false,
    'Age':24

}
console.log(item)