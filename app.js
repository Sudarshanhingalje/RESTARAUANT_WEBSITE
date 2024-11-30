import express from "express";

import cors from "cors";

import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js"; 
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });



const app = express();
app.use(cors({
     origin: 'http://localhost:5174',
    methods: ["POST"],
    credentials: true,
    
  })
);
 // This handles OPTIONS requests for all routes


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World Again!",
  });
});

// Database connection
dbConnection();


// Error middleware
app.use(errorMiddleware);

export default app;
