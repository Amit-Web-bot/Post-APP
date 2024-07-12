import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    user:{
        type: String,
        required: true,
        lowercase: true
    },
    name:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: [8,"Password should be atleast 8 letter"],
        max: [24, "Password max length is 24"]
    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)