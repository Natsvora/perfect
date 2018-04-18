module.exports.selectAllUser = function() {
    return new Promise(function(resolve, reject) {
        dbase.collection('users').find({}).toArray(function(err, result) {
            if (err) {
                reject(err);
                return;
            }
            for (var i = 0, len = result.length; i < len; i++) {
                delete result[i].bad;
            }
            logger.debug('send data' + JSON.stringify(result));
            resolve(result);
        });
    });
};

module.exports.selectBYId = function(id) {
    return new Promise(function(resolve, reject) {
        var query = {
            userId: id
        };
        dbase.collection('users').find(query).toArray(function(err, result) {
            if (err) {
                reject(err);
                return;
            }
            delete result[0].pass;
            delete result[0].pass1;
            resolve(result[0]);
        });
    });
};

module.exports.inserUser = function(myobj) {
    return new Promise(function(resolve, reject) {
        dbase.collection('users').insertOne(myobj, function(err) {
            if (err) {
                reject(err);
                return;
            }
            logger.debug('1 record inserted');
            logger.info('1 record inserted');
            resolve();
        });
    });
};

module.exports.updateUser = function(id, myobj) {
    return new Promise(function(resolve, reject) {
        logger.debug(id, myobj);
        var query = {
            userId: id
        };
        dbase.collection('users').updateOne(query, {
            $set: {
                userId: myobj.userId,
                name: myobj.name,
                city: myobj.city,
                desi: myobj.desi,
                mno: myobj.mno,
                bday: myobj.bday,
                power:myobj.power,
                state:myobj.state,
                street:myobj.street,
                option1:myobj.option1,
                option2:myobj.option2,
                option3:myobj.option3,
                option4:myobj.option4,
                addr: myobj.addr,
                zip:myobj.zip
            }
        }, function(err) {
            if (err) {
                reject(err);
                return;
            }
            logger.log(myobj);
           // logger.log(selectBYId(id));
            logger.info('1 document updated');
            logger.debug('1 document updated');
            resolve();
        });
    });
};

module.exports.deleteUser = function(id) {
    return new Promise(function(resolve, reject) {
        var query = {
            userId:id
        };
        dbase.collection('users').remove(query, function(err, obj) {
            if (err) {
                reject(err);
                return;
            }
            logger.debug(obj.result.n + ' record(s) deleted');
            resolve();
        });
    });
};