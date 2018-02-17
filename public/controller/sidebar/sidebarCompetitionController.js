/**
 * Created by aless on 16/05/2017.
 */
/**
 * Created by aless on 16/05/2017.
 */
/**
 * Created by aless on 16/05/2017.
 */
/**
 * Created by aless on 12/05/2017.
 */

(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('sidebarCompetitionCtrl', sidebarCompetitionCtrl);
    sidebarCompetitionCtrl.$inject = ['$state', '$stateParams', '$scope', 'dataFactory'];

    function sidebarCompetitionCtrl($state, $stateParams, $scope, dataFactory) {

        $scope.competition=dataFactory.storage.getCompetition();

        $scope.option=[
            {caption:"Classifiche",link:"app.competition"},
            {caption:"Risultati",link:"app.results"},
            {caption:"Previsioni",link:"app.prevision"}
        ];


        $scope.selectItem = function (comp) {
            angular.forEach($scope.competition, function (value, key) {
                value.selected = false;
            });
            $state.go(comp.link);
            comp.selected = true;
        }
    }
})();