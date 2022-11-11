const express = require('express');
const { getStock, createStock, getStockById } = require('../../controllers/stock.controller');

const router = express.Router();


router
.route('/')
.get(getStock)
.post(createStock)



router.route('/:id')
.get(getStockById)





module.exports = router;