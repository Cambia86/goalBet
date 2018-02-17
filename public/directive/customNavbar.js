/**
 * Created by aless on 17/05/2017.
 */


(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('customNavbar', customNavbar);

    customNavbar.$inject = ['appVersion'];
    function customNavbar(appVersion) {
        return {
            restrict: 'E',
            /*scope: {
                quest: '=quest'
            },*/
            templateUrl: 'views/directive/customNavbar.html?v=' + appVersion,
            controller: ['$scope','$state', function customNavbarCtrl($scope,$state) {
                $scope.logoClick= function () {
                    $state.go('app.home');
                }
            }]

        };
    }
})();