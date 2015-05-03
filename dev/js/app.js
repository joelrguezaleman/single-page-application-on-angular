'use strict';

var angularCorp = angular.module('angularCorp', ['ngRoute', 'ngAnimate']);

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
        when('/team', {
            templateUrl: 'views/team.html',
        }).
        when('/portfolio', {
            templateUrl: 'views/portfolio.html',
        }).
        when('/contact', {
            templateUrl: 'views/contact.html',
        }).
        when('/legal-note', {
            templateUrl: 'views/legal-note.html',
        }).
        when('/privacy-policy', {
            templateUrl: 'views/privacy-policy.html',
        }).
        when('/licenses', {
            templateUrl: 'views/licenses.html',
        }).
        otherwise({
            redirectTo: '/404'
        });
    }
]);

angularCorp.controller('menuController', ['$scope', 
    function ($scope)
    {
        $scope.menu = [
            {'name': 'Home',
             'url': '/',
             'id': 'home'},
            {'name': 'Team',
             'url': '/team',
             'id': 'team'},
            {'name': 'Portfolio',
             'url': '/portfolio',
             'id': 'portfolio'},
            {'name': 'Contact',
             'url': '/contact',
             'id': 'contact'},
            {'name': 'Legal note',
             'url': '/legal-note',
             'id': 'legal-note'},
            {'name': 'Privacy policy',
             'url': '/privacy-policy',
             'id': 'privacy-policy'},
            {'name': 'Licenses',
             'url': '/licenses',
             'id': 'licenses'}
        ];
    }
]);

angularCorp.controller('menuToggleController', 
    function ()
    {
        $('#showMenu').click(function() {
            var menu = $('#menu');
            if (menu.is(':visible')) {
                $('#menu').slideUp();
            } else {
                $('#menu').slideDown();
            }
        });
    }
);

angularCorp.controller('portfolioController', ['$scope', '$http', 
    function ($scope, $http)
    {
        $http.get('../data/portfolio.json').success(function(data) {
            $scope.projects = data;
        });
    }
]);
