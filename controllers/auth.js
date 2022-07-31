const express = require('express')
const { validationResult } = require('express-validator')

const createUser = ( request, response = express.response ) => {

    const { name, email, password } = request.body

    return response.status(201).json({
        
        ok: true,
        message: 'register',
        name,
        email,
        password
    })
}

const loginUser = ( request, response = express.response ) => {

    const { email, password } = request.body

    response.json({
        ok: true,
        message: 'login',
        email,
        password
    })
}

const renewToken = ( request, response = express.response  ) => {

    response.json({
        ok: true,
        message: 'renew'
    })
}


module.exports = { 
    createUser,
    loginUser,
    renewToken
}