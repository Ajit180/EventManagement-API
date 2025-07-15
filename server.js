import express from 'express'
import { connectDB } from './config/db.js';
import { PORT } from './config/serverconfig.js';
const app = express();



app.get('/',(req,res)=>{
    res.json({message:'Hello'});
})


app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
    connectDB();
})