const Brand = require ("../models/Brand");

const BrandPostService= async(data)=>{
    const result = await Brand.create(data);
    
    return result;
}



module.exports={
    BrandPostService
}