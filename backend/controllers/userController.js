import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel";

//lsa hkml don`t touch////////////////////////////////////////////////////////////
/*const createToken = (id) => {
    return jwt.sign({id},)
}*/

//route for user login
const loginUser = async (req, res) => {};

//route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking user already exists or not
    const exists =await userModel.findOne({email})

    if (exists){
        return res.json({success:false, message:"User already exists"})
    }

    //validate email formate& strong pass
    if(!validator.isEmail(email)){
        return res.json({success:false, message:"Please enter a valid email"})
    }
    if(!password.length < 8){
        return res.json({success:false, message:"Please enter a strong password"})
    }

    //hashing user password
    const salt =await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)


    const newUser = new userModel({
        name,
        email,
        password:hashedPassword
    })

    const user = await newUser.save() 

    //lsa hkml don`t touch////////////////////////////////////////////////////////////
    /*const token =*/ 



  } catch (error) {}
};

//route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
