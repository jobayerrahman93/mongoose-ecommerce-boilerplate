const  { SupplierPostService, getSupplierService, getSupplierServiceById, updateSupplierServiceById } = require("../services/supplier.service");


const createSupplier =async(req,res)=>{

   try {
    const result = await SupplierPostService(req.body);
    res.status(200).json({
        success: true,
        message:'supplier created successfully',
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't create supplier ${err.message}`,

    });
   }

}
const getSupplier =async(req,res)=>{

   try {
    const result = await getSupplierService();
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get supplier ${err.message}`,

    });
   }

}
const getSupplierById =async(req,res)=>{

   try {
    const result = await getSupplierServiceById(req.params.id);
    res.status(200).json({
        success: true,
        data: result
    });
   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't get single supplier ${err.message}`,

    });
   }

}
const updateSupplierById =async(req,res)=>{

   try {
    const result = await updateSupplierServiceById(req.params.id,req.body);

  if(!result.modifiedCount){
    res.status(400).json({
        success: false,
        message:`Couldn't update single supplier with this id`,

    });
  }else{
    res.status(200).json({
        success: true,
        message:'supplier successfully updated',
    });
  }

   } catch (err) {
    res.status(400).json({
        success: false,
        message:`Couldn't update single supplier ${err.message}`,

    });
   }

}

module.exports = {createSupplier,getSupplier,getSupplierById,updateSupplierById};