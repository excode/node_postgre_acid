const TransactionModel = require('./transaction.model');
exports.routesConfig = function (app) {
    app.post('/transaction', [
        TransactionModel.insert
    ]);
    app.get('/transaction', [

        TransactionModel.list
    ]);
    app.patch('/transaction/:transactionId', [

        TransactionModel.patch
    ]);
    app.delete('/transaction/:transactionId', [
        TransactionModel.removeById
    ]);
};

  