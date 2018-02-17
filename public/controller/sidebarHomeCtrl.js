/**
 * Created by aless on 10/05/2017.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('sidebarHomeCtrl', sidebarHomeCtrl);
    sidebarHomeCtrl.$inject = ['$state', '$stateParams', '$scope', '$http', 'dataFactory'];

    function sidebarHomeCtrl($state, $stateParams, $scope, $http, dataFactory) {

        $scope.competition=[
            {caption:"Classifiche",link:"app.competition"},
            {caption:"Risultati",link:"app.results"},
            {caption:"Previsioni",link:"app.prevision"}
        ];

/*
        dataFactory.ofootball.getCompetitions()
            .then(function (data) {
                $scope.competition = data.data;
            })
            .catch(function (err) {

            });
*/

        $scope.selectItem = function (comp) {
            angular.forEach($scope.competition, function (value, key) {
                value.selected = false;
            });
            $state.go(comp.link);
            comp.selected = true;
        }
    }
})();