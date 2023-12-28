/*

=> Arrays are mutable but string not
=> typeOf(arr) -> object

Array Methods
--------------------
1. toString() -> convert array to string
2. join() -> joins all array elements using a sperator
3. pop() -> removes last element ans return it
4. push() -> Add a new element at last
5. shift()  -> removes first element and return it
6. unShift() -> Adds element to the begining return new array length
7. delete -> delete array element using indexing
8. concat() -> used to join arrays
9. sort() -> sort  an array in a order and modifies the array
10. splice() -> splice can be used to add new items to array
11. slice() -> slices out a piece from an array
             // it creates a new array
12. reverse() -> Reverse the elements in the source 
                array





*/


let arr = [1 , 2 ,3 ,4 , 5 ,7];
//index    0 , 1 ,2 , 3 ,4 ,5

console.log(arr , typeof arr);
console.log(arr.length);

arr[0] = 55; //mutable
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.toString()); // Array as string
console.log(arr.join(" and ")); // Joining the array with and

var pop = arr.pop();
console.log(pop); //pop last element
console.log(arr);

 arr.push("Ayush"); //push element to last 
console.log(arr);

var shift = arr.shift(); //removes first element and returns it
console.log(shift); 

arr.unshift("Unshifted"); //add element to the beginning
console.log(arr);


delete arr[6] ; //deleted the element 
//memory is allocated but value is not assigned there

console.log(arr[6]);

let a1= [1 ,2 , 3];
let a2 = [4, 5 , 6];
let a3 = [ 7 , 8 , 9];

console.log(a1.concat(a2 , a3)); // joins the array
//return a new array , doesnot change existing array

let a4= [2 ,1 , 4];
console.log(a4.sort()); //modifies original array
console.log(a4);

let num = [1, 2 , 3, 4 ,5];
num.splice(1,2);  //deleted the 2 elements from 1 index
console.log(num);  
num.splice(1 , 3 , 22 , 33); //adding the elements
console.log(num);

const num1 = [ 1, 2, 3 ,45 ,6 ];
console.log(num1.slice(2)); //slice the array and returns it


console.log(num1.reverse()); //reverse the elements or array


//Lopping through arrays
