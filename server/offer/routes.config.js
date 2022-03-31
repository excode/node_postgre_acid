const OfferModel = require('./offer.model');
exports.routesConfig = function (app) {
    app.post('/offer', [
        OfferModel.insert
    ]);
    app.get('/offer', [

        OfferModel.list
    ]);
    app.patch('/offer/:offerId', [

        OfferModel.patch
    ]);
    app.delete('/offer/:offerId', [
        OfferModel.removeById
    ]);
};

  