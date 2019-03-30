const express =require('express');
const userRouter = express.Router();
const User = require('../models/registrationModel');



// GET route for reading data
userRouter.get('/', function (req, res, next) {
    return res.sendFile(path.join(__dirname + '/src/app/app.component.html'));
});


//POST route for updating data
userRouter.post('/register', function (req, res, next) {
    let user = new User(req.body);
    console.log(user);
    User.create(user)
        .then(user => {
            res.status(200).json({'Result': 'User added successfully'});
        })
        .catch(err => {
            res.status(400).send(err);
        });
})

module.exports = userRouter;
