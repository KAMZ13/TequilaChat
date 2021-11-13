const Database = require('./../models/database');
// new message
class MessagesController {

static sendMessage(req,res){
    let {userName, chat, message}= req.body;
    if(!userName || !chat || !message){
        return res.status(403).end();
    }else{
        const databaseChats= new Database('chatsMembers')
        databaseChats.findOne({userName: userName, chat: chat}).then(results=>{
            const database = new Database('messages');
            let message={
                userName: userName,
                message: message,
                chat: chat,
                data: new date
            }
            database.insertOne(message);
            return res.send(201);
        })
        return res.status(401)
    }
    
}
// find all messages for one user
static getallUsersmessages(req,res){
    let userName= req.query.userName;
    if(!userName){
        return res.status(403);
    }else{
        const database = new Database('messages');
        database.findOne({userName: userName}).then(results=>{
            return res.send(results);
        }).catch(err => { return res.send(404)});
    }
}
//find all messages from a chat

static getallchatsmessages(req,res){
    let chat= req.query.chat;
    if(!chat){
        return res.status(403);
    }else{
        const database = new Database('messages');
        database.findOne({chat: chat}).then(results=>{
            return res.send(results);
        }).catch(err => {return res.send(404)});
    }
}
}
module.exports= MessagesController;