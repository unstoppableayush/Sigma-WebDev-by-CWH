console.log("This is a String Tutorial");
let a= "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length); //gives array length
let real_name = "Ayush";
let friend = "Rohan";

console.log("His name is " + real_name + " and his friends name is "+friend);

/*
Template Literals -> Template literals use backticks instead of quotes to define a string
let name = `Ayush`;

=> With template literals it is possible to use both single as well as double quotes inside a string

let sentence = `The name "is" Ayush 's'`;

=> we can insert variables directly in template literal. This is called string interpolation.


*/

console.log(`His name is ${real_name} and His friend name is ${friend}`); //string interpolation
let sentence = `The name "is" Ayush 's'`;

console.log(sentence);

/*
Escape sequence character => 

    let name = 'Adanm D' Angelo'; //javascript misunderstand it

    Here we can use single quote escape sequence to solve the problem

    let name = 'Adam D \' Angelo';

    other escape sequnec characters
    \n -> NewLine
    \t -> Tab 
    \r -> Carrige return
*/
//let te_name = 'Adanm D' Angelo'; //javascript misunderstand it

let temp_name = 'Adam D \' Angelo';  //using escape sequence character
console.log(temp_name);

/*

 String Properties
    .length
    .toUpperCase()
    .toLowerCase()
*/
let b = " Ayush ";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

console.log(b.slice(1,4));
console.log(b.slice(1));

console.log(b.replace("h","hi")); //if two occurence then first occurence will be replaced

console.log(b.concat(" ",a));

console.log(b.trim()); //removes whitespaces

console.log(b); //strings are immutable (same as before)


//To explore more go to developer consloe and make a string and using . operator 
//we can explore the many different function of strings





