const express =require('express');
const qrRouter = express.Router();
const QRCode = require('../models/QRCode');


qrRouter.post('/add',function (req, res, next) {
    let qrcode = new QRCode(req.body);
    qrcode.createdOn = new Date();
    qrcode.userType = 'admin';
    qrcode.status= 'active';
    console.log(qrcode);

    QRCode.updateMany({ status : "active" }, { $set: { status: 'inactive' }}, { multi: true }, function(){
        QRCode.create(qrcode)
            .then(user => {
                res.status(200).json({'Result': 'Qr Code added successfully'});
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
    });

});

module.exports = qrRouter;

