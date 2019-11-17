const Queries = require('../queries/CRUD');


const smsController = require('../utils/smsController');
const smsSender = smsController.sendSms;



//
// ─── MODELS ─────────────────────────────────────────────────────────────────────
const Number = require('../models/order.model')



exports.getIndex = (req, res, next) => {
    res.render('client/index.ejs');
}




exports.postSms = (req, res, next) => {
    const { PhoneNumber, roomAmount, bathroomAmount } = req.body;

    const order = new Number(PhoneNumber, roomAmount, bathroomAmount);
    Queries.save("Orders", order)

    const token = {
        token: Math.floor(1000 + Math.random() * 9000),
        expiration: Date.now() + 600000
    }



    Queries.save("Tokens", token)

}




