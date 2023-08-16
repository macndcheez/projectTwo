// require mongoose to tell it which database to connect to 
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://macndcheez:Jellypiano140!@sei.jieendy.mongodb.net/free'
);

// check for connection or error
mongoose.connection.on('connected',  () => {
    console.log('mongodb connected!!!')
})

mongoose.connection.on('error', err => {
    console.log('error', err)
})

module.exports = mongoose;