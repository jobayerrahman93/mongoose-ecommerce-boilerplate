
const jwt = require('jsonwebtoken');
const {promisify} = require ('util')

module.exports= async(req,res,next)=>{

    const token = req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(403).json({
            success:false,
            message:'you did not login',
            info:err.message
        });
    }

    const decoded = await promisify(jwt.verify)(token,process.env.SECRET_TOKEN);

    req.user= decoded;

    next();

}