const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    email: String
});

module.exports = mongoose.model('userdetails', userDetailsSchema);
