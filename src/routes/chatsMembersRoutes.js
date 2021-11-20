const router = require('express').Router();
const chatsMembersController = require('../controllers/chatsMembersController');
const ChatsMembersController= require('../controllers/chatsMembersController');

/**
 * @swagger
 * 
 * /api/chatsMembers?chatName={chatName}:
 *   get:
 *     tags:
 *       - chatsMembers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatName
 *         type: string
 *         example:
 *          Chat test
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.get('/',ChatsMembersController.memberlink);

/**
 * @swagger
 * 
 * /api/chatsMembers?chatName={chatName}:
 *   post:
 *     tags:
 *       - chatsMembers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: chatName
 *         type: string
 *         example:
 *          Chat test
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: String
 *           example: 
 *             userName: user2 
 *     responses:
 *       201:
 *         description: create
 *       400:
 *         description: Bad request
 */
router.post('/',chatsMembersController.memberSingupLink);



module.exports= router;