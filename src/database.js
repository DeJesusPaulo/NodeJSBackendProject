const mongoose = require('mongoose');
const URI = 'mongodb://localhost/students';

mongoose.connect(URI)
    .then(console.log('Connected to DB'))
    .catch(err => console.error(err));

module.exports = mongoose;