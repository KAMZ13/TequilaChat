const { response } = require('express');
const Database = require('../models/database');
class tokenController{
    
//Register token to know if user online
    static tokenRegistration(token){
        const database = new Database('tokens');
        database.insertOne({token: token,
        status: "Active"}).then(response=>{
            //console.log("ONLINE");
            return;
        });
        return;
    }

// when user logs out, change token status so that its disabled
    static tokenInactive(token){
        const database = new Database('tokens');

        database.findOneAndUpdate({token: token},{$set:{status: "Inactive"}});
        return;
    }

}
 
module.exports = tokenController;