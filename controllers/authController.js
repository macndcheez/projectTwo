const express = require('express');
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

// LOGIN
router.get('/login', (req, res) => {
    console.log('hello!')
    res.render('auth/login')
})

router.get('/profile', (req,res) => {
    console.log('put profile render page')
})

router.post('/login', async (req, res) => {
    console.log(req.body);
    
    let userToLogin = await User.findOne({ username: req.body.username})

    if (userToLogin) {
        bcrypt.compare(req.body.password, userToLogin.password, (err, result) => {
            if(result){
                req.session.userId = userToLogin._id
                req.session.name = userToLogin.name;
                res.redirect('/events/new')
            } else {
                res.send('no can do ')
            }
        });
    }
});



router.post('/signup', async (req, res) => {
    if (req.body.username && req.body.password) {
        let plainTextPass = req.body.password
        bcrypt.hash(plainTextPass, 10, async (err, hashedPass) => {
            req.body.password = hashedPass
            let newUser = await User.create(req.body)
            res.send(newUser)

        });
        res.redirect('/events')
    }
});

// SIGN UP
router.get('/signup', (req, res) => {
    res.render('auth/signup')
})

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})

module.exports = router