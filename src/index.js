const { json } = require('express');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const { mongoose } = require('./database');


const app = express();

//settings
app.set('port', process.env.PORT || 3500);

//CORS
app.use(cors());

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/student', require('./routes/student.routes'));


app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});