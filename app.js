const express = require('express');
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" })); 


app.set('view engine', 'ejs');
app.set('views', 'views');


app.get('/', (req, res, next) => {
    res.send("<h1>nice</h1>");
}); 


let port = 3000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

