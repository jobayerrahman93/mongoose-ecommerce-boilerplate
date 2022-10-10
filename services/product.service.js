const Product = require('../models/product');

const getProductService=async()=>{
  // const products = Product.find().where('price').lt(100);
  const products = Product.find().where('price');
  return products;
}

const createProductService =async(data)=>{
    const product = new Product(data); 
   const result = await product.save();
    return result;
  }

module.exports={
    getProductService,
    createProductService
}