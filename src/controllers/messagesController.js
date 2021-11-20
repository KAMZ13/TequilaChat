const { Console } = require('console');
const Database = require('./../models/database');
// new message
class MessagesController {

static sendMessage(req,res){
    let {userName, chatName, message}= req.body;
    if(!userName || !chatName || !message){
        return res.status(403).end();
    }else{
        userName=userName.toUpperCase();
            const database = new Database('messages');
            let newMessage={
                userName: userName,
                message: message,
                chatName: chatName,
                date: new Date()
            }
            database.insertOne(newMessage);
            return res.status(201).end();
    }
    
}
// find all messages for one user
static getallUsersmessages(req,res){
    let userName= req.query.userName;
    if(!userName){
        return res.status(403);
    }else{
        userName=userName.toUpperCase();
        const database = new Database('messages');
        database.findOne({userName: userName}).then(results=>{
            return res.send(results);
        }).catch(err => { return res.send(404)});
    }
}

}
module.exports= MessagesController;