const jwt = require('jsonwebtoken');
require('dotenv').config();
const Database = require ('../src/models/database')

let secret = process.env.SECRET;

function authPer(req,res,next){
    let token= req.headers["perauth"];
    if(token){
        jwt.verify(token, secret, (err)=>{
            if(err){
                res.status(401).send({error: "Token no válido"})   
            }else{
                const database = new Database('tokens');
                database.findOne({token: token}).then(response=>{
                    if(response.status == 'Active'){
                        next();
                    }else{
                        res.status(401).end()
                    }
                })
            }
        })
    }else{
        res.status(401).end()
    }


}

module.exports = {authPer}