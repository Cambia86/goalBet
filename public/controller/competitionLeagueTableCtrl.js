/**
 * Created by aless on 18/05/2017.
 */
/**
 * Created by aless on 12/05/2017.
 */

(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('competitionLeagueTableCtrl', competitionLeagueTableCtrl);
    competitionLeagueTableCtrl.$inject = ['$state', '$stateParams', '$scope', 'dataFactory'];

    function competitionLeagueTableCtrl($state, $stateParams, $scope, dataFactory) {

        dataFactory.ofootball.getCompetitionLeagueTable($state.params.compid,$state.params.currentMatchday)
            .then(function (data) {
                $scope.leagueTable = data;
            })
            .catch(function (err) {

            });

        $scope.selectCompetition = function (comp) {
            dataFactory.storage.saveCompetition(comp);
            $state.go('app.competitionDetail',{'compid':comp.id});
        }


    }
})();