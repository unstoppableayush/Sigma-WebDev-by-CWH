
async function getData(){ 

    //after including async all operation 
    //will be performed parallely

    //simulating getting data from the server

    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve(455);
        },3500);
    });

}

//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled succesfully

async function getData1(){

    //simulating getting data from the server

    let x =await fetch('https://jsonplaceholder.typicode.com/todos/1') //returning the promise
      
    let data = await x.json();

    return data;

}


//post request using fetch 
async function getData2(){

    //simulating getting data from the server

    let x =await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });

    let data = await x.json();
    return data;

}



async function main(){

    console.log('Loading Modules');

    console.log("DO something");

    console.log("Load Data");

    let data =await getData2();  // to wait the async function we use await
    //it resolve the promise and gives data as well as removes  the promise chain

    console.log(data);

    console.log("process data");

    console.log("task 2");
}

main();



// data.then((v)=>{
//     console.log(data);

//     console.log("process data");

//     console.log("task 2");

//     //when fuilfill then all opration will perform
//     //this is a callback approch
//     //to solve this we can also use async await
//     // to getpout of callback problem
// })



