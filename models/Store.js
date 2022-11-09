const { default: mongoose } = require("mongoose");
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        enum:{
            values:["dhaka","bogura","rajshahi"],
            message: "{VALUE} is not a valid name"
        },
        required: [true,'provide prouduct name'],
        unique: true,
        lowercase:true,
    },
    description: String,
   
    manager:[{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:"User"
        }
    }],
    status:{
        type:String,
        enum:['active','inactive'],
        default:"active"
    }, 
   
}

,{
    timestamps:true
});



const Store = mongoose.model("Store",storeSchema);

module.exports = Store;