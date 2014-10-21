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

angularCorp.controller('bottomMenuController', ['$scope', 
    function ($scope)
    {
        $scope.bottomMenu = [
            {'name': 'Aviso legal',
             'url': '#'},
            {'name': 'Política de privacidad',
             'url': '#'},
            {'name': 'Licencias',
             'url': '#'}
        ];
    }
]);
