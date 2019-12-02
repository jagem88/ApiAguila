module.exports = (app) => {
    const trips = require('./Controllers/trips.controller.js');

    // Create a new trips
    app.post('/trips', trips.create);

    // Retrieve all trips
    app.get('/trips', trips.findAll);

    // Retrieve all trips 
    app.get('/trips/:city', trips.findCity);

    // Update a Note with Id
     app.put('/trips/:Id', trips.updateByid);
}