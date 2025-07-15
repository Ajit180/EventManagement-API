import mongoose from 'mongoose';
import { DB } from './serverconfig.js';


export const connectDB = async()=>{

    try {
      await mongoose.connect(DB);
      console.log(`Connected to the Database`);
        
    } catch (error) {
        console.log("Error in Connecting to the mongodb",error);
    }
}