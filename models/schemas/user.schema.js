const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // pet: {
    //     type: Schema.types.objectId,
    //     ref: 'Pet'
    // }


});


module.exports = model('User', userSchema);