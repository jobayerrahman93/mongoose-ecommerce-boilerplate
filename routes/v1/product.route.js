const express = require('express');
const { getProducts, saveProduct } = require('../../controllers/product.controller');

const router = express.Router();


router
.route('/')
.get(getProducts)
.post(saveProduct)





module.exports = router;