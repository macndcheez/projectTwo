const express = require('express')
const app = express();
const router = express.Router();
const User = require('../models/user')
const Event = require('../models/event')

// calendar stuffs
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
        res.render('events/yearlyCalendar.ejs', { events })
    
})

router.get('/new', async (req, res) => {
    let events = await Event.find();
    res.render('events/new.ejs', {
        events
    })
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



router.get('/:eventId', async (req, res) => {
    const event = await Event.findById(req.params.eventId);
    res.render('events/show', { event })
})

module.exports = router;