const fs = require("fs")
// console.log(fs);

console.log("starting");

// fs.writeFileSync("ayush.txt" ,"Ayush is a good boy");


fs.writeFile("Ayush2.txt" , "Ayush is a good boy 2" ,()=>{
    console.log("done");

    fs.readFile("Ayush2.txt" ,(error , data)=>{
        console.log(error,data);
        console.log(error,data.toString());
    });

})

fs.appendFile("Ayush2.txt","Appending the data" ,(e,d)=>{
    console.log(d);
} )

//callback hell

console.log("ending");