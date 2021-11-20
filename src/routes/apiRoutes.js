const router = require('express').Router();
const usersRoutes = require('./usersRoutes')
const messageRoutes = require ('./messagesRoutes');
const  chatsRoutes = require('./chatsRoutes');
const chatsMembers= require('./chatsMembersRoutes');

router.use('/users', usersRoutes);
router.use('/messages',messageRoutes);
router.use('/chats',chatsRoutes);
router.use('/chatsMembers',chatsMembers);
module.exports= router;