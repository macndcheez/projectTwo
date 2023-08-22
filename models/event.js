const mongoose = require('../db/connection')

const eventSchema = new mongoose.Schema ({
    eventName: {type: String, required: true},
    calendarDuration: {type: Number, required: true},
})

const Event = new mongoose.model('Event', eventSchema);
module.exports = Event;