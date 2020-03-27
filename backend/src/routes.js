const express = require('express');

const OngControle = require('./controllers/OngControle');
const IncidentControler = require('./controllers/IncidentControler');
const ProfileControler = require('./controllers/ProfileControler');
const SessionControler = require('./controllers/SessionControler');

const routes = express.Router();

routes.post('/session', SessionControler.create);
routes.get('/profile', ProfileControler.index);

routes.get('/ongs', OngControle.index);
routes.post('/ongs', OngControle.create);
routes.get('/incidents', IncidentControler.index);
routes.post('/incidents', IncidentControler.create);
routes.delete('/incidents/:id', IncidentControler.delete);

module.exports = routes;