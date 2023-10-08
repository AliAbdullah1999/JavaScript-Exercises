// // let obj ={}
// // const anotherObj = {}
// // // console.log(obj)
// // obj =145
// // anotherObj[obj] = 123
// // console.log(obj)
// // console.log(anotherObj[obj])
// const user ={
//     name :'Ali-Abdullah',
//     money : 5000,
//     [Symbol.toPrimitive](hint){
//         console.log(`hint:${hint}`)
//         return hint =='strings' ? `{name:'${this.name}'}`: this.money
//     }
// }
// console.log(user)
// //when the operator is not sure what data type to expect then it returns the hind == default
// //when the operator gets an object as input then it returns the hint = default
// //also when an object is compared with a number or a string then the hint is again default
// // if (user == 1){
// //     console.log(hint)
// // }
// //comparing object with number 
// // if (user > 25){
// //     console.log(hint)
// // }
// //conversion to string
// stringConv = (user.toString() === user)
// console.log(stringConv)
// compValue = (user.valueOf() === user)
// console.log(compValue)
// // console.log(+user)
// // console.log(user + 2600)

// const user1 ={
//     name :'Ali-Abdullah',
//     money : 5000,
//     // [Symbol.toPrimitive](hint){
//     //     console.log(`hint:${hint}`)
//     //     return hint =='strings' ? `{name:'${this.name}'}`: this.money
//     // }
//     toString(){
//         return `{name: "${this.name}"}`
//     },
//     // valueOf(){
//     //     return this.money
//     // }
// }
// console.log(user)
// // console.log(+user)
// console.log(user + 15000)
//here in this object we are returning a string but tostring converts it to a number primitive type
const mult ={
    toString(){
        return '2'
    }
}
console.log(mult * 2)
//here in this object we are returning 2 and then we will add or concatenate it with other number(in javascript numbers are also taken into account as strings)
const add ={
    toString(){
        return "2"
    }
}
console.log(add + 2)