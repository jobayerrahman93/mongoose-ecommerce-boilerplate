const express = require('express');
const { getProducts, saveProduct, updateProduct, BulkUpdateProduct, deleteProductById, bulkDeleteProducts } = require('../../controllers/product.controller');

const router = express.Router();

router.route('/bulk-update').patch(BulkUpdateProduct);
router.route('/bulk-delete').delete(bulkDeleteProducts);

router
.route('/')
.get(getProducts)
.post(saveProduct)

router.route('/:id')
.patch(updateProduct)
.delete(deleteProductById)





module.exports = router;