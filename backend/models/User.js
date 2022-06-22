const { mongo, Schema } = require('mongoose')
const mongoose = require('../db/comn')
const { schema } = mongoose

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
        }
    })
)

    module.exports = User