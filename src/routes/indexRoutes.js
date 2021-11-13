const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');
const auth= require ('../../middlewares/auth')

router.use('/api',  apiRoutes);
router.use('/auth', authRoutes);


module.exports= router;