let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const db = require('./model/db');

let authMiddleware = require('./middleware/auth')
let app = express();
app.use(cors());

logger.token('id', function getId (req) {
    return req.id
})

let loggerStyle = process.env.MORGAN_CONFIG || ":id :method :url :status :response-time ms - :res[content-length]"

app.use(authMiddleware.assignId)
app.use(logger(loggerStyle));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.all('*', require('./routes/index'));

module.exports = app;
