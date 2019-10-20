const express = require('express');
const app = express()
const bodyParser = require('body-parser');


//
// ─── REQUIRE ROUTES ─────────────────────────────────────────────────────────────────────
//
const clientRoutes = require('./routes/client')


//
// ─── USE ROUTES ─────────────────────────────────────────────────────────────────
//
app.use(clientRoutes)



//
// ─── BODYPARSER, STATIC, VIEW ENGINE ──────────────────────────────────────────────────────
//
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" })); 

app.set('view engine', 'ejs');
app.set('views', 'views');





let port = 3000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

