
console.log(document.querySelector(".box").innerHTML);
//selecting first box and getting inner html

console.log(document.querySelector(".container").innerHTML);

console.log(document.querySelector(".container").innerText);
//gives inner text

console.log(document.querySelector(".container").outerHTML);
//continer itself and innerhtml 

console.log(document.querySelector(".container").tagName);
//gives tag name

console.log(document.querySelector(".container").textContent);
//gives text content inside the element

console.log(document.querySelector(".container").hidden);
//return false

console.log(document.querySelector(".container").hidden =true);
//return true and hides the element

console.log(document.querySelector(".container").hidden =false);

document.querySelector(".box").innerHTML = "Hey I'm Ayush";
//changed the innerhtml of box
console.log(document.querySelector(".box").innerHTML);

console.log(document.querySelector(".box").hasAttribute("style"))
//returns true
//method of check for existance of attribute

console.log(document.querySelector(".box").getAttribute);
//method to get the value of attribute

document.querySelector(".box").setAttribute("style" ,"display:inline");
//set the value of an attribute

console.log(document.querySelector(".box").attributes);
//gives all attrbutes of the element

document.querySelector(".box").removeAttribute("style");
//remove the style and changes the content as before

document.designMode= "on";
//changes the content of webiste temporary

let div = document.createElement("div");
div.innerHTML ="I have been inserted ";
div.setAttribute("class" , "created");
document.querySelector(".container").append(div);

document.querySelector(".container").before(div);
//inserted before

// let ele = document.querySelector(".container");
// ele.insertAjacentHTML("beforebegin","<b>I am under the Water. Please help me here too much raining...</b>");

console.log(document.querySelector(".container").classList);
//gives class list

console.log(document.querySelector(".container").className);
//gives class name

document.querySelector(".container").classList.add("Ayush");
//added to class list
console.log(document.querySelector(".container").classList);

document.querySelector(".container").classList.remove("Ayush");
//removing Ayush from class list
console.log(document.querySelector(".container").classList);

document.querySelector(".container").classList.toggle("Ayush");
//toggle - means adding and removing


















