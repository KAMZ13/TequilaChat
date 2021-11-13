const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUI= require('swagger-ui-express');
const Database = require('./src/models/database');
const indexRoutes = require('./src/routes/indexRoutes');


//for use req.body
app.use(express.json()) 

const MongoClient = require('mongodb').MongoClient;

if(process.env.NODE_ENV === 'dev') {
    require('dotenv').config();
}

const port = process.env.PORT;

let database;

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(router);

app.use('/', indexRoutes);


// Connect to MongoDB
MongoClient.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true
}, function(err, client) {
    if(err) {
        console.log('Failed to connect to MongoDB');
    } else {
        console.log('Se conecto a la base de datos');

        database = client.db();

        Database.setDatabase(database);

        app.listen(port, () => {
            console.log('App is listening in port ' + port);
        });

    }
});