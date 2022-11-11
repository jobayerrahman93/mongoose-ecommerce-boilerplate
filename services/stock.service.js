const Stock = require('../models/stock');


// get stock service
const getStockService=async(filterQueries,queries)=>{

  const products = await Stock.find(filterQueries)
  .skip(queries.skip)
  .limit(queries.limit)
  .select(queries.fields)
  .sort(queries.sortBy);
  return products;
}

// stock get by id
const getStockByIdService =async(id)=>{

    const stock = await Stock.findOne({_id:id}).populate("brand.id").populate("store.id").populate("suppliedBy.id");
      return stock;
}

// create stock service
const  createStockService =async(data)=>{

  const stock = await Stock.create(data);
    return stock;
  }

  // update single stock
const updateStockService =async(data,id)=>{
   const result = await Stock.updateOne({_id:id},{$set:data},{
    runValidators:true
   });
    return result;
  }


 
// delete single stock service
const deleteStockService =async(stockId)=>{
  const result = await Stock.deleteOne({_id:stockId});
   return result;
 }




module.exports={
    getStockService,
    createStockService,
    updateStockService,
    deleteStockService,
    getStockByIdService
}