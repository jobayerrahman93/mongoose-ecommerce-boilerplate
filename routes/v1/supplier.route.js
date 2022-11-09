const  { getSupplier, createSupplier, getSupplierById, updateSupplierById}  = require('../../controllers/supplier.controller');

const router = require('express').Router();

router.route('/')
.get(getSupplier)
.post(createSupplier);


router.route('/:id')
.get(getSupplierById)
.patch(updateSupplierById)


module.exports = router;