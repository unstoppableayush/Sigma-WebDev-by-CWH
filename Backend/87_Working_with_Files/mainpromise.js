import fs from "fs/promises"

//reading the file using fs promise
let a =await fs.readFile("ayush.txt");

//we can use await inside module , no need to use async function 


//writing the file using fs promise
let b =await fs.writeFile("ayush.txt", "\n\n This is amazing promise");


//appending in the file
b =await fs.appendFile("ayush.txt", "\n\n Appending the text");

console.log(a.toString(),b);
