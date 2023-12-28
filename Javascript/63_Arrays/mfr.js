//Map Filter Reduce
let arr = [ 1 ,13 , 5 , 7 , 11];

let newArr = []

for(let idx =0 ; idx < arr.length ; idx++){
    const ele = arr[idx];
    newArr.push(ele**2);
}

console.log(newArr);

let newArr1  = arr.map ( (e) => {
    return e**2;
});

console.log(newArr1); //same thing done by map

const greaterThanSeven = (e) => {
    if(e>7){
        return true;
    }
    return false;
}
console.log(newArr.filter(greaterThanSeven));

let arr2 = [ 1, 2 ,3 , 4 , 5 , 6];
const red = (a , b) =>{
    return a+b;
}

console.log(arr2.reduce(red)); //apply on all the array values and return a value

console.log(Array.from("Ayush"));// create an array from any other object
