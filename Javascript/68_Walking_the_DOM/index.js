

let boxes = document.getElementsByClassName("box");

console.log(boxes);

boxes[2].style.backgroundColor = "red";
document.getElementById("id").style.backgroundColor = "green";

document.querySelector(".box").style.backgroundColor = "yellow";
//select first element of box class

console.log(document.querySelectorAll(".box"));
//return html collection of all the elemnets of class box

document.querySelectorAll(".box").forEach( e =>{
    e.style.backgroundColor = "green";
})

document.getElementsByTagName("div");
//return html collection

const e = document.getElementsByTagName("div");
console.log(e[4].matches("#id"));
//returns true
//to check if lement matches the given css selector

console.log(e[3].closest("#id"));
//returns null if not matched
//look for nearest ancestor

console.log(e[3].closest(".container"));
//returns element if true

console.log(document.querySelector(".container").contains(e[2]));
//return true
//returns true if elemA is inside elemB
//or elemA = elemB

console.log(document.querySelector(".container").contains(e[0]));
//element contains itself return true

console.log(document.querySelector(".container").contains(document.querySelector("body")));
//return false 
//becoz body contains container
