<<<<<<< HEAD
//rwan 5:56:17
import userRouter from "./routes/userRoute";

//api endpoints rwan 5:55:53, ahmed will create "app" so it may not work before that
app.use('/api/user',userRouter)

=======
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
>>>>>>> 43ba0015cf41b4009a71d6388425ad6408770133
