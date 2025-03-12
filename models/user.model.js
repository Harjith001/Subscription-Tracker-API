import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'User name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50
    },
    email: {
        type: String,
        required: [true,'Email id is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please enter a valid email id']
    },
    password:{
        type: String,
        required: [true,'User password is required'],
        minLength: 6,

    }
}, {timestamps: true});


const User = mongoose.model('User', userSchema);


export default User;