
//Nodes -> text , comments , 
//Element -> html elements

console.log(document.body);  
//page body as js object

console.log(document.body.childNodes);
//gives child nodes

console.log(document.body.childNodes[0]);
//give text node

//first give text node then child node if code is wriiten in format
//new line takes as a text

console.log(document.body.childNodes[1]);
//give first child node

console.log(document.body.childNodes[1].childNodes);
//give child nodes of first child node

const cont = document.body.childNodes[1];

console.log(cont.firstChild);
//gives text node

console.log(cont.lastChild);
//also give text

console.log(cont.firstElementChild);
//gives first child element

console.log(cont.lastElementChild);
//gives last element child

cont.lastElementChild.style.backgroundColor = "green";
//chnaged the backgorund color of last child element

console.log(cont.lastElementChild.parentElement);
//gives parent eleemnt of that node

console.log(document.body.firstElementChild.children[3].nextElementSibling);
//next element sibllling

console.log(document.body.firstElementChild.children[3].previousElementSibling);
//previous element sibling