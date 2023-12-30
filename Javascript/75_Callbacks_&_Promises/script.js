console.log("Ayush is hacker");

setTimeout( () => {
    console.log("I am inside settimeout");
},2000);
setTimeout( () => {
    console.log("I am inside settimeout 0");
},0);

console.log("The End"); 

const callback = (arg) => {
    console.log(arg);
}



const loadScript = (src , callback) => {
    let sc = document.createElement("script");
    sc.src = src ;
    sc.onload = callback("Ayush");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);