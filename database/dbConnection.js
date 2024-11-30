import mongoose from "mongoose";

export const dbConnection = () => {
  const uri = process.env.MONGO_URI;
  
  if (!uri) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1); // Exit the process if MONGO_URI is missing
  }

  mongoose
    .connect(uri, { dbName:"RESTURANT" })
    .then(() => {
      console.log("Connected to database successfully!");
      
    })
    .catch((err) => {
      console.error(`Some error occurred while connecting to the database: ${err.message}`);
    });
};
