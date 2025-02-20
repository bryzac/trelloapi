require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const trelloRouter = require('./controllers/trello');

app.use(cors());
app.use(express.json());

//Ruta frontend
app.use('/', express.static(path.resolve('views', 'home')));

//Ruta backend
app.use('/api/trello', trelloRouter);

module.exports = app;