const router = require('express').Router();
const UsersController= require('../controllers/usersController');

/**
 * @swagger
 * 
 * /auth/users:
 *   post:
 *     tags:
 *       - users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: String
 *           example: 
 *             userName: "Kass1"
 *             password: "Kass89"
 *             email: "kassM891@hotmail.com"
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.post('/',UsersController.userSignIn);

/**
 * @swagger
 * 
 * /auth/users/login:
 *   post:
 *     tags:
 *       - users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: String
 *           example: 
 *             userName: Kass
 *             password: Kass89
 *     responses:
 *       200:
 *         description: OK
 *       403:
 *         description: Forbidden
 */
router.post('/login',UsersController.userLogin);

/**
 * @swagger
 * 
 * /api/users/logout:
 *   post:
 *     tags:
 *       - users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: String
 *           example: 
 *             token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Ikthc3MxIE1vbnRlbWF5b3IiLCJpYXQiOjE2MzcyMzE5NjF9.VRRaSSiV3G4mfaF1_lm70muvLN1pDv14Xxx-hOh5uGs
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.post('/logout',UsersController.userLogOut);

/**
 * @swagger
 * 
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.get('/',UsersController.getUsers);



module.exports= router;