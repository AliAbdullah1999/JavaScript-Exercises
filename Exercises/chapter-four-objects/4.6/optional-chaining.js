// const user={};
// // console.log(user.address ? user.address.street:undefined)
// const document={};
// // let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
// let html =document.querySelector('.elem')?.innerHTML;
// // console.log(user.address&& user.address.street && user.address.street.name)
// console.log(user?.address?.street);
// const user = null;
// const x = 0;

// user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

// console.log(x); // 0, value not incremented
const userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  const userGuest = {};
  userGuest.admin?.(); // nothing happens (no such method)
  userAdmin.admin?.(); // I am admin
  
//   userGuest.admin?.(); // nothing happens (no such method)