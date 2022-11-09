const { storePostService, getStoreService, getStoreServiceById, updateStoreServiceById } = require("../services/Store.service");


const createStore =async(req,res)=>{

   try {
    const result = await storePostService(req.body);
    res.status(200).json({
        success: true,
        message:'Store created successfully',
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't create Store ${err.message}`,

    });
   }

}
const getStore =async(req,res)=>{

   try {
    const result = await getStoreService();
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get Store ${err.message}`,

    });
   }

}
const getStoreById =async(req,res)=>{

   try {
    const result = await getStoreServiceById(req.params.id);
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get single Store ${err.message}`,

    });
   }

}
const updateStoreById =async(req,res)=>{

   try {
    const result = await updateStoreServiceById(req.params.id,req.body);

  if(!result.modifiedCount){
    res.status(400).json({
        success: false,
        message:`Couldn't update single Store with this id`,

    });
  }else{
    res.status(200).json({
        success: true,
        message:'Store successfully updated',
    });
  }

   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't update single Store ${err.message}`,

    });
   }

}

module.exports = {createStore,getStore,getStoreById,updateStoreById};