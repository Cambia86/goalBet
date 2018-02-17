/**
 * Created by aless on 09/05/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var Standingmodel = require('./standingModel.js')

var fixturesSchema = new Schema({
    count: Number,
    leagueId:Number,
    fixtures:[{
        awayTeamName:String,
        date:Date,
        homeTeamName:String,
        matchday:Number,
        odds:{
            awayWin:Number,
            draw:Number,
            homeWin:Number
        },
        result:{
            goalsAwayTeam:Number,
            goalsHomeTeam:Number,
            halfTime:{
                goalsAwayTeam:Number,
                goalsHomeTeam:Number
            }
        },
        status:String,
        _links:{
            awayTeam:{ href: String},
            competition:{ href: String},
            homeTeam:{ href: String},
            self:{ href: String}
        }
    }],
    _links: {
        competition: {
            href: String
        },
        self: {
            href: String
        }
    }
});


var fixturesModel = mongoose.model('fixtures', fixturesSchema);

module.exports = fixturesModel;