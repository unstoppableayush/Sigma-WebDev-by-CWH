let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

// let sum = a+b;
// concat the two values


if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}

let sum = parseInt(a)+parseInt(b);
// converts to integer 

function main(){

    let x =1 ;
    try{
        console.log("The sum is ",sum*x);
        return true;
    }
    catch(error){
        console.log("Error aa gaya bhai");
    }
    finally{
        console.log("files are being closed and db connection is being closed");
    }

    // console.log("files are being closed and db connection is being closed");
    // not work if we return after try
    // if we have finally back then after return it will execute

}

let c = main();

