const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentSchema = new Schema({

    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    dni: {type: Number, required: true}
});

module.exports = mongoose.model('Student', StudentSchema);