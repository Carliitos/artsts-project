//Setting up the server

//res api is an app which sends and recieves data
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database') //adding db

//  Settings
app.set('port', process.env.PORT || 3000); //En producción, pilla el puerto definido en la nube y si no existe utiliza el 3000

//  middlewares
app.use(morgan('dev'));//
app.use(express.json());//get and understand json files
app.use(cors({origin: 'http://localhost:4200'}));

//  Routes
app.use('/api/artists',require('./routes/artists.routes'))

//  Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
})
