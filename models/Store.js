const { default: mongoose } = require("mongoose");
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: [true,'provide prouduct name'],
        unique: true,
        lowercase:true,
    },
    description: String,

    website:{
        type:String,
        validate:[validator.isUrl,'Please provide a valid website']
    },

   
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
    }
},{
    timestamps:true
});



const Store = mongoose.model("Store",storeSchema);

module.exports = Store;