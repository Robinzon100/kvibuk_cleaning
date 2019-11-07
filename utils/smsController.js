const messagebird = require('messagebird')('N2hPCuBVg9WurWnpg2SGSF3bd');


exports.sendSms = (recipient, smsText) => {

    const params = {
        'originator': '+995598160398',
        'recipients': [
            `+995${recipient}`
        ],
        'body': `${smsText}`
    };

    messagebird.messages.create(params, function (err, response) {
        if (err) {
            console.log("ERROR:");
            console.log(err);
        } else {
            console.log("SUCCESS:");
            console.log(response);
            res.render('client/index.ejs');
        }
    });
}

