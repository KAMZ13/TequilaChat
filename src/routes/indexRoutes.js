const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const authRoutes = require('./authRoutes');
const auth= require ('../../middlewares/auth')

router.use('/api', auth.authPer,  apiRoutes);
router.use('/auth', authRoutes);


module.exports= router;