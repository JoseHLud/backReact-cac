const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({

    email: String,
    password: String,
    // pet: {
    //     type: Schema.types.objectId,
    //     ref: 'Pet'
    // }


});


module.exports = model('User', userSchema);