const Category = require ("../models/Category");

const categoryPostService= async(data)=>{
    const result = await Category.create(data);
    
    return result;
}

const getCategoryService= async()=>{
    const result = await Category.find({}).select(['-products']);
    return result;
}


const getCategoryServiceById= async(id)=>{
    const result = await Category.find({_id:id})
    return result;
}
const updateCategoryServiceById= async (categoryId,data)=>{
   
    const result = await Category.updateOne({_id:categoryId},data,{
        runValidators:true
    });
 
    return result;
}





module.exports={
    categoryPostService,
    getCategoryService,
    getCategoryServiceById,
    updateCategoryServiceById
}