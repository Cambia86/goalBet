/**
 * Created by aless on 05/05/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var standingSchema = new Schema({
    away:{
        draws:Number,
        goals:Number,
        goalsAgainst:Number,
        losses:Number,
        wins:Number
    },
    crestURI:String,
    draws:Number,
    goalDifference:Number,
    goals:Number,
    goalsAgainst:Number,
    home:{
        draws:Number,
        goals:Number,
        goalsAgainst:Number,
        losses:Number,
        wins:Number
    },
    losses:Number,
    playedGames:Number,
    points:Number,
    position:Number,
    teamName:String,
    wins:Number,
    _links:{
        team:{
            href:String
        }
    }


});

var StandingModel = mongoose.model('Competition', standingSchema);

module.exports = StandingModel;