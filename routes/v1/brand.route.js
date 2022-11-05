const  { getBrand, createBrand, getBrandById}  = require('../../controllers/brand.controller');

const router = require('express').Router();

router.route('/')
.get(getBrand)
.post(createBrand);


router.route('/:id').get(getBrandById)


module.exports = router;