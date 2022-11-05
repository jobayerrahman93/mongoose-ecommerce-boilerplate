const  BrandController  = require('../../controllers/brand.controller');

const router = require('express').Router();

router.route('/').post(BrandController);


module.exports = router;