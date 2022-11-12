const { default: mongoose } = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true,'email address is required'],
        validate:[validator.isEmail, 'Provide a valid email'],
        lowercase:true,
        unique: true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        validate:{
            validator:(value)=>
            validator.isStrongPassword(value,{
                minLength:6,
                minLowerCse:3,
                minNumber:1,
                minSymbols:1
            }),
            message:'PASSWORD {VALUE} is not strong'
        }
    },
    confirmPassword:{
        type:String,
        required:[true,'Confirm password is required'],
        validate:{
            validator:function (value){
                  return  value === this.password
            },
            message:'password does not match'
        }
    },
    role:{
        type:String,
        enum:['buyer','store-manager','adming'],
        default:'buyer'
    },
    firstName:{
        type:String,
        required:[true,'first name is not provided'],
    },
    lastName:{
        type:String,
        required:[true,'last name is not provided'],
    },
    contactNumber:{
        type:String,
        validate:[validator.isMobilePhone,'provide right phone number']
    },
    shippingAddress:String,
    presentAddress:String,
    permanentAddress:String,
    imageURL:{
        type:String,
        validate:[validator.isURL,'provide right image utl']
    },
    status:{
        type:String,
        default:'active',
        enum:['active','inactive','blocked']
    },
    passwordChangedAt:Date,
    passwordResetToken:String,
    passwordResetExpires:Date

},{
    timestamps:true
});


userSchema.pre('save',function (next){
  const salt = 10;
  const password = this.password;
  const hashPassword = bcrypt.hashSync(password, salt);

  this.password = hashPassword;
  this.confirmPassword= undefined;

  next();

});


// compare method in schema

userSchema.methods.comparePassword=function (password,hash){

    const isPasswordValid = bcrypt.compareSync(password,hash)
    return isPasswordValid;
}



const User = mongoose.model('User',userSchema);


module.exports= User;