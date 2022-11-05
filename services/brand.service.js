const Brand = require ("../models/Brand");

const BrandPostService= async(data)=>{
    const result = await Brand.create(data);
    
    return result;
}

const getBrandService= async()=>{
    const result = await Brand.find({}).select(['-products','-suppliers']);
    return result;
}


const getBrandServiceById= async(id)=>{
    const result = await Brand.find({_id:id})
    return result;
}



module.exports={
    BrandPostService,
    getBrandService,
    getBrandServiceById
}