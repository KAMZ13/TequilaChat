const Database = require('./../models/database');
const path = require('path');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const bcrypt = require("bcrypt");
const tokenController = require('./tokensController');
const { ObjectId } = require('bson');
class UsersController {

// create a new user
    static userSignIn(req,res){
        let {userName, password, email}= req.body;
        if(!userName || !password || !email){
            return res.status(404);
        }else{
            const database = new Database('users');
            let pass = bcrypt.hashSync(password, 10)
            userName=userName.toUpperCase();
            let user={
                userName: userName,
                password: pass,
                email: email
            }
            database.insertOne(user).then(response=>{
                return res.status(201);
            })
            .catch(error => {
            return res.status(400).end();
        });
            
        }
        
    }
// login with a exist user
    static userLogin(req,res){
        let { userName, password } = req.body;
        if (!userName || !password) {
            return res.status(403);
        }
        userName= userName.toUpperCase();
        const database = new Database('users');
        database.findOne({ userName: userName })
            .then(results => {
            if (results) {
                if (!bcrypt.compareSync(password, results.password)) {
                    res.statusMessage = "Incorect password!";
                    return res.status(403).end();
                }
                let token = jwt.sign({userName: userName},process.env.SECRET);
                tokenController.tokenRegistration(token);
                console.log("regreso");
                return res.send(token).status(200).end();
            }
            else {
                return res.status(403).end();
            }
        });
    }

// Make the token unusable
    static userLogOut(req,res){
        tokenController.tokenInactive(req.body.token);
        return res.status(200).end();
    }

// the list of all users or a user by id
    static getUsers(req, res) {
        const database = new Database('users');
        if(req.query.id){
            let id=ObjectId(req.query.id)
            database.findOne({_id: id})
            .then(results => {
                if(results) {
                    console.log('Resultados: ', results);
                    return res.status(200).send(results);
                } else {
                    return res.status(400);
                }
            })
            .catch(err => {});
        }else{
            database.find().toArray((err, results) => {
                if(err) {
                    return res.status(400);
                }
    
                if(results.length === 0) {
                    return res.status(400);
                } else {
                    return res.send(results);
                }
            });
        }
        

    }
}

module.exports = UsersController;