const { default: mongoose } = require("mongoose");
const validator = require('validator');
const {ObjectId} = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: [true,'provide category name'],
        unique: true,
        lowercase:true,
    },
    description: String,
    imageUrl:{
       
        validate:[validator.isUrl,"Please provide a valid image url"]
    },
    website:{
        type:String,
        validate:[validator.isUrl,'Please provide a valid website']
    },
    location:String,
    products:[{
        type:ObjectId,
        ref:"Product"
    }],
    
},{
    timestamps:true
});


const Category = mongoose.model("Category",categorySchema);

module.exports = Category;