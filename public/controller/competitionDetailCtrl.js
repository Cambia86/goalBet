/**
 * Created by aless on 16/05/2017.
 */

(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('competitionDetailCtrl', competitionDetailCtrl);
    competitionDetailCtrl.$inject = ['$state', '$stateParams', '$scope', 'dataFactory'];

    function competitionDetailCtrl($state, $stateParams, $scope, dataFactory) {

        var init = function () {
            var _param = $state.params.compid;
            $scope.competitionDet = dataFactory.storage.getCompetition();

        };

        $scope.showClassifica = function () {
            $state.go('app.competition.compboard', {'compid':$state.params.compid, 'currentMatchday':$state.params.currentMatchday})
        };

        $scope.showfixtures = function () {
            $state.go('app.competition.fixtures', {'compid':$state.params.compid,'currentMatchday':$state.params.currentMatchday})
        };

        init();

    }
})();
