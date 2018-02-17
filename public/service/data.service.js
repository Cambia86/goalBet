/**
 * Created by aless on 04/02/2017.
 */
(function () {
    'use strict';


    angular
        .module('dataModule', ['gb2017.ofootball.service','serviceModule'])
        .factory('dataFactory', dataFactory);
   // dataFactory.$inject = ['user.service','pagedata.service','questionanswer.service'];
    dataFactory.$inject = ['ofootball.service', 'storageService'];

        function dataFactory(ofootballService,storageService) {
        return {
            ofootball:ofootballService,
            storage:storageService
           /* user: userService,
            pageData:pageData,
            questionanswer:questionanswer*/
        }
    }

})();