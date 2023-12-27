

function nice(name){
    console.log("Hey " + name + " you are nice");
    console.log("Hey " + name + " you are good");
    console.log("Hey " + name + " tshirt is nice !");
    console.log("Hey " + name + " laptop is awesome");
}

nice("Rhan");
nice("shivam");

console.log("Hey Ayush you are nice");
console.log("Hey Ayush you are good");
console.log("Hey Ayush your tshirt is nice !");
console.log("Hey Ayush your laptop is awesome");


function sum(a,b){
    // console.log(a + b);
    return a+b ;
}

let result1 = sum(3 , 5);
let result2 = sum(4 , 10);

console.log("The sum of these numbers is : ", result1);
console.log("The sum of these numbers is : ", result2);

//arrow function

const func1 = (x) =>{
        console.log("I am arrow function", x);
}
func1(34);
func1(67);