/**
 * Created by aless on 12/05/2017.
 */

(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('CompetitionsCtrl', CompetitionsCtrl);
    CompetitionsCtrl.$inject = ['$state', '$stateParams', '$scope', 'dataFactory'];

    function CompetitionsCtrl($state, $stateParams, $scope, dataFactory) {

        dataFactory.ofootball.getCompetitions()
            .then(function (data) {
                $scope.competitions = data.data;
            })
            .catch(function (err) {

            });

        $scope.selectCompetition = function (comp) {
            dataFactory.storage.saveCompetition(comp);
            $state.go('app.competitionDetail',{'compid':comp.id, 'currentMatchday':comp.currentMatchday});
        }


    }
})();