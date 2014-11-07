'use strict';

var angularCorp = angular.module('angularCorp', ['ngRoute']);

angularCorp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) 
    {
        $locationProvider.html5Mode(true);

        $routeProvider.
        when('/', {
            templateUrl: 'views/welcome.html'
        }).
        when('/404', {
            templateUrl: 'views/404.html',
        }).
        when('/equipo', {
            templateUrl: 'views/equipo.html',
        }).
        when('/portafolio', {
            templateUrl: 'views/portafolio.html',
        }).
        when('/contacto', {
            templateUrl: 'views/contacto.html',
        }).
        when('/aviso-legal', {
            templateUrl: 'views/aviso-legal.html',
        }).
        when('/politica-privacidad', {
            templateUrl: 'views/politica-privacidad.html',
        }).
        when('/licencias', {
            templateUrl: 'views/licencias.html',
        }).
        otherwise({
            redirectTo: '/404'
        });
    }
]);

angularCorp.controller('topMenuController', ['$scope', 
    function ($scope)
    {
        $scope.topMenu = [
            {'name': 'Inicio',
             'url': '/',
             'id': 'inicio'},
            {'name': 'Equipo',
             'url': '/equipo',
             'id': 'equipo'},
            {'name': 'Portafolio',
             'url': '/portafolio',
             'id': 'portafolio'},
            {'name': 'Contacto',
             'url': '/contacto',
             'id': 'contacto'}
        ];
    }
]);

angularCorp.controller('bottomMenuController', ['$scope', 
    function ($scope)
    {
        $scope.bottomMenu = [
            {'name': 'Aviso legal',
             'url': '/aviso-legal',
             'id': 'legal'},
            {'name': 'Política de privacidad',
             'url': '/politica-privacidad',
             'id': 'politica'},
            {'name': 'Licencias',
             'url': '/licencias',
             'id': 'licencias'}
        ];
    }
]);
