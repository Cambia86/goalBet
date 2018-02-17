angular.module('myApp').

controller('AppCtrl', ['$scope', '$http','dataFactory', function ($scope, $http,dataFactory) {
    $scope.message = 'Hello World!';


    dataFactory.ofootball.getCompetitions()
        .then(function (data) {
            $scope.competition = data.data;
        })
        .catch(function (err) {

        });


    /* $http.get('/api/todos')
         .then(function (data) {
             var _data = data
         })
         .catch(function (exception) {
             var _exc = exception
         })

     $http.get('/api/competitions/426/teams')
         .then(function (data) {
             var _data = data
         })

     $http.get('/api/competitions/426/leagueTable')
         .then(function (data) {
             var _data = data
         })

     $http.get('/api/competitions/426/fixtures')
         .then(function (data) {
             var _data = data
         })*/

/*    $http.get('/api/competitions')
        .then(function (data) {
            var _data = data
        })*/


    /*$http.get('/api/fixtures')
        .then(function (data) {
            var _data = data
        })
    .catch(function (exception) {
            var _exc = exception
        });*/
}]);

