// STANDARD APPROCH

// require('dotenv').config({path:'./env'}) //way 1 to import dotenv

// import dotenv from "dotenv" // way 2 to import dotenv
// dotenv.config({
//     path:'./env'
// }) 


import connectDB from "./db/index.js"
import {app} from "./app.js"


connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Server failed error:",error)
})









/*
ONE APPROCH ONE FILE
import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import express from "express"
const app = express()
const PORT = proess.env.PORT

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROR",error)
            throw error
        })

        app.listen(PORT,()=>{
            console.log(`App is listening on port ${PORT}`)
        })
    }catch(error){
        console.log("Error",error)
        throw err
    }
})()
*/