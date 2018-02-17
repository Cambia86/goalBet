(function () {
    'use strict';

    angular
        .module('myApp', [
            'ui.router',
            'LocalStorageModule',

            //moduli
            'dataModule'

        ])

        .config(configState)
        .constant('appVersion', '1.1.2')
        .constant('baseUrlConstant', '/api/')
    configState.$inject = ['$stateProvider', '$urlRouterProvider', 'appVersion'];

    function configState($stateProvider, $urlRouterProvider, appVersion) {
        $urlRouterProvider.otherwise('/IT/home');

        $stateProvider

            .state('app', {
                abstract: true,
                url: '/{lang:(?:IT|EN)}',
                template: '<ui-view/>'
            })
            // home page
            .state('app.home', {
                url: '/home',
                views: {
                    /* 'main@': {
                     templateUrl: 'app/app.html',
                     controller: 'AppCtrl'
                     }
                     ,*/
                    'sidebar@': {
                        templateUrl: 'views/sidebar.html',
                        controller: 'sidebarHomeCtrl'
                    }

                }
            })
            .state('app.competition', {
                url: '/competition',
                views: {
                    'main@': {
                        templateUrl: 'views/competition.html',
                        controller: 'CompetitionsCtrl'
                    }
                    ,
                    'sidebar@': {
                        templateUrl: 'views/sidebar.html',
                        controller: 'sidebarHomeCtrl'
                    }

                }
            })

            .state('app.competitionDetail', {
                url: '/competition/:compid/:currentMatchday',
                views: {
                    'main@': {
                        templateUrl: 'views/competitionDetail.html',
                        controller: 'competitionDetailCtrl'
                    }
                    ,
                    'sidebar@': {
                        templateUrl: 'views/sidebarDetail/sidebarCompetition.html',
                        controller: 'sidebarCompetitionCtrl'
                    }

                }
            })

            .state('app.competition.compboard', {
                url: '/:compid/board/:currentMatchday',
                views: {
                    'main@': {
                        templateUrl: 'views/competitionLeagueTable.html',
                        controller: 'competitionLeagueTableCtrl'
                    }
                    ,
                    'sidebar@': {
                        templateUrl: 'views/sidebarDetail/sidebarCompetition.html',
                        controller: 'sidebarCompetitionCtrl'
                    }

                }
            })

            .state('app.competition.fixtures', {
                url: '/:compid/fixtures/:currentMatchday',
                views: {
                    'main@': {
                        templateUrl: 'views/fixtures.html',
                        controller: 'fixturesCtrl'
                    }
                    ,
                    'sidebar@': {
                        templateUrl: 'views/sidebarDetail/sidebarCompetition.html',
                        controller: 'sidebarCompetitionCtrl'
                    }

                }
            })


            .state('app.results', {
                url: '/results',
                views: {
                    'main@': {
                        templateUrl: 'views/results.html',
                        controller: 'resultCtrl'
                    }
                    ,
                    'sidebar@': {
                        templateUrl: 'views/sidebar.html',
                        controller: 'sidebarHomeCtrl'
                    }

                }
            })
            .state('app.prevision', {
                url: '/prevision',
                views: {
                    'main@': {
                        templateUrl: 'views/prevision.html',
                        controller: 'previsionCtrl'
                    }
                    ,
                    'sidebar@': {
                        templateUrl: 'views/sidebar.html',
                        controller: 'sidebarHomeCtrl'
                    }

                }
            })

    }
})();

/*
 'use strict';

 angular.module('myApp', [
 'ui.router'
 ]).config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('IT    /home');

 $stateProvider
 .state('app', {
 abstract: true,
 url: '/{lang:(?:IT|EN)}',
 template: '<ui-view/>'
 })


 .state('app.home', {
 url: '/home',
 templateUrl: 'app/app.html',
 controller: 'AppCtrl'
 });

 }).run(function () {

 }); */
