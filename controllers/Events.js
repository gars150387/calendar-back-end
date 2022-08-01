const { response } = require('express')


const getEvents = ( request, response = response ) => {

    return response.json({
        ok: true,
        msg: 'Get events'
    })
}


const createEvent = ( request, response = response ) => {

    //verifivar evento creado
    console.log(request.body)

    return response.json({
        ok: true,
        msg: 'Create event'
    })
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