const Store = require("../models/Store");

const storePostService= async(data)=>{
    const result = await Store.create(data);
    
    return result;
}

const getStoreService= async()=>{
    const result = await Store.find({});
    return result;
}


const getStoreServiceById= async(id)=>{
    const result = await Store.find({_id:id})
    return result;
}
const updateStoreServiceById= async (categoryId,data)=>{
   
    const result = await Store.updateOne({_id:categoryId},data,{
        runValidators:true
    });
 
    return result;
}





module.exports={
    storePostService,
    getStoreService,
    getStoreServiceById,
    updateStoreServiceById
}