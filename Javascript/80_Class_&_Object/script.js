let obj = {
    a:1,
    b:"Ayush"
}
console.log(obj);

let animal ={
    eats:true
};

let rabbit = {
    jumps:true
};

rabbit.__proto__=animal;
//sets rabbit.[[ptototype]]= animal


class Animal{

    constructor(name){
        this.name = name;
        console.log("Object is created");
    }

    eats(){
        console.log("Kha rha hu");
    }

    jumps(){
        console.log("Kood rha hu")
    }
};

class Lion extends Animal{

    constructor(name){

        super(name) //calling super constructor
        console.log("Object is created and he is a lion ...");

    }

    eats(){//overiding

        console.log("Kha rha hu roar");

    }
}


let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

//a.eats()
//function calling through object

//a.jumps()
//function calling through object

console.log(l instanceof Lion);
console.log(l instanceof Animal);

//return true of object belongs to the class and any other inherited class

console.log(a instanceof Lion);
//returns false
