const User = require("../models/User")

const signUpService = async (data)=>{

    const user = await User.create(data);

    return user;
}

const userFindService= async(email)=>{
    const user = await User.findOne({email});

    return user;
}


module.exports={
    signUpService,
    userFindService
}