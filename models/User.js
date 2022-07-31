const { Schema, model } = require("mongoose")


const UsersSchema = Schema({

    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
        unique: true
    }
})


module.exports = model( 'User', UsersSchema )