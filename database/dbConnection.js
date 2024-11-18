import mongoose from "mongoose";

export const dbConnection = ()=>
{
    mongoose.connect(process.env.MONGO_URL,{
        dbName:"RESTAURANT"

    }).then(()=>
    {
        console.log("connected db successfully ");
    }).catch((err)=>{
        console.log('error comes during connection');
    });
};