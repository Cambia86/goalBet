/**
 * Created by aless on 12/05/2017.
 */

(function () {
    'use strict';

    angular
        .module('gb2017.ofootball.service', [])
        .factory('ofootball.service', ofootballService);

    ofootballService.$inject = ['$http', '$q', '$log', 'baseUrlConstant'];

    function ofootballService($http, $q, $log, baseUrlConstant) {
        var baseUrl = baseUrlConstant;
        //var userUrl = 'api';
        //var service = new CRUD(baseUrl + userUrl);
        var service={

        };

        service.getCompetitions = getCompetitions;
        service.getCompetitionLeagueTable=getCompetitionLeagueTable;
        service. getfixture= getfixture;



        function getCompetitions() {
            return $http.get(baseUrl + 'competitions')
                .then(function(data){
                    return data;
                })
                .catch(function (err) {
                    return err;
                });
        }

        function getCompetitionLeagueTable(compid,currentMatchday) {
            return  $http.get('/api/competitions/'+compid+'/leagueTable/'+currentMatchday)
                .then(function(data){
                    if(angular.isArray(data.data)){
                        return data.data[0];
                    }
                    else
                        return data.data;
                })
                .catch(function (err) {
                    return err;
                });
        }

        function getfixture(compid) {
            return  $http.get('/api/competitions/'+compid+'/fixtures')
                .then(function(data){
                    if(angular.isArray(data.data)){
                        return data.data[0];
                    }
                    else
                        return data.data;
                })
                .catch(function (err) {
                    return err;
                });
         /*  return $http.get('/api/fixtures')
                .then(function (data) {
                    return  data
                })
                .catch(function (exception) {
                    return  exception
                })*/
        }


        return service;
    }
})();