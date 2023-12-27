

console.log("Tutorials on loops");

//for loop
let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}


//for in loop
let obj = {
    name: "ayush",
    role : "developer",
    company : "biharengineering"

}

for (const key in obj) {
    const element = obj[key];
    console.log(key , element);
}

//for of loop
//iterating each char of Ayush
for(const iterator of "Ayush" ){
    console.log(iterator);
}


//while loop 
 let i = 1;
 while(i<7){
    console.log(i);
    i++;
 }

//Do while 
//run atleast one time wheather condition is true or false
 i = 1;
do{
    console.log(i);
    i++
}
while(i<1);