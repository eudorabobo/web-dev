const express = require('express');

const app = express();
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


require('./services/movies-service')(app);
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

require('./services/tweeter-service')(app);

app.listen(process.env.PORT || 4000);