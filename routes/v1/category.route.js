const { getCategory, createCategory, getCategoryId, updateCategoryById } = require('../../controllers/category.controller');

const router = require('express').Router();

router.route('/')
.get(getCategory)
.post(createCategory);


router.route('/:id')
.get(getCategoryId)
.patch(updateCategoryById)


module.exports = router;