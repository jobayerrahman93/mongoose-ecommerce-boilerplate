const express = require('express');
const { getProducts, saveProduct, updateProduct, BulkUpdateProduct } = require('../../controllers/product.controller');

const router = express.Router();


router
.route('/')
.get(getProducts)
.post(saveProduct)

router.route('/bulk-update').patch(BulkUpdateProduct);
router.route('/:id').patch(updateProduct);





module.exports = router;