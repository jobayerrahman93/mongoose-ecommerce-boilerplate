const Brand = require ("../models/Brand");

const BrandPostService= async(data)=>{
    const result = await Brand.create(data);
    
    return result;
}

const getBrandService= async()=>{
    const result = await Brand.find({}).populate('products');
    return result;
}


const getBrandServiceById= async(id)=>{
    const result = await Brand.find({_id:id})
    return result;
}
const updateBrandServiceById= async (brandId,data)=>{
   
    const result = await Brand.updateOne({_id:brandId},data,{
        runValidators:true
    });
 
    return result;
}





module.exports={
    BrandPostService,
    getBrandService,
    getBrandServiceById,
    updateBrandServiceById
}