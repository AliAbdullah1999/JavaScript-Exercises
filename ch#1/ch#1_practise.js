//Chapter 1
//Question 1
let a = 'Ali'
let b =24
console.log(a + b)
//Question 2
console.log(typeof (a+b))
//Question 3
//No you cant change the value of attributes of an object
const family = {
    father:'Shakil',
    Mother:'Shakila'
}
console.log(family)
//Adding one more key value pair in the object family
family['Son'] ="Hadi"
console.log(family)
//Question 5(Word Meaning Dictionary)
const dict = {
    appreciate :'recognize the full worth of.',
    instigate :'bring about or initiate (an action or event).',
    fluctuate :'rise and fall irregularly in number or amount.',
    rinse :'wash (something) with clean water to remove soap, detergent, dirt, or impurities.',
    delicate :'very fine in texture or structure; of intricate workmanship or quality.'
}
console.log('The meaning of fluctuate is:',dict.fluctuate)