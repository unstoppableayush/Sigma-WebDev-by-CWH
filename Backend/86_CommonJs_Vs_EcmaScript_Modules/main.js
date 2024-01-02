const http = require('node:http');  //default common js
const hostname = '127.0.0.1';

// import http from "http";         //module js


const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//importing modules

// import {a , b , d} from "./mymodule.js"  //named export
// console.log(a , b , d);

// import Ayush from "./mymodule.js"  //default export
// console.log(Ayush);

//no name required any name can be used in default export

const a = require("./mymodule2.js")
console.log(a);



console.log(__dirname);
console.log(__filename);

(function(exports , require , module , __filename , __dirname){

    //modules code actually lives 
    
})

//common js functions automaticlly wrapped inside this