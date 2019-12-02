// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const openApiDocumentation = require('./openApiDocumentation');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

const app = express();

// parse requests JSON 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');
require('./trips.routes.js')(app);

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, function(err, db) {
    if (err) {
        console.log('Unable to connect to the server. Please start the server. Error:', err);
    } else {
        console.log('Connected to Server successfully!');
    }
});

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to MiAguila API REST"});
});

// listen on port 3000
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});