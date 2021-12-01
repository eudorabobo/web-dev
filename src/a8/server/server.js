const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(bodyParser.text());
app.use(function(req, res, next) {
    // console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


require('../../../../../../../../Downloads/server/services/movies-service')(app);
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

require('../../../../../../../../Downloads/server/services/tweeter-service')(app);
require('../../../../../../../../Downloads/server/services/profile-service')(app);
require('../../../../../../../../Downloads/server/movies/service')(app);

app.listen(process.env.PORT || 4000);