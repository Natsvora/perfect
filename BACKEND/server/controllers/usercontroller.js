const bodyParser = require('body-parser');
const user = require('../model/user');

module.exports.setBodyParser = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
        extended: true
    }));
};

module.exports.setHeader = function(app) {

    app.use(function(req, res, next) {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, OPTIONS, DELETE');
        res.setHeader('Access-Control-Max-Age', '3600');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept');
        // Pass to next layer of middleware
        next();
    });

};


module.exports.getUserById = function(req, res) {
    user.selectBYId(req.params.id)
        .then(function(data) {
            logger.info(data);
            res.json(data);
        })
        .catch(function(err) {
            logger.error(err);
        });
};

module.exports.getAllUser = function(req, res) {
    logger.info('get all user');
    user.selectAllUser()
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err) {
            logger.error(err);
        });
};

module.exports.insertUser = function(req, res) {
    user.inserUser(req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            logger.error(err);
        });
};

module.exports.updateUser = function(req, res) {
	logger.info(req.body.userId);
    user.updateUser(req.body.userId, req.body)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            logger.error(err);
        });
};

module.exports.deleteUser = function(req, res) {
	logger.info("userdeleted");
    user.deleteUser(req.params.id)
        .then(function() {
            res.sendStatus(200);
        })
        .catch(function(err) {
            logger.error(err);
        });
};