const { default: mongoose } = require("mongoose");
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const supplierSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        unique:true,
        required: [true,'provide a name'],
        maxLength:100,
        lowercase:true,
    },
    email:{
        type:String,
        lowercase: true,
        validate:[validator.isEmail,"Please provide a valid email"]
    },
    
    brand:{
        name:{
            type:String,
            required: true,
        },
        id:{
            type:ObjectId,
            ref: "Brand",
            required:true
        }

    },
    
    contactNumber:[{
        type:String,
        required: true,
        validate:{
            type:String,
            lowercase: true,
          
                validator:(value)=>{
                    return validator.isMobilePhone(value);
                },
                message:'Please provide a valid phone number '
        
        }}],
    emergencyContactNumber:[{
        type:String,
        required: true,
        validate:{
            type:String,
            lowercase: true,
                validator:(value)=>{
                    return validator.isMobilePhone(value);
                },
                message:'Please provide a valid phone number '
        
        }}],
        tradeLicenseNumber:{
            type:Number,
            required:[true,'provide a trade license number']
        },
        presentAddress:{
            type:String,
            required:[true,'provide  present address']
        },
        permanentAddress:{
            type:String,
            required:[true,'provide permanent address']
        },
        location:{
            type:String,
            required:[true,'provide permanent address']
        },
        imgUrl:{
            type:String,
            validate:[validator.isURL,"Please provide valid image urls"]
        },
        nationalImgUrl:{
            type:String,
            validate:[validator.isURL,"Please provide valid national image urls"]
        },
    
    status:{
        type:String,
        enum:['active','inactive'],
        default:"active"
    }
}
// ,{
//     timestamps:true
// }
);



const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;