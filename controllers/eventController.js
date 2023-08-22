const express = require('express')
const app = express();
const router = express.Router();
const User = require('../models/user')
const Event = require('../models/event')
const {customAlphabet} = require('nanoid');


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

router.get('/new', async (req, res) => {
    let events = await Event.find();
    res.render('events/new.ejs', {
        events
    })
})

router.post('/new', async (req, res) => {

    const {eventName, calendarDuration} = req.body
    const durationMonths = parseInt(calendarDuration)

    const newEvent = await Event.create({
        eventName, 
        calendarDuration: durationMonths,
        eventCreatedAt: new Date()
    });

    const nanoid = customAlphabet('01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 5);
    let eventId = nanoid()


    res.redirect(`/events/${eventId}?calendarDuration=${durationMonths}`)
});

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
    // const eventId = req.params.eventId;
    const calendarDuration = req.params.eventId;
    res.render('events/index', {
        calendarDuration
    })
})

module.exports = router;





