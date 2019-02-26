'use strict';

angular
    .module('myApp.nuevo', ['ngRoute'])
    .config([
        '$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/nuevo', {
                templateUrl: 'clientes/nuevo/nuevo.view.html',
                controller: 'CustomerController',
            });
        }
    ])
    .controller('CustomerController', [
        function() {
            let vm = this;

            vm.name = 'Hector Pablo';
            vm.lastName = 'Cardenas';
            vm.age = 33;
        }
    ])
    .controller('validacionController', [
        '$http',
        '$scope',
        function($http, $scope){
            $scope.hola = 'Hola mario';
        }
    ]);
