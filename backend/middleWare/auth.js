import jwt from "jsonwebtoken";

const authMiddleWare = async (req, res, next)=>{

    const {token} = req.headers;  
  
    if(!token){
       return res.json({success:false,message:"Not Authorized, Login again"})
    }

    try{
            const token_decode = jwt.verify(token, "secret_ecom");

             req.body.userId = token_decode.user.id;
             next();

    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

export default authMiddleWare;