const  { getBrand, createBrand, getBrandById, updateBrandById}  = require('../../controllers/brand.controller');

const router = require('express').Router();

router.route('/')
.get(getBrand)
.post(createBrand);


router.route('/:id')
.get(getBrandById)
.patch(updateBrandById)


module.exports = router;