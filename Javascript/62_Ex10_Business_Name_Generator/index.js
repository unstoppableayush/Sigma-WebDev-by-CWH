/*
Create a business name generator by 
combining list of adjectives and shop and
other word

Rule - Don't use Array

Ajectives:
Crazy 
Amazing
Fire

Shop Name :
Engine
Foods
Garments

Another Word :
Bros
Limited
Hub

My Approch :
Genreate 3 random no less than 3 and gettting ceil value
making three functions for diffrent names
return the name according to random no


*/

var ran_no_1 = Math.ceil(Math.random()*3);
var ran_no_2 = Math.ceil(Math.random()*3);
var ran_no_3 = Math.ceil(Math.random()*3);

function adjectives(no){
    switch(no){
        case 1: return "Crazy";
                break;
        case 2: return "Amazing";
                break;
        case 3: return "Fire";
                break ;
        default:
            return "No Name"
    }
}

function shop_name(no){
    switch(no){
        case 1: return "Engine";
                break;
        case 2: return "Foods";
                break;
        case 3: return "Garments";
                break ;
        default:
            return "No Name"
    }
}

function another_name(no){
    switch(no){
        case 1: return "Bros";
                break;
        case 2: return "Limited";
                break;
        case 3: return "Hub";
                break ;
        default:
            return "No Name"
    }
}

const adj = adjectives(ran_no_1);
const shop = shop_name(ran_no_2);
const another = another_name(ran_no_3);

console.log("Bussiness Name : "+adj + " " +shop + " " +another);

