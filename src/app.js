const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const morgan  = require('morgan')
const cors = require('cors');


//database
require("./models/database");


//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())


//controllers
require('./controllers/contact')(app);

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`Server listen in de port ${app.get('port')}. URL: http://localhost:${app.get('port')}`)
})