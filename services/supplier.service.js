const Supplier = require ("../models/Supplier");

const SupplierPostService= async(data)=>{
    const result = await Supplier.create(data);
    return result;
}

const getSupplierService= async()=>{
    const result = await Supplier.find({});
    return result;
}

const getSupplierServiceById= async(id)=>{
    const result = await Supplier.find({_id:id});
    return result;
}

const updateSupplierServiceById= async (supplierId,data)=>{
    const result = await Supplier.updateOne({_id:supplierId},data,{
        runValidators:true
    });
 
    return result;
}


module.exports={
    SupplierPostService,
    getSupplierService,
    getSupplierServiceById,
    updateSupplierServiceById
}