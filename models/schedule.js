const mongoose = require('../db/connection')

const scheduleSchema = new mongoose.Schema({
    event: {type: String, required: true},
    time: {type: Number, required: true},
    date: {type: String, required: true},
    note: String,
})

const Schedule = new mongoose.model('Schedule', scheduleSchema)
module.exports = Schedule