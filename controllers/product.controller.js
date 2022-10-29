const Product = require('../models/product');
const { createProductService, getProductService, updateProductService, updateBulkProductService } = require('../services/product.service');

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

 // products update

const updateProduct = async(req,res)=>{

    const {id}= req.params;

    try {
  
        const result = await updateProductService(req.body,id)
    
        res.status(200).json({
          success:true,
          message:'Data updated successfully',
          data:result
          
        });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Data is not updated',
            message:err.message
        })
    }
    }
    // products bulk update 
const BulkUpdateProduct = async(req,res)=>{
   
    try {
  
        const result = await updateBulkProductService(req.body)
    
        res.status(200).json({
          success:true,
          message:'Datas updated successfully',
          data:result
          
        });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Datas is not updated',
            message:err.message
        })
    }
    }





module.exports={
        saveProduct,
        getProducts,
        updateProduct,
        BulkUpdateProduct
    
    }