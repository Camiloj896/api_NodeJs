const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { taks } = require('./src/routes/routes')
const app = express();

app.use(bodyParser.json())
app.use(morgan('dev'))

app.set('port', process.env.PORT || 3000)

//ROUTES
app.get('/', taks.get)

app.listen(app.get('port'), () =>  console.log('server on'));