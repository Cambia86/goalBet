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
        .controller('resultCtrl', resultCtrl);
    resultCtrl.$inject = ['$state', '$stateParams', '$scope', 'dataFactory'];

    function resultCtrl($state, $stateParams, $scope, dataFactory) {

       /* dataFactory.ofootball.getCompetitions()
            .then(function (data) {
                $scope.competitions = data.data;
            })
            .catch(function (err) {

            });

        $scope.selectCompetition = function (comp) {
            /!*angular.forEach($scope.competition, function (value, key) {
             value.selected = false;
             });*!/
            $state.go('app.competition');
            comp.selected = true;
        }*/
    }
})();