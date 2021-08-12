const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const authUsuarios = require('./routes/auth-usuarios')
const servicioRouter = require('./routes/servicio')

require('dotenv').config();

let database = require('./db/database');
var app = express();

//Middleware (Debe ingresarse respectivamente en el orden establecido.)
app.use(cors());
app.use(express.static('public'));
app.set('port', process.env.PORT || 3000);
//Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Rutas
app.use('/usuarios', authUsuarios);
app.use('/servicios', servicioRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on ${process.env.PORT || 3000} port!`);
});