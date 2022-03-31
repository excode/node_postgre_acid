const UsersModel = require('./users.model');
exports.routesConfig = function (app) {
    app.post('/user', [
        UsersModel.insert
    ]);
    app.get('/user', [

        UsersModel.list
    ]);
    app.patch('/user/:userId', [

        UsersModel.patch
    ]);
    app.delete('/user/:userId', [
        UsersModel.removeById
    ]);
};

  