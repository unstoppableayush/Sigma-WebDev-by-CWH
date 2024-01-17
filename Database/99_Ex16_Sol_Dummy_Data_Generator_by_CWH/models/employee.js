// const { default: mongoose, model } = require("mongoose");
const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean 
});

const Employee = mongoose.model('Employee' ,employeeSchema)
module.exports = Employee