const { mongo, Schema } = require('mongoose')
const mongoose = require('../db/comn')
const { Schema } = mongoose

const User = mongoose.model(
    'User',
    new Schema({
        name: {
         type: String,
         required: true
        },
        email: {
         type: String,
         require: true
        },
        password: {
            type: String,
            require: true
           },
           image: {
            type: String,
            
           },
           phone: {
            type: String,
            require: true
           },

        },

        { timestamps: true},
    ),

)

    module.exports = User