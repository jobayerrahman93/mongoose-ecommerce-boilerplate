const Product = require('../models/product');

const getProductService=async()=>{
  // const products = Product.find().where('price').lt(100);
  const products = await Product.find().where('price');
  return products;
}

const  createProductService =async(data)=>{
    const product = new Product(data); 
   const result = await product.save();
    return result;
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

module.exports={
    getProductService,
    createProductService,
    updateProductService,
    updateBulkProductService
}