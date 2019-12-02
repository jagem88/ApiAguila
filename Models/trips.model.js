
const mongoose = require('mongoose');

const TripsSchema = mongoose.Schema({
        date: Date,
        type: String,
        coordinates: Number,

        pickup_address: String,
        pickup_location: String,
     
        name: String,
   
        first_name: String,
        last_name: String,

        plate: String,
          
        start: String,
        end: String,
        country: String,
        city: String,
        passenger: String,
        driver: String,
        car: String,
        status: String,
        check_code: String,
        createdAt: Date,
        updatedAt: Date,
        price: Number,
        driver_location: String,
    });

    module.exports = mongoose.model('Trips', TripsSchema);
