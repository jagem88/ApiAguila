const Trips = require('../Models/trips.model.js');

//Create new trip
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Create a trip
    const trip = new Trips({
        date: req.body.date,
        type: req.body.type,
        coordinates: req.body.coordinates,
        pickup_address: req.body.pickup_address,
        pickup_location: req.body.pickup_location,
        name: req.body.name,
        first_name: req.body.first_name,
        last_name: req.body.last_name,     
        plate: req.body.plate,
        start: req.body.start,
        end: req.body.end,
        country: req.body.country,
        city: req.body.city,
        passenger: req.body.passenger,
        driver: req.body.driver,
        car: req.body.car,
        status: req.body.status,
        check_code: req.body.check_code,
        createdAt: req.body.createdAt,
        updatedAt: req.body.updatedAt,
        price: req.body.price,
        driver_location: req.body.driver_location,
    });

    // Save trip in the database
    trip.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the Trips."
        });
    });
};



// Retrieve all Trips from the database.
exports.findAll = (req, res) => {
    Trips.find({})
    .limit(10)
    .lean()
    .then(trips => {
        res.send(trips);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Trips."
        });
    });
};


// Retrieve all Trips from name City.
exports.findCity = (req, res) => {
    Trips.find({"city.name": req.params.city})
    .limit(10)
    .lean()
    .then(trips => {
        res.send(trips);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving Trips."
        });
    });
};


exports.updateByid = (req, res) => {
    Trips.findOneAndUpdate({ "_id" : req.params.id },
        req.body,
        { new: true },
        (err, Trips) => {
        if (err) {
          res.status(400).json(err);
        }
        res.json(Trips);
      });
  
}
