exports.getIndex = (req, res, next) => {
    res.render('client/index.ejs');
}


// const messagebird = require('messagebird')('N2hPCuBVg9WurWnpg2SGSF3bd');

//     const params = {
//         'originator': '+995598160398',
//         'recipients': [
//             '+995598160398'
//         ],
//         'body': 'Hello from kvibuk 8008'
//     };

//     messagebird.messages.create(params, function (err, response) {
//         if (err) {
//             console.log("ERROR:");
//             console.log(err);
//         } else {
//             console.log("SUCCESS:");
//             console.log(response);
//             res.render('client/index.ejs');
//         }
//     });



exports.postSms = (req, res, next) => {
    




}