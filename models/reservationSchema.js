import e from "express";
import mongoose from "mongoose";
import validator from "validator"; // for email verification

const reservationSchema= new mongoose.Schema({
    firstName:{
        type : String,
        required:true,
        miniLength:[3,"first name atleast three characters"],
        maxLength:[30,"first name not exceed thirty characters"],
    },
    lastName:{
        type : String,
        required:true,
        miniLength:[3,"last name atleast three characters"],
        maxLength:[30,"last name not exceed thirty characters"],
    },
    email:{
        type : String,
        required:true,
       validate:[validator.isEmail,"Provide valide email id"],
    },
    phone:{
        type:String,
        required:true,
        miniLength:[10,"Phone no must contain 10 digit"],
        maxLength:[10,"Phone no must contain 10 digit"],

    },
    time:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
});
export const Reservation=mongoose.model("Reservation", reservationSchema);
