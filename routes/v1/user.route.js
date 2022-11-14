const { signup, login, getMe } = require('../../controllers/user.controller');
const verifyToken = require('../../middleware/verifyToken');

const router = require('express').Router();


router.route('/signup')
.post(signup);


router.route('/login')
.post(login);

router.route('/me')
.get(verifyToken,getMe);


module.exports= router;