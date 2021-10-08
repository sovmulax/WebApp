const decRoute = require('express');
const Router = decRoute.Router();
const decControllers = require('../Controllers/decController');

//get
Router.get('/', decControllers.accueil);

//post
Router.post('/apercu', decControllers.apercu);

module.exports = Router;