// //Operators in js
// console.log('Operators in Js')
// //Arithmetic Operators
// let a =45;
// let b =4;
// console.log('Arithmetic Operators')
// console.log('a+b',a+b)
// console.log('a-b',a-b)
// console.log('a*b',a*b)
// console.log('a/b',a/b)
// console.log('a%b',a%b)
// //First prints then increments
// console.log('a++',a++)
// //first increments then prints
// console.log('++a',++a)
// //------------------------------------------------
// //Assignment Operators
// a = 10
// a += 5
// console.log(a)
// //Comparison Operators
// let c1 =5;
// let c2 = 6;
// console.log('comparing c1 and c2 is :',c1==c2)
// console.log('comparing c1 and c2 is :',c1!=c2)
// console.log('comparing c1 and c2 is :',c1===c2)
// console.log('comparing c1 and c2 is :',c1!==c2)
// //Logical Operators
// //logical operators operate on booleans
// x=5;
// y=6;
// console.log(x>y && x==5)
// console.log(x>y || x==5)
//Conditional Expressions
//If condition,if else if
let a = 50
if(a>2){
    console.log('This number is valid for all recordings')
}
else{
    console.log('This is not valid for all recordings')
}
//switch statement
let name = 'Ali';
switch(name){
    case 'Hasam':
        console.log('The name is Hasam');
        break;
    case 'Hashim':
        console.log('The name is Hashim');
        break;
    case 'Ali':
        console.log('The name is Ali');
        break;
}
console.log('done')
//Ternary Operators
console.log('the value of a is ',(a<18? 'not_acceptable':'acceptable'))
