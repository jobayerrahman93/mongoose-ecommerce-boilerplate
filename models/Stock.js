const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');


// Stock schema design

const stockSchema = mongoose.Schema({
    productId:{
        type:ObjectId,
        ref:"Product",
        required:true
    },
    name:{
        type: String,
        required:[true,'provide a name for this product'],
        lowercase:true,
        trim:true,
        unique:true,
        minLength:[3,'name must be atleast 3 characters'],
        maxLength:[200,'name is too large'],
    },
    description:{
        type:String,
        required: [true,'provide description']
    },
    unit:{
        type:String,
        required: true,
        enum:{
            values:['kg','litre','pcs','bag'],
            message:"unit value can't be {VALUE}, must be kg/litre/pcs/bag"
        }
    },
    imgUrls:[{ 
        type:Number,
        required:true,
        validate:{
            validator:(value)=>{
                    
                if(!Array.isArray(value)){
                    return false
                }
                let isValid = true;
                 value.forEach(img=>{
                        if(!validator.isURL(img)){
                            isValid=false
                        }
                 });

                 return isValid
            }
        },
        message:"Please provide valid image urls"
    }],
    price:{
        type:Number,
        required: true,
        min:[0,"Price can't be negative"]
    },
    quantity:{
        type:Number,
        required: true,
        min:[0,"Price can't be negative"]
    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        name:{
            type:String,
            required: true
        },
        id:{
            type:ObjectId,
            ref:"Brand",
            required:true
        }
    },
    status:{
        type:String,
        enum:{
            values:['in-stock','out-of-stock','discontinued'],
            message:"status can't be {VALUE}"
        },

    required:true
    },
    store:{
        name:{
            type:String,
            required: true,
            lowercase:true,
            enum:{
                values:['dhaka','bogura','rajshahi'],
                message: "Store name can't be {VALUE}"
            }

        },
        id:{
            type:ObjectId,
            ref:"Store",
            required:true
        }
    },
    suppliedBy:{
        name:{
            type:String,
            required: [true,"Please provide a supplier name"],
            lowercase:true,    

        },
        id:{
            type:ObjectId,
            ref:"Supplier",
            required:true
        }
    }
   

},{
    timestamp:true
});



// model create
const Stock = mongoose.model("Stock",stockSchema);

module.exports = Stock;



