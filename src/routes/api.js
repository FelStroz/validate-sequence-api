let express = require('express');
let routes = express.Router();
let api = require('../controller/api');
const validationMiddleware = require('../middleware/validation');

routes.get('/stats', api.showStats);
routes.get('/complete-stats', api.getList);

routes.use(validationMiddleware);
routes.post('/sequence', api.create);

module.exports = routes;
