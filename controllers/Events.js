const { response } = require('express')
const Event = require('../models/Event')


const getEvents = async ( request, response = response ) => {

    const events = await Event.find()

    return response.json({
        ok: true,
        events
    })
}


const createEvent = async ( request, response = response ) => {

    const event = new Event( request.body)

    console.log( event )
    event.user = request.uid

    console.log( event.user )

    try {
        
        const eventSaved = await event.save()

        return response.json({
            ok: true,
            msg: 'Create event',
            event: eventSaved 
        })    


    } catch (error) {
        console.log(error)
        response.status(500).json({
            ok: false,
            msg: 'Please contact administrater'
        })
        
    }

}


const editEvent = ( request, response = response ) => {

    return response.json({
        ok: true,
        msg: 'Edit event'
    })
}


const deleteEvent = ( request, response = response ) => {

    return response.json({
        ok: true,
        msg: 'Delete event'
    })
}


module.exports = {
    getEvents,
    createEvent,
    editEvent,
    deleteEvent
}