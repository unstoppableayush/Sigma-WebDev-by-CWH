//Crud
use("CrudDb")

//Create

// db.createCollection("course")
// db.course.insertOne({
//     name:"Harry Web Dev Course",
//     price:"0",
//     assignments:12,
//     projects:"45"
// })

// db.course.insertMany([
//     {
//         "name": "Harry Web Dev Course",
//         "price": "Free",
//         "assignments": 15,
//         "projects": "30"
//     },
//     {
//         "name": "Advanced Web Development with Harry",
//         "price": "$99",
//         "assignments": 20,
//         "projects": "50"
//     },
//     {
//         "name": "Full Stack Mastery: Harry's Course",
//         "price": "$149",
//         "assignments": 18,
//         "projects": "40"
//     },
//     {
//         "name": "Web Development Essentials by Harry",
//         "price": "$79",
//         "assignments": 10,
//         "projects": "35"
//     },
//     {
//         "name": "Harry's Frontend Web Design Workshop",
//         "price": "$59",
//         "assignments": 12,
//         "projects": "25"
//     },
//     {
//         "name": "Harry's Comprehensive CSS Mastery",
//         "price": "$69",
//         "assignments": 14,
//         "projects": "42"
//     },
//     {
//         "name": "The Ultimate Web Developer Bootcamp",
//         "price": "$129",
//         "assignments": 25,
//         "projects": "60"
//     },
//     {
//         "name": "Modern Web Development with Harry",
//         "price": "$89",
//         "assignments": 22,
//         "projects": "48"
//     },
//     {
//         "name": "Responsive Web Design: Harry's Approach",
//         "price": "$109",
//         "assignments": 17,
//         "projects": "38"
//     },
//     {
//         "name": "Harry's Backend Development Masterclass",
//         "price": "$119",
//         "assignments": 19,
//         "projects": "55"
//     }
// ]
// )

//Read

let a = db.course.find({price:"$149"})
console.log(a);
console.log(a.count());
//gives how many documnets

// console.log(a.toArray())

//Update

// db.course.updateOne( {price: "$99"} , {$set:{price:"$0"}})

// db.course.updateMany( {price: "$99"} , {$set:{price:"$0"}})

//Delete

db.course.deleteOne({price:"$0"})
db.course.deleteMany({price:"$0"})