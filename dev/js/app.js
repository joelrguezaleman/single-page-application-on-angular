'use strict';

var angularCorp = angular.module('angularCorp', []);

angularCorp.controller('topMenuController', ['$scope', 
    function ($scope)
    {
        $scope.topMenu = [
            {'name': 'Inicio',
             'url': '#'},
            {'name': 'Equipo',
             'url': '#'},
            {'name': 'Portafolio',
             'url': '#'},
            {'name': 'Contacto',
             'url': '#'}
        ];
    }
]);
