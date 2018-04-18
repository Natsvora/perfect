// const Promise = require('promise');
const winston = require('winston');
const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

global.logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({colorize: true}),
    ],
});

winston.level = 'debug';

const server = function( port, ip='127.0.0.1') {
    let ser = app.listen(port, ip, function() {
        const host = ser.address().address;
        const port = ser.address().port;
        logger.debug(`Server Runnig on ${host} and ip ${port}`);
        logger.info(`Server Runnig on ${host} and ip ${port}`);
    });
};

module.exports = server;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    logger.debug('Connected....!');
    logger.info('Connected....!');
   global.dbase = db.db('user');
    
    dbase.createCollection('users', function(err) {
        if (err) throw err;
        logger.info('Collection is created!');
        require('./routes')(app);
    });
});

