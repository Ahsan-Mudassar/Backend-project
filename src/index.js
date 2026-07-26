import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


const port = process.env.PORT || 3000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR:", error);
            throw error
        })

        app.listen(port, () => {
            console.log(`App was listening on port ${port}`)
        })
    }).catch((err) => {
        console.log("Mongodb connection failed", err)
    })











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