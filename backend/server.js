import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';

// App Config
const app = express();
const port = process.env.PORT || 3000;
connectDB();

// MiddleWares 
app.use(express.json());
app.use(cors());

// API Endpoints
app.get('/',(req,res)=>{
    res.send("API WORKING")
});

app.listen(port, ()=> console.log("Server Started on Port : "+ port));