async function sleep(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000);
    })
}

// let a = await sleep();
// let b = await sleep();
// gives error because awit should be in inside async function

//IIFE -> Immediately Invoked Function Expression
(
    async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b);

    //Desctructing
    let [x, y ,...rest] = [1 , 5 , 7 , 8 , 9 , 10]
    console.log(x , y , rest);

    let [q , p] =[1 , 5 ,7]
    console.log( x, y); 
    // 1 is assigned to q and 5 is assigned to y

    let obj ={
        j:1,
        k:2,
        l:3
    }

    let {j,k} = obj;
    console.log(j,k);

    //spread syntax
    function sum(a , b ,c){
        return a+b+c;
    }

    let arr = [ 1 , 4 ,6];
    console.log(sum(arr[0] , arr[1] , arr[2]));
    console.log(sum(...arr));

    }

   
)()