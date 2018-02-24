require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , checkForSession = require('./middlewares/checkForSession');


    const app = express();
    app.use(bodyParser.json());
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))

    app.use(checkForSession);



const port = process.env.PORT;
app.listen(port, () => {console.log(`Listening on port: ${port}`)});