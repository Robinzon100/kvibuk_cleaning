const express = require('express');
const app = express()
const bodyParser = require('body-parser');



const mongoConnect = require("./utils/database").mongoConnect;




//
// ─── BODYPARSER, STATIC, VIEW ENGINE ──────────────────────────────────────────────────────
//




app.use(express.static(__dirname + '/public'));

app.use(express.json({
    type: ['application/json', 'text/plain']
}))

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ type: "application/*+json, text/plain" }));

app.set('view engine', 'ejs');
app.set('views', 'views');




//
// ─── REQUIRE ROUTES ─────────────────────────────────────────────────────────────────────
//
const clientRoutes = require('./routes/client')



//
// ─── USE ROUTES ─────────────────────────────────────────────────────────────────
// 



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(clientRoutes)





app.use((req, res, next) => {
    res.status(404).send('404 - Not Found!');
});



let port = 3000;

mongoConnect(() => {
    // console.log(client);
    console.log("connected !");
    app.listen(port);
});

