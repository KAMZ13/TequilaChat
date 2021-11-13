const { off } = require('process');
const Database = require('./../models/database');

class chatsController{
// create a new chat
    static createChat(req,res){
        let chatName=req.query.chatName;
        let userName=req.query.userName;
        if(!chatName || !userName){
            return res.status(403)
        }else{
            const database =new Database('chats');
            let chat={
                userName: userName,
                chatName: chatname
            }
            database.insertOne(chat);
            res.status(201)
        }
    }
//find a chat by name

    static getChatName(req, res){
        let chatName= req.query.chatName;
    if(!chatName){
        return res.status(403);
    }else{
        const database = new Database('chats');
        database.findOne({chatName: chatName}).then(results=>{
            return res.send(results);
        }).catch(err => { return res.send(404)});
    }
    }

}

module.exports=chatsController






