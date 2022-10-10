const Product = require('../models/product');
const { createProductService, getProductService } = require('../services/product.service');

// get products
const getProducts = async(req,res)=>{

    try {
     
     let count =0;
     const result = await getProductService();
     count = result.length;
     res.status(200).json({
         success:true,
         total:count,
         data:result
         
       });
 
 
    } catch (err) {
 
     res.status(400).json({
         success:false,
         message:'Data is not fetch properly',
         message:err.message
     })
     
    }
   }

// save products
const saveProduct = async(req,res)=>{

    try {
  
        const result = await createProductService(req.body);
        result.logger();
      
        res.status(200).json({
          success:true,
          message:'Data inserted successfully',
          data:result
          
        });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Data is not inserted',
            message:err.message
        })
    }
    }





module.exports={
        saveProduct,
        getProducts
    }