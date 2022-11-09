const { getStore, createStore, getStoreById, updateStoreById } = require('../../controllers/store.controller');

const router = require('express').Router();

router.route('/')
.get(getStore)
.post(createStore);


router.route('/:id')
.get(getStoreById)
.patch(updateStoreById)


module.exports = router;