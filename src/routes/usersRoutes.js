const router = require('express').Router();
const UsersController= require('../controllers/usersController');

router.post('/',UsersController.userSignIn);

router.post('/login',UsersController.userLogin);

router.post('/logout',UsersController.userLogOut);


router.get('/',UsersController.getUsers);

module.exports= router;