const User = require("../models/User");
const { signUpService, loginService, userFind, userFindService } = require("../services/user.service");
const { generateToken } = require("../token");


const signup = async(req,res) =>{

  try {
    const result = await signUpService(req.body);

    res.status(200).json({
        success:true,
        message:'user succesfully signed'
        
    });
    
  } catch (err) {
    res.status(400).json({
        success:false,
        message:'user signup failed',
        info:err.message
    });
  }
}


const login= async(req,res) =>{

try {

    const {email,password}= req.body;

    if(!email || !password){

       return res.status(400).json({
            success:false,
            message:'email or login not provided',
           
        });
    }

// user find
    const user = await userFindService(email);

    if(!user){
      return  res.status(401).json({
            success:false,
             message:'user not found ! Please create account',
        });
    }



 const isPasswordValid = user.comparePassword(password,user.password);


 if(!isPasswordValid){
    return  res.status(403).json({
        success:false,
         message:'password is not correct',
    });
 }
 if(user.status !=='active'){
    return  res.status(403).json({
        success:false,
         message:'your account is not active yet',
    });
 }



 const token = generateToken(user);

 const {password:pwd,...others}=user.toObject();
   res.status(200).json({
        success:true,
        message:'succesfully logged in',
        data:{
            user:others,
            token
        }
        
    });

    
} catch (err) {
    res.status(401).json({
        success:false,
        message:'login failed',
        info:err.message
    });
}


}



module.exports={
    signup,
    login
}