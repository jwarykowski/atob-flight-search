const bodyParser = require('body-parser');
const compress = require('compression');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();
const buildPath = path.resolve(__dirname, 'public');

app.use(compress());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(express.static(buildPath));
app.use(routes.web);
app.use('/api', routes.api);

app.listen(process.env.PORT || 3000);
