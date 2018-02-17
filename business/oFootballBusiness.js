var request = require('request');
var updateInfo = require('../models/updateInfo.js');
var Competition = require('../models/competition.js');
var LeagueTableSchema = require('../models/leagueTableModel');
var fixturesSchema = require('../models/fixturesModel');
//var Standingmodel = require('./standingModel.js')
module.exports = function (app) {

    function getUpdateInfo(req, res) {
        updateInfo.find(function (err, ui) {
            res.json(ui);
        })
    }

    // competition
    app.get('/api/competitions/lastUpdate', function (req, res) {

        getUpdateInfo(req, res);

    });

    app.get('/api/competitions', function (req, res) {

        Competition.find(function (err, comp) {
            if (err) {
                res.send(err);
            }

            if (comp.length > 0 === true) {
                res.json(comp);


            }
            else {
                request({
                    method: 'GET',
                    url: 'http://api.football-data.org/v1/competitions',
                    json: true,
                    headers: {
                        'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
                        'X-Response-Control': 'full'
                    }
                }, function (error, response, body) {
                    console.log(body);

                    for (var i = 0, len = body.length; i < len; i++) {
                        var item = body[i];

                        Competition.create({
                            id: item.id,
                            caption: item.caption,
                            league: item.league,
                            year: item.year,
                            currentMatchday: item.currentMatchday,
                            numberOfMatchdays: item.numberOfMatchdays,
                            numberOfTeams: item.numberOfTeams,
                            numberOfGames: item.numberOfGames,
                            lastUpdated: item.lastUpdated
                        }, function (err, todo) {
                            if (err)
                                res.send(err);
                        });
                    }

                    updateInfo.create({
                        lastUpdated: new Date()
                    });

                    res.json(body);
                });
            }
        });


    });

    app.get('/api/competitions/:id/teams', function (req, res) {
        var id = req.params.id;
        request({
            uri: 'http://api.football-data.org/v1/competitions/' + req.params.id + '/teams',
            headers: {
                'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
                'X-Response-Control': 'full',
            }
        }).pipe(res);
    });

    app.get('/api/competitions/:id/leagueTable/:currentMatchday', function (req, res) {
        var id = req.params.id;

        var query = {'leagueId': req.params.id, 'matchday': req.params.currentMatchday};
        var findQ = LeagueTableSchema.find(query);
        findQ.exec(function (err, docs) {
            if (err) {
                res.send(err);
            }

            if (docs.length > 0 === true) {

                res.json(docs);
            }
            else {
                request({
                    method: 'GET',
                    uri: 'http://api.football-data.org/v1/competitions/' + req.params.id + '/leagueTable?matchday='+req.params.currentMatchday,
                    json: true,
                    headers: {
                        'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
                        'X-Response-Control': 'full'
                    }
                }, function (error, response, body) {
                    console.log(body);

                    LeagueTableSchema.create({
                        leagueCaption: body.leagueCaption,
                        leagueId: req.params.id,
                        matchday: body.matchday,
                        standing: body.standing,
                        _links: {
                            competitions: {
                                href: body._links.competition.href
                            },
                            self: {
                                href: body._links.self.href
                            }
                        }
                    }, function (err, todo) {
                        if (err)
                            res.send(err);
                    });
                    res.json(body);

                });
            }
        });


        //.pipe(res);
    });

    app.get('/api/competitions/:id/fixtures', function (req, res) {
        var id = req.params.id;

        var query = {
            'leagueId': req.params.id//,
        };
        var findQ = fixturesSchema.find(query);
        findQ.exec(function (err, docs) {
            if (err) {
                res.send(err);
            }

            if (docs.length > 0 === true) {

                res.json(docs);
            }
            else {
                request({
                    method: 'GET',
                    uri: 'http://api.football-data.org/v1/competitions/' + req.params.id + '/fixtures',
                    json: true,
                    headers: {
                        'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
                        'X-Response-Control': 'full'
                    }
                }, function (error, response, body) {
                    console.log(body);

                    fixturesSchema.create({
                        count: body.count,
                        leagueId: req.params.id,
                        fixtures:body.fixtures,
                        _links: {
                            competition: {
                                href: body._links.competition.href
                            },
                            self: {
                                href: body._links.self.href
                            }
                        }

                    }, function (err, todo) {
                        if (err)
                            res.send(err);
                    });
                    res.json(body);

                });
            }
        });

        /* request({
         method: 'GET',
         uri: 'http://api.football-data.org/v1/competitions/' + req.params.id + '/fixtures',
         json: true,
         headers: {
         'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
         'X-Response-Control': 'full'
         }
         }, function (error, response, body) {
         console.log(body);

         fixturesSchema.create({
         count: body.count,
         leagueId: req.params.id,
         fixtures:body.fixtures,
         _links: {
         competition: {
         href: body._links.competition.href
         },
         self: {
         href: body._links.self.href
         }
         }
         }, function (err, todo) {
         if (err)
         res.send(err);
         });
         res.json(body);

         })*/
    });

    //fixtures
    app.get('/api/fixtures', function (req, res) {
        request({
            uri: 'http://api.football-data.org/v1/fixtures/',
            headers: {
                'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
                'X-Response-Control': 'full'
            }
        }).pipe(res);
    });

    app.get('/api/fixtures/:id', function (req, res) {
        request({
            uri: 'http://api.football-data.org/v1/fixtures/' + req.params.id,
            headers: {
                'X-Auth-Token': '041b645e8f1c477fb0630e4b1fed932e',
                'X-Response-Control': 'full'
            }
        }).pipe(res);
    })


};