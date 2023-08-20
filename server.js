const express = require('express')
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts')
const authController = require('./controllers/authController')
const eventController = require('./controllers/eventController')
// const session = require('express-session');
const {Calendar} = require('@fullcalendar/core')
const dayGridPlugin = require('@fullcalendar/daygrid')
const interactionPlugin = require('@fullcalendar/interaction')
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(expressLayouts);

// app.use(session({ secret: "yerrr", cookie: {maxAge: 3600000}}))
app.use(express.json());
app.use(authController);
// app.use(eventController);

app.get('/', (req, res) => {
    res.render('home')
})



// own middleware for checking logged in
// app.use((req, res, next) => {

//     console.log(req.session)
//     if (!req.session.userId){
//         res.redirect('/login')
//         return
//     }

//     next();
// });

// app.use((req,res,next) => {
//     const userId = req.session.userId
//     res.locals.user = req.session.userId ? true : false;
//     next();
// })


app.use('/events', eventController );


app.listen(port, () => {
    console.log('ello listening in on port: ', port)

})