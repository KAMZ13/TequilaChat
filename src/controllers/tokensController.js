const Database = require('../models/database');
class tokenController{
    
//Register the token to know if the user is still online 
    static tokenRegistration(token){
        const database = new Database('tokens');
        database.insertOne({token: token,
        status: "Active"})
        return
    }

// When the user logout change the status of the token if someelse want to use this token it won´t work
    static tokenInactive(token){
        const database = new Database('tokens');
        database.findOneAndUpdate({token: token},{status: "Inactive"});
        return
    }

}
 
module.exports = tokenController;