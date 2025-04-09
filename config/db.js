import mongoose from "mongoose";
import { Condiment } from "next/font/google";
import { cache } from "react";

let cached = global.mongoose
if(!cached){
    cached =global.mongoose = { conn:null , Promise:null}
}

async function connectDB(params) {
if (cached.conn){
    return cached.conn
}
if (!cached.promise){
    const opts ={
        buffercommands:false
    }

    cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then(mongoose => {
        return mongoose
    })
}
cached.conn = await cached.promise
return cached.conn
}