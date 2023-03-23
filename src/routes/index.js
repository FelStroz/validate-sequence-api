const routes = require('express').Router();

routes.use('/', require('./api'));

module.exports = routes;
