const express = require('express')
const app = express();
const router = express.Router();
const User = require('../models/user')
const Event = require('../models/event')
const {Calendar} = require('@fullcalendar/core')
const dayGridPlugin = require('@fullcalendar/daygrid')
const interactionPlugin = require('@fullcalendar/interaction')

router.get('/', async (req, res) => {
     let events = await Event.find()
     res.render('events/index', {
        events
     })
})

router.get('/calendar/yearly', async (req,res) => {
        const events = await Event.find();
        res.render('events/yearlyCalendar', { events })
    
})

// router.get('/seed', async (req, res) => {
//     await Event.delete({});
//     let seededEvents = await Event.create([
//         {
//         eventName: "fall 2023 south bay pals calendar",
//         calendarDuration: "August - "

//         }
//     ])
// })

router.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.redirect('/events');
    } catch (err) {
        console.error(err);
        res.status(500).send('very no can do')
    }
})

router.get('/:eventId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.render('events/show', { event })
    } catch (err) {
        console.error(err);
        res.status(500).send('meep error')
    }
})

module.exports = router;