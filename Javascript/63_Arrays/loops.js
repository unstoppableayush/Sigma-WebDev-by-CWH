/*
Looping Through Arrays
--------------------------------


*/


let a = [ 1 , 2 ,3 , 4 ,5];

//for loop
for (let idx = 0; idx < a.length; idx++) {
    const element = a[idx];
    console.log(element);
}


//for each loop
a.forEach((value , index , arr) => {
        console.log(value , index , arr);
})

//for in
let object ={
    a : 1,
    b: 2 ,
    c: 3
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key ,element);
    }
}

//for of
// iterates the array elements
for (const iterator of a) {
    console.log(iterator);
}