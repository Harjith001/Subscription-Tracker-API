import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('Define mongodb uri env variable');
}

const connectToDatabase = async ()=> {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`);
        
    }catch(error){
        console.log('Error connecting to the database',error);
        process.exit(1);
    }
}

export default connectToDatabase;