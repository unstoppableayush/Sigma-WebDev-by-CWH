/* create a hacking simulator with green background and it shows these messages with random delay of 1 to 7 seconds

    Intializing Hacking...
    Reading your Files...
    Password files Detected...
    Sending all passwords and personal files to server ...
    cleaning up...

    The three dots must blink so that it look like a real termial 

*/

let text = document.querySelector(".text");

let arr = ["Intializing Hacking" ,"Reading your Files" ,"Password files Detected" , "Sending all passwords and personal files to server" ,"cleaning up"];

function getRandomTime(){
    let time = Math.ceil(Math.random()*7);
    let timeinmili =time*1000;
    return timeinmili;
}

function getdot(data){
    let dot="";
    setTimeout(()=>{
        dot+=".";
        text.innerHTML=data+dot;
    },1000);
    setTimeout(()=>{
        dot+=".";
        text.innerHTML=data+dot;
    },2000);
    setTimeout(()=>{
        dot+=".";
        text.innerHTML=data+dot;
    },3000);
    setTimeout(()=>{
        dot="";
        text.innerHTML=data+dot;
    },4000);
    setTimeout(()=>{
        dot+=".";
        text.innerHTML=data+dot;
    },5000);
    setTimeout(()=>{
        dot+=".";
        text.innerHTML=data+dot;
    },6000);
    setTimeout(()=>{
        dot+=".";
        text.innerHTML=data+dot;
    },7000);
}

async function getData(txt){ 

    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(txt);
        },getRandomTime());
    });

}

async function main(){

    for( let i = 0 ; i < 5 ; i++){
        
        let data = await getData(arr[i]);
        getdot(data);

    }
}

main();







