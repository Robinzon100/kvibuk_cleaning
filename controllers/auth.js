
const Queries = require('../queries/CRUD');


// const smsController = require('../utils/smsController');
// const smsSender = smsController.sendSms;




exports.token = (req, res, next) => {
    const {token} = req.body;
    console.log(token)
}