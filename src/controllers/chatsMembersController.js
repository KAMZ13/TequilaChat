const Database = require('./../models/database');

class chatsMembersController{
//create link for a chat
static memberlink(req,res){
    let {userName, chatName}= req.query;
    if(!userName || !chatNmae){
        return res.status(403).end();
    }else{
        const databaseChats= new Database('chats')
        databaseChats.findOne({userName: userName, chatName: chatName}).then(results=>{
            return res.send('http://localhost:3001/chatsMembers?chatName='+chatName);
        }).catch(err => { return res.send(404)});
    }
    
}
//Register user in chat with link
static memberSingupLink(req,res){
    const database= new Database('chatMembers');
    database.insertOne({
        chatName: req.query.chatName,
        userName: req.body.userName
    }).then(response=>{
        return res.status(201).end()
    }).catch(err => { return res.send(404)});
}
}

module.exports=chatsMembersController