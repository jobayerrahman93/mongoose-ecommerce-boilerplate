const  {BrandPostService, getBrandService, getBrandServiceById, updateBrandServiceById} = require("../services/brand.service");


const createBrand =async(req,res)=>{

   try {
    const result = await BrandPostService(req.body);
    res.status(200).json({
        success: true,
        message:'Brand created successfully',
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't create brand ${err.message}`,

    });
   }

}
const getBrand =async(req,res)=>{

   try {
    const result = await getBrandService();
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get brand ${err.message}`,

    });
   }

}
const getBrandById =async(req,res)=>{

   try {
    const result = await getBrandServiceById(req.params.id);
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get single brand ${err.message}`,

    });
   }

}
const updateBrandById =async(req,res)=>{

   try {
    const result = await updateBrandServiceById(req.params.id,req.body);

  if(!result.modifiedCount){
    res.status(400).json({
        success: false,
        message:`Couldn't update single brand with this id`,

    });
  }else{
    res.status(200).json({
        success: true,
        message:'Brand successfully updated',
    });
  }

   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't update single brand ${err.message}`,

    });
   }

}

module.exports = {createBrand,getBrand,getBrandById,updateBrandById};