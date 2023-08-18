const mongoose = require('../db/connection')

const scheduleSchema = new mongoose.Schema({
    event: {type: String, required: true},
    time: {}
})