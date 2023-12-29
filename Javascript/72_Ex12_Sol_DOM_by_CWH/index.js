console.log("index.js intializing");
let boxes = document.getElementsByClassName("box");
console.log(boxes);

function getRandomColor(){
    let val1 = Math.ceil(Math.random()*255);
    let val2 = Math.ceil(Math.random()*255);
    let val3 = Math.ceil(Math.random()*255);

    return `rgb(${val1},${val2} , ${val3})`;

}

Array.from(boxes).forEach( e=>{
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
})
