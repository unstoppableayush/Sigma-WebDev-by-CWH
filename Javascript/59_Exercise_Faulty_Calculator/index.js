/*
 Create a faulty calculator using javascript
 This faulty calculator does following :
 1. It performs wrong operation as follows:

    + ---> -
    * ---> +
    - ---> /
    / ---> **

    it performs wrong operation 10% of the times

*/

let num1 = Number(prompt("Enter first number :"));
let num2 =Number(prompt("Enter second number"));
let op = prompt("Enter operator");

let percent = Math.random() * 100;
console.log(percent);

function rightCal(a , b , operator ){
        
    switch(operator){
        case "+" :  console.log(a+b) ;
                   break;
        case "-" :  console.log(a/b) ;
                   break;
        case "*" :  console.log(a*b) ;
                   break;
        case "/" :  console.log(a**b) ;
                   break;
        case "**" : console.log(a%b) ;
                   break;
        case "%" : console.log(a **b);
                   break;
        default :
            console.log("Enter valid operator !");
            break;
        
    }
}

function faultyCal(a , b , operator ){
        
    switch(operator){
        case "+" :  console.log(a-b) ;
                   break;
        case "-" :  console.log(a/b) ;
                   break;
        case "*" :  console.log(a+b) ;
                   break;
        case "/" :  console.log(a-b) ;
                   break;
        case "**" : console.log(a**b) ;
                   break;
        case "%" : console.log(a %b);
                   break;
        default :
            console.log("Enter valid operator !");
            break;
        
    }
}
if(percent <= 10){
    

    console.log("Result is ")
    faultyCal(num1 , num2 , op);
}
else{
    
    console.log("Result is ")
    rightCal(num1 , num2 , op);
}
