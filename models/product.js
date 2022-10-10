const mongoose = require('mongoose');

// product schema design

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'provide product name'],
        trim:true,
        minLength:[3,'name must be atleast 3 characters'],
        maxLength:[200,'name is too large'],
    },
    description:{
        type:String,
        required: [true,'provide description']
    },
    price:{
        type:Number,
        required: true,
        min:[0,'price cannot be negative']
    },
    unit:{
        type:String,
        required: true,
        enum:{
            values:['kg','litre','pcs'],
            message:"unit value can't be {VALUE}, must be kg/litre/pcs"
        }
    },
    quantity:{
        type:Number,
        required:true,
        min:0,
        validate:{
            validator:(val)=>{
                    const isInteger = Number.isInteger(val);
                    if(isInteger){
                        return true
                    }
                    else{
                        return false
                    }
            }
        },
        message:"Quantity must be an integer"
    },
    status:{
        type:String,
        required:true,
        enum:{
            values:['in-stock','out-of-stock','discontinued'],
            message:"status  can't be {VALUE}, must be in-stock/out-of-stock/discontinued"

        }
    },
    // supplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Supplier"
    // },
    // categories:[{
    //     name: {
    //         type:String,
    //         required:true
    //     },
    //     _id: mongoose.Schema.Types.ObjectId
    // }]

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



