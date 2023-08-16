const express = require('express')
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts')
const authRoutes = require('./controllers/authController')
const session = require('express-session');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(expressLayouts);

app.use(session({ secret: "yerrr", cookie: {maxAge: 3600000}}))
app.use(express.json());
app.use(authRoutes)

app.get('/schedule', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('ello listening in on port: ', port)

})