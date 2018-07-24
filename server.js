var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Reference = require('./api/models/referencesModel'),
  bodyParser = require('body-parser');

// Using `mongoose.connect`...
var promise = mongoose.connect('mongodb://localhost/Referencedb', {
  useMongoClient: true
  /* other options */
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/referencesRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('References RESTful API server started on: ' + port);
