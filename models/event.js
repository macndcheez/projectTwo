const mongoose = require('../db/connection')

const eventSchema = new mongoose.Schema ({
    _id: {
        type: "UUID",
        default: () => randomUUID()
    },
    name: {type: String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    calendarDuration: {type: Number, required: true},
    timezone: {type: String, required: true}
})

const Event = new mongoose.model('Event', eventSchema);
module.exports = Event;