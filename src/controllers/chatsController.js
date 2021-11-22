const { response } = require('express');
const { off } = require('process');
const Database = require('./../models/database');

class chatsController{
// Create new chat
    static createChat(req,res){
        let chatName=req.body.chatName;
        let userName=req.body.userName;
        if(!chatName || !userName){
            return res.status(403).end();
        }else{
            userName=userName.toUpperCase();
            const database =new Database('chats');
            let chat={
                userName: userName,
                chatName: chatName
            }
            database.insertOne(chat).then(response=>{
                return res.status(201).end();
            })
            .catch(error => {
            return res.status(400).end();
        });
        const databaseMembers= new Database('chatMembers');
        databaseMembers.insertOne({
            chatName: req.body.chatName,
            userName: userName
        }).then(response=>{
            return res.status(201).end()
        }).catch(err => { return res.send(404)});
    }
        }
    
//find chat by name

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






