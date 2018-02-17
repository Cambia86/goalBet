//var request = require('request');
var Todo = require('./models/todo');

var oFootballBusiness = require('./business/oFootballBusiness.js');
module.exports = function (app) {

    /*app.get('/api/todos', function (req, res) {
        // use mongoose to get all todos in the database
        var data = {
            "id": 1,
            "nome": "pippo"
        };

        res.json(data);
    });*/

    oFootballBusiness(app);
    // app.get('/api/championship', function (req, res) {
    //     request({
    //         uri: 'http://api.football-data.org/v1/competitions',
    //          headers: {
    //                 'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
    //                 'X-Response-Control': 'full',
    //             }
    //     }).pipe(res);
    // })
};