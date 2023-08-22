// require mongoose to tell it which database to connect to 
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(
    process.env.DATABASE_URL
);

// check for connection or error
mongoose.connection.on('connected',  () => {
    console.log('mongodb connected!!!')
})

mongoose.connection.on('error', err => {
    console.log('error', err)
})

module.exports = mongoose;