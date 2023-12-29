//write a program to calculate factorial of a number using reduce
//and using for loops

let num = 6 ;
//using recursion
function fact(num){
    if(num === 0){
        return 1;
    }
     return num * fact(num - 1);
 
}
console.log(fact(num));

//using loop

let temp = 1;
for(let i = 1 ; i<= num ; i++){   
    temp = temp * i;
}
console.log(temp);

//using reduce
