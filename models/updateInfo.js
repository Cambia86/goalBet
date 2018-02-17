/**
 * Created by aless on 05/05/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var updateInfoSchema = new Schema({
    id: Number,
    lastUpdated: Date
});

var updateInfo = mongoose.model('updateInfo', updateInfoSchema);

module.exports = updateInfo;