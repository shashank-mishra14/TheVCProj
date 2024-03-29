const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    email: String,
    name: String,
    profession: String
});

module.exports = mongoose.model('UserDetails', userDetailsSchema);
