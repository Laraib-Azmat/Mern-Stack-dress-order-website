import bcrypt from 'bcrypt';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import userModel from '../model/userModel.js';

const  loginUser = async(req,res)=>{
    let user = await userModel.findOne({email:req.body.email});
    if(user){
        const passCompare = await bcrypt.compare(req.body.password,user.password)
     
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }

            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true, token})
        }else{
            res.json({success:false, errors:"Wrong Password"})
        }
    }else{
        res.json({success:false, errors:"Wrong email Id"})
    }
}

// register user 

const registerUser = async (req,res)=>{
    let check  = await userModel.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false, errors:'existing user found with same email address'})
    }

           //validating email and strong password
           if(!validator.isEmail(req.body.email)){
            return  res.json({success:false, message:"Invalid email"})
        }

        if(req.body.password.length<8){
            return  res.json({success:false, message:"Enter Strong Password"})
        }

     //encrypt password
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password,salt);


    const user =  new userModel ({
        name:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true, token})
}

export {loginUser,registerUser}