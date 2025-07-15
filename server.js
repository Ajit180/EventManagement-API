import express from 'express'
import { connectDB } from './config/db.js';
import { PORT } from './config/serverconfig.js';
import eventRouter from './routes/routes.js'
const app = express();


app.use(express.json());

app.get('/',(req,res)=>{
    res.json({message:'Hello'});
})

app.use('/api',eventRouter);


app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`)
    connectDB();
})