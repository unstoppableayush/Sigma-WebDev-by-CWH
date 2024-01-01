
console.log("Backend started");


//  node .\Backend\server.js
//command to run in backend

var slugify = require('slugify')

let a = slugify('some string') // some-string

console.log(a);

// if you prefer something other than '-' as separator
let b = slugify('some string', '_')  // some_string
console.log(b);