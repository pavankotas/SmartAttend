const mongoose = require('mongoose');
const config = require('./db/db');
const express =require('express');

const cors=require('cors');

const bodyParser =require('body-parser');

const registrationRoute = require('./routes/registrationRoute');
const loginRoute = require ('./routes/loginRoute');
const jwt = require('jsonwebtoken');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);



/*Configuring middleware*/

const app= express();
app.use(bodyParser.json())
app.use(cors());

app.use('/api/register', registrationRoute);
app.use('/api/login', loginRoute);

/*start server*/
const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});

