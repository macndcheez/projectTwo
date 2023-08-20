const mongoose = require('../db/connection')

const eventSchema = new mongoose.Schema ({
    _id: mongoose.Schema.Types.ObjectId,
    eventName: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    calendarDuration: {type: String, required: true},
    timezone: {type: String, required: true}
})

const Event = new mongoose.model('Event', eventSchema);
module.exports = Event;