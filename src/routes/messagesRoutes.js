const router = require('express').Router();
const MessagesController= require('../controllers/messagesController');

/**
 * @swagger
 * 
 * /api/messages:
 *   post:
 *     tags:
 *       - messages
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: String
 *           example: 
 *             userName: Kass
 *             message: Hola mi nombre es kass
 *             chatName: Chat test
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.post('/',MessagesController.sendMessage);

/**
 * @swagger
 * 
 * /api/messages/users?userName={userName}:
 *   get:
 *     tags:
 *       - messages
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userName
 *         type: string
 *         example:
 *          Kass
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.get('/users',MessagesController.getallUsersmessages);



module.exports= router;