const express = require('express')
const app = express();
const router = express.Router();
const User = require('../models/user')
const Event = require('../models/event')
const Schedule = require('../models/schedule')
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

router.get('/new-schedule', (req,res) => {
    res.render('events/new-schedule');
})

router.post('/new', async (req, res) => {

    const {eventName, calendarDuration} = req.body
    const durationMonths = parseInt(calendarDuration)
    
    const nanoid = customAlphabet(
        '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 
        5
    );
    const eventId = nanoid();

    const newEvent = new Event({
        eventName, 
        calendarDuration: durationMonths,
        eventCreatedAt: new Date(),
        uniqueUrl: eventId,
    });

    await newEvent.save();


    res.redirect(`/events/${eventId}?calendarDuration=${durationMonths}&eventName=${eventName}`)
});

router.post('/new-schedule', async (req, res) => {
    const {event, time, date, note } = req.body;
    await Schedule.create({ event, time, date, note });
    res.redirect(`/events/${eventId}?calendarDuration=${durationMonths}&eventName=${eventName}`)
})

router.get('/:eventId', async (req, res) => {
    // const eventId = req.params.eventId;
    const calendarDuration = req.query.eventId;
    const eventName = req.query.eventName;
    console.log(eventName)
    res.render('events/index', {
        calendarDuration,
        eventName
    })
})

module.exports = router;





