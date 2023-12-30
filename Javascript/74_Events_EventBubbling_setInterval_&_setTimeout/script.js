let button = document.getElementById("btn");

// button.addEventListener( "click" , ()=>{
//     alert("I was clicked");
// })

button.addEventListener( "dblclick" , ()=>{
    alert("I was double clicked");
})

document.addEventListener("keydown" , (e)=>{
    console.log(e.key ,e.keyCode);
})