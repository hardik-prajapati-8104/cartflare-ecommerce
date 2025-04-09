import mongoose from "mongoose";

const userschema = new mongoose.schema({
    _id:{type : string, required:true},
    name: {type : string, required:true},
    email: {type : string, required:true, unique:true},
    imageurl: {type : string, required:true},
    cartItems: {type : Object, default:{}},
}, {minimize: false})

const user = mongoose.models.user || mongoose.model('user', userschema)

export default user