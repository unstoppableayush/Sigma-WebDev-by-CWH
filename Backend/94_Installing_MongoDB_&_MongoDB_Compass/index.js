/*
learned to connect database

Commands Runned
-----------------
show databases
Sigma    8.00 KiB
admin   40.00 KiB
config  72.00 KiB
local   72.00 KiB
shopDB  72.00 KiB
use Sigma
switched to db Sigma
db.Courses.find()
{
  _id: ObjectId("65a2c17f8100095268cf22c3")
}
db.Courses.find()
{
  _id: ObjectId("65a2c2968100095268cf22c6"),
  name: 'Web Development',
  price: '20000',
  Instructor: 'Unstoppable'
}
db.Courses.insertOne({name:javascript})

ReferenceError: javascript is not defined
db.Courses.insertOne({name:"javascript"})


Downloaded the mongo db for VS Code Extension
*/