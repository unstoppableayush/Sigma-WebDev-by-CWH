import path from "path"

let myPath = "A:\\Sigma_WebDev_by_CWH\\Backend\\87_Working_with_Files\\ayush.text";

// console.log(path);
//ayush
//gives mypath extension name
console.log(path.extname(myPath));

//current directory path of file
console.log(path.dirname(myPath));

//gives name of file
console.log(path.basename(myPath));

console.log(path.join("c:/" , "programs\\ayush.txt"));
