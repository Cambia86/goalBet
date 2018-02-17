
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('fixturesCtrl', fixturesCtrl);
    fixturesCtrl.$inject = ['$state', '$stateParams', '$scope', 'dataFactory'];

    function fixturesCtrl($state, $stateParams, $scope, dataFactory) {

        $scope.currentMatchday =$state.params.currentMatchday;

        $scope.myFilter = function (item) {
            if (item.matchday == $scope.currentMatchday) {
                return item;
            }
        };

        dataFactory.ofootball.getfixture($state.params.compid)
            .then(function (data) {
                $scope.fixtureList = data;
            })
            .catch(function (err) {

            });

  /*      $scope.selectCompetition = function (comp) {
            dataFactory.storage.saveCompetition(comp);
            $state.go('app.competitionDetail',{'compid':comp.id});
        }
*/

    }
})();