/**
 * Created by aless on 16/05/2017.
 */
/**
 * Created by aless on 12/05/2017.
 */

(function () {
    'use strict';

    angular
        .module('serviceModule', [])
        .factory('storageService', storageService);

    storageService.$inject = ['$http', '$q', '$log', 'baseUrlConstant','localStorageService'];

    function storageService($http, $q, $log, baseUrlConstant,localStorageService) {
        var baseUrl = baseUrlConstant;
        //var userUrl = 'api';
        //var service = new CRUD(baseUrl + userUrl);
        var service={

        };

        service.saveCompetition = saveCompetition;
        service.getCompetition = getCompetition ;
        service.clearCompetition = clearCompetition  ;



        function saveCompetition(comp) {
            localStorageService.set("currCompetition", comp);
        }
        function getCompetition(comp) {
            return localStorageService.get("currCompetition");
        }
        function clearCompetition(comp) {
            localStorageService.set("currCompetition", null);
        }


        return service;
    }
})();