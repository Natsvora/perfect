const uc = require('./controllers/usercontroller');

module.exports = function(app) {

    uc.setBodyParser(app);

    uc.setHeader(app);

    app.get('/user/:id', uc.getUserById);

    app.get('/user', uc.getAllUser);

    app.post('/user', uc.insertUser);

    app.put('/user', uc.updateUser);

    app.delete('/user/:id', uc.deleteUser);

};