const express = require('express');
const userRoute = express.Router();

const User = require('../models/User');

const bodyparser = require('body-parser');
userRoute.use(bodyparser.urlencoded({ extended: false}));
userRoute.use(bodyparser.json());

const checkTokenMiddleware = async (req, res, next) => {
    const { token } = req.body;
    try {
        const user = await User.checkToken(token);
        req.user = user;  
        next(); 
    } catch(err) {
        res.status(404).send({ message: 'token is invalid' });
    }
}

userRoute.get('/', (req, res) => {
    User.find({})
    .then(friends => res.send(friends))
    .catch(err => res.send(err));
});

userRoute.post('/signup', (req, res) => {
    const { email, password, name } = req.body ;
    User.signUp(email, password, name)
    .then(response => res.send(response))
    .catch(error => res.status(400).send({ message: error.message }))
});

userRoute.post('/signin', (req, res) => {
    const { email, password } = req.body;
    User.signIn(email, password)
    .then(response => res.send(response)) 
    .catch(error => res.status(400).send({ message: error.message }))
});

userRoute.post('/checktoken',  checkTokenMiddleware, (req, res) => {
    res.send({ message: 'OK', user: req.user });
});

userRoute.get('/verify/:idUser/:verifyCode', (req, res) => {
    const { idUser, verifyCode } = req.params;
    User.verifyUser(idUser, verifyCode)
    .then(() => res.send({ message: 'verified' }))
    .catch(err => res.status(404).send({ message: err.message }))
});


userRoute.post('/changeinfo', (req, res) => {
    const { name, email, password } = req.body;
    User.changeInfo(email, name, password)
    .then(user => res.send({ user }))
    .catch(error => res.status(404).send({ message: error.message }));
});

userRoute.post('/changepassword', (req, res) => {
    const { password, newPassword, email } = req.body;
    User.changePassword(email, newPassword, password)
    .then(user => res.send({ user }))
    .catch(error => res.status(404).send({ message: error.message }));
});

userRoute.post('/forgotpassword',  (req, res) => {
    const { email } = req.body;
    User.requestChangePassword(email)
    .then(() => res.send({ message: 'Request sent' }))
    .catch(error => res.status(404).send({ message: error.message }));
});

userRoute.post('/restorepassword',  (req, res) => {
    const { email, code, newPassword } = req.body;
    User.changePasswordWhenForget(email, code, newPassword)
    .then(() => res.send({ message: 'Password changed' }))
    .catch(error => res.status(404).send({ message: error.message }))
});

userRoute.post('/sendKQ', (req, res) =>{
    const {email,name, subject, score} = req.body;
    User.sendMail(email,name, subject, score)
    .then( () =>{ 
    console.log('da goi mailllll');
    res.send( { message: "verified"} )})
    .catch( err => res.status(404).send({ xx: err.message}));

})

module.exports = userRoute;

