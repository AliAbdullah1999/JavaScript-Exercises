// const id =Symbol('is')
//its speciality is that it is kind of a unique identifier
// console.log(id)
// console.log(typeof(id))
//Hidden properties
const user = { 
    name: "John",
    // age:25,
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
//   user[id] = 2;
  
  console.log( user[id] );