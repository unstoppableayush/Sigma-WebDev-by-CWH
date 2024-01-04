
// 1. The Magical Sorting Hat:

let students = ["Ayush" , "Abhishek" ,"Manash" , "Vishal" , "Sourabh" , "Nitish" , "Raviranjan" , "Shivesh"];

let house = [];

for (const student of students){
    if(student.length < 6){
        house.push("Gryffindor")
    }
    else if(student.length < 8){
        house.push("Hufflepuff")
    }
    else if(student.length < 12){
        house.push("Ravenclaw")
    }
    else if(student.length >= 12){
        house.push("Slytherin");
    }
}

console.log(house);

// 2. The Double Trouble:

let ele = [2, 3, 4, 5, 5, 6, 7];


    try {

        for (let i = 0; i < ele.length; i++) {
        if (ele[i] === ele[i - 1]) {
            console.log("Consecutive Elements are Same");
            throw "Consecutive elements found at index " + i;
        } else {
            ele[i] *= 2;
        }
    }
    } catch (error) {
        if (typeof error === "string" && error.startsWith("Consecutive elements found")) {
            // Handle the error message if needed
            console.log(error);
        }
        // Continue processing the array
        ele[i] = ele[i];
    }


console.log(ele);


// let ele = [ 2, 3 ,4 , 5, 5 , 6 ,7];

// for(let i = 0 ; i< ele.length ; i++){

//     try{

//         if(ele[i] == ele[i-1]){
//             console.log("Consequtive Elements are Same");
//             throw i;
//         }
//         else
//         ele[i] = ele[i] * 2;
//     }
//     catch(index){
//         ele[i] = ele[i];
//     }
    
// }


// 3. The Mirror Mirror:

let string = "Ayush";

let rev = string.slice(4,4);

console.log(rev);