const Product = require('../models/product');
const validator = require('validator');
const Brand = require('../models/Brand');


const getProductService=async(filterQueries,queries)=>{
  // const products = Product.find().where('price').lt(100);

  const products = await Product.find(filterQueries)
  .skip(queries.skip)
  .limit(queries.limit)
  .select(queries.fields)
  .sort(queries.sortBy);
  return products;
}

const  createProductService =async(data)=>{
  //   const product = new Product(data); 
  //  const result = await product.save();
  const product = await Product.create(data);

  const {_id:productId,brand}= product;

 const res = await Brand.updateOne({_id:brand.id},
  {$push:{products:productId}}
  );


  console.log(res);


    return product;
  }

  // update single product
const updateProductService =async(data,id)=>{
   const result = await Product.updateOne({_id:id},{$set:data},{
    runValidators:true
   });
    return result;
  }

// update many products
const updateBulkProductService =async(pData)=>{

  console.log(pData);
  const {ids}= pData;
  // updated allproduct with same data
  //  const result = await Product.updateMany({_id:ids},{$set:data},{
  //   runValidators:true
  //  });
  // updated all product with different data
  const products=[];
  ids.forEach(product => {
    console.log(product,'foreach');
      products.push(Product.updateOne({_id:product.id},{$set:product.data}));
    
  });

  console.log(products);
  const result = Promise.all(products);
 
    return result;
  }


 
// delete single product service
const deleteProductService =async(productId)=>{
  const result = await Product.deleteOne({_id:productId});
   return result;
 }


//bulk delete products service
const bulkDeleteProductService =async(productIds)=>{

  const result = await Product.deleteMany({_id:productIds});
   return result;
 }

module.exports={
    getProductService,
    createProductService,
    updateProductService,
    updateBulkProductService,
    deleteProductService,
    bulkDeleteProductService
}