const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const validator = require('validator');

// product schema design

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'provide product name'],
        lowercase:true,
        trim:true,
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
    category:{
        type:String,
        required:true
    }
   

},{
    Timestamp:true
});


// middleware pre/post

productSchema.pre('save',function(next){
    if(this.quantity === 0){
        this.status = 'out-of-stock'
    }
    next();
});

// productSchema.post('save',function(doc,next){

//     console.log('this is post middleware')
// next();
// })


// create instance for product schema

productSchema.methods.logger = function(){
    console.log(`data inserted successfully for ${this.name}`)
}

// model create
const Product = mongoose.model("Product",productSchema);

module.exports = Product;



