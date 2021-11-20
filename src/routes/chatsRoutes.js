const router = require('express').Router();
const ChatsController= require('../controllers/chatsController');

/**
 * @swagger
 * 
 * /api/chats:
 *   post:
 *     tags:
 *       - chats
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *           example: 
 *             userName: Kass
 *             chatName: Chat test
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.post('/',ChatsController.createChat);

/**
 * @swagger
 * 
 * /api/chats?chatName={chatName}:
 *   get:
 *     tags:
 *       - chats
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatName
 *         type: string
 *         example:
 *          Chat test
 *     responses:
 *       200:
 *         description: create
 *       400:
 *         description: Bad request
 *       403:
 *         description: forbidden
 */
router.get('/',ChatsController.getChatName);



module.exports= router;