const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { Timestamp } = require('mongodb');


// middleware
app.use(cors());
app.use(express.json());


// product schema design

const productSchema = mongoose.Schema({
    name:{
        type:string,
        required:[true,'provide product name'],
        trim:true,
        minLength:[3,'name must be atleast 3 characters'],
        maxLength:[200,'name is too large'],
    },
    description:{
        type:string,
        required: [true,'provide description']
    },
    price:{
        type:Number,
        required: true,
        min:[0,'price cannot be negative']
    },
    unit:{
        type:string,
        required: true,
        enum:{
            value:['kg','litre','pcs'],
            message:"unit value can't be {VALUE}, must be kg/litre/pcs"
        }
    },
    quantity:{
        type:number,
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
        type:string,
        required:true,
        enum:{
            value:['in-stock','out-of-stock','discontinued'],
            message:"status  can't be {VALUE}, must be in-stock/out-of-stock/discontinued"

        }
    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier"
    },
    categories:[{
        name: {
            type:string,
            required:true
        },
        _id: mongoose.Schema.Types.ObjectId
    }]

},{
    Timestamp:true
})

app.get('/',(req,res)=>{
    res.send('server is running');
})

module.exports= app;