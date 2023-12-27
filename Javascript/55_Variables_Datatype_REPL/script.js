console.log("This is tutorial 55");

let a = 5;
let b = 6;
let c = "Ayush";
let _a = "Harry";

//var 55ok = "Rohan";  //not allowed

console.log(a + b + 8);
console.log(typeof a , typeof b , typeof c);

{
    let a = 66;
    console.log(a);
    // we can't acces the value of a outside because it
    // is inside block and it is a block scoped
}

console.log(a);  //acess to the global scoped variable

const num = 10;
// num = num + 1;  // not allowed
console.log(num);

const num1 = 7 ;  //must be intialized at the time of declration
console.log(num1);


let x= "Ayush";
let y=2;
let z =3.55 ;
const p = true ;
let q = undefined ; // not good to use
let r = null;
console.log(x, y , z , p , q , r);
console.log(typeof x, typeof y , typeof z , typeof p , typeof q , typeof r);


// Object

const object = {
    name : "Ayush",
    roll_no : 22463,
    sem : "5th" ,
    is_handsome : true
}
//Altering the object

object.salary = "100 crores"

console.log(object);
