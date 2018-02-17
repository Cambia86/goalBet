var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Standingmodel = require('./standingModel.js')

var standingSchema = new Schema({
    away: {
        draws: Number,
        goals: Number,
        goalsAgainst: Number,
        losses: Number,
        wins: Number
    },
    crestURI: String,
    draws: Number,
    goalDifference: Number,
    goals: Number,
    goalsAgainst: Number,
    home: {
        draws: Number,
        goals: Number,
        goalsAgainst: Number,
        losses: Number,
        wins: Number
    },
    losses: Number,
    playedGames: Number,
    points: Number,
    position: Number,
    teamName: String,
    wins: Number,
    _links: {
        team: {
            href: String
        }
    }


});
// create a schema
var LeagueTableSchema = new Schema({
    leagueCaption: String,
    leagueId:Number,
    matchday: Number,
    standing: [standingSchema],
    _links:{
        competitions:{
            href:String
        },
        self:{
            href:String
        }
    }

});

var LeagueTableSchema = mongoose.model('LeagueTable', LeagueTableSchema);

module.exports = LeagueTableSchema;