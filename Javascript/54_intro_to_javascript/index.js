
alert("External Javscript");

console.log("Code is running");
console.log("Code is also running..");
console.log("code is looking like a wow");

var a = prompt("Enter your number");

console.log("Your number is "+a);

var isTrue=confirm("Are you sure you want to leave thepage and blast your computer");

if(isTrue){
    console.log("computer is blasting");
}
else{
    console.log("Your computer is not blasting");
}

//Changing the elements
document.title = "Hey Changing the Title"

document.body.style.backgroundColor = "red"