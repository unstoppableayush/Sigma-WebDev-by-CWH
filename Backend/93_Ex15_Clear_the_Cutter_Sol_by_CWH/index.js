/*
You have to write a Node.js program to clear clutter inside of
a directory and organize the contents of that directory
into different folders

for examples , these files become:

1.name.jpg
2.name.png
3.this.pdf
4.harry.zip
5.Rohan.zip
6.Cat.jpg
7.harry.pdf

this:
jpg/name.jpg , jpg/cat.jpg
png/name.png 
zip/harry.zip zip/Rohan.zip
*/
import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "A:\\Sigma_WebDev_by_CWH\\Backend\\93_Ex15_Clear_the_Cutter_Sol_by_CWH";

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("runnig for",item)
    let ext = item.split(".")[item.split(".").length - 1]
    if(ext !="js" && ext!="json" && item.split(".").length > 1){

        if(fsn.existsSync(path.join(basepath , ext))){
            //move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath , item),path.join(basepath , ext , item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath , item),path.join(basepath , ext , item))
        }
    }
}