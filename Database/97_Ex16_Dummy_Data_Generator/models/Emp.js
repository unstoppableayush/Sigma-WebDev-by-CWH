import mongoose from "mongoose";

const employees = new mongoose.Schema({
    name:String,
    sallary:String,
    language:String,
    city:String,
    isManager:Boolean
});

export const Employee = mongoose.model('Employee' , employees);