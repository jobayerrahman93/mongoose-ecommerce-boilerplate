const stock = require('../models/stock');
const { createProductService, getProductService, updateProductService, updateBulkProductService, deleteProductService, getStockService, createStockService, updateStockService, deleteStockService, getStockByIdService } = require('../services/stock.service');

// get stock
const getStock = async(req,res)=>{
   
    try {
     
     let count =0;

     let  filterQuery = {...req.query};
     const excludeFiles =['sort','page','limit'];

     let filterString = JSON.stringify(filterQuery);
     console.log(filterString);

      filterString = filterString.replace(/\b(gt | gte | lt |lte)\b/g,match=>`$${match}`);
      console.log(filterString)

      filterQuery = JSON.parse(filterString); 

      console.log(filterQuery);

     excludeFiles.forEach((field)=> delete filterQuery[field]);
 
     const queries ={}
   
     if(req.query.sort){
         queries.sortBy =  req.query.sort.split(',').join(' ');
     }

     if(req.query.fields){
        queries.fields =  req.query.fields.split(',').join(' ');
    }
     if(req.query.page){
        const {page=1,limit=2}= req.query;
        queries.skip =   (page -1) * parseInt(limit);
        queries.limit = parseInt(limit)
    }

     const result = await getStockService(filterQuery,queries);
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

// save Stock
const getStockById = async(req,res)=>{

    try {
  
        const result = await getStockByIdService(req.params.id);
 
        res.status(200).json({
            success:true,
            data:result
            
          });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Data is not getting',
            message:err.message
        })
    }
    }


// save Stock
const createStock = async(req,res)=>{

    try {
  
        const result = await createStockService(req.body);

      
        res.status(200).json({
            success:true,
            message:'Data inserted successfully',
            
          });
    } catch (err) {
        res.status(400).json({
            success:false,
            message:'Data is not inserted',
            message:err.message
        })
    }
    }

 // stock update

const updateStock = async(req,res)=>{

    const {id}= req.params;

    try {
  
        const result = await updateStockService(req.body,id)
    
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
 


// delete stock by id
const deleteStockById = async(req,res)=>{
    const {id}= req.params;
    try {
  
        const result = await deleteStockService(id);

        if(!result.deletedCount){
            res.status(200).json({
                success:false,
                message:'Provided invalid stock ID',       
                
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



module.exports={
    createStock,
        getStock,
        updateStock,
        deleteStockById,
        getStockById
        
    }