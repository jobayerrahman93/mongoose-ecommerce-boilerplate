const { categoryPostService, getCategoryService, getCategoryServiceById, updateCategoryServiceById } = require("../services/category.service");


const createCategory =async(req,res)=>{

   try {
    const result = await categoryPostService(req.body);
    res.status(200).json({
        success: true,
        message:'Category created successfully',
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't create Category ${err.message}`,

    });
   }

}
const getCategory =async(req,res)=>{

   try {
    const result = await getCategoryService();
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get Category ${err.message}`,

    });
   }

}
const getCategoryId =async(req,res)=>{

   try {
    const result = await getCategoryServiceById(req.params.id);
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get single Category ${err.message}`,

    });
   }

}
const updateCategoryById =async(req,res)=>{

   try {
    const result = await updateCategoryServiceById(req.params.id,req.body);

  if(!result.modifiedCount){
    res.status(400).json({
        success: false,
        message:`Couldn't update single Category with this id`,

    });
  }else{
    res.status(200).json({
        success: true,
        message:'Category successfully updated',
    });
  }

   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't update single Category ${err.message}`,

    });
   }

}

module.exports = {createCategory,getCategory,getCategoryId,updateCategoryById};