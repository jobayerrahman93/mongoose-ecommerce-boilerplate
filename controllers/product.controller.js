const Product = require('../models/product');
const { createProductService, getProductService, updateProductService, updateBulkProductService, deleteProductService, bulkDeleteProductService } = require('../services/product.service');

// get products
const getProducts = async(req,res)=>{

    try {
     
     let count =0;


     const filterQuery = {...req.query}
     const excludeFiles =['sort','page','limit'];
     excludeFiles.forEach((field)=> delete filterQuery[field]);
     const queries ={}
   
     if(req.query.sort){
         queries.sortBy =  req.query.sort.split(',').join(' ');
     }

     if(req.query.fields){
        queries.fields =  req.query.fields.split(',').join(' ');
    }

     const result = await getProductService(filterQuery,queries);
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


// delete product by id
const deleteProductById = async(req,res)=>{
    const {id}= req.params;
    try {
  
        const result = await deleteProductService(id);

        if(!result.deletedCount){
            res.status(200).json({
                success:false,
                message:'Provided invalid product ID',       
                
              });
        }
    
        res.status(200).json({
          success:true,
          message:'Data deleted successfully',
          data:result
          
        });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Data is not delete',
            message:err.message
        })
    }
    }


    //  bulk delete products
    
const bulkDeleteProducts = async(req,res)=>{


    try {
  
        const result = await bulkDeleteProductService(req.body.ids);

      
    
        res.status(200).json({
          success:true,
          message:'Bulk data deleted successfully',
          data:result
          
        });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Bulk data is not delete',
            message:err.message
        })
    }
    }

module.exports={
        saveProduct,
        getProducts,
        updateProduct,
        BulkUpdateProduct,
        deleteProductById,
        bulkDeleteProducts

    
    }