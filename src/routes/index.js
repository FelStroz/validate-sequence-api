const routes = require('express').Router();

routes.use('/v1', require('./api'));

module.exports = routes;
