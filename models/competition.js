/**
 * Created by aless on 05/05/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var competitionSchema = new Schema({
    id: Number,
    caption: String,
    league: String,
    year: String,
    currentMatchday: Number,
    numberOfMatchdays: Number,
    numberOfTeams: Number,
    numberOfGames: Number,
    lastUpdated: Date
});

var Competition = mongoose.model('Competition', competitionSchema);

module.exports = Competition;