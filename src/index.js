import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

connectDB();


//another way to connect with mongoose through express
/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })


        app.listen(process.env.PORT, () => {
            console.log(`App listen on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error:", error)
        throw error
    }
})()*/