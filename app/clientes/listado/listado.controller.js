'use strict';

angular
    .module('myApp.listado', ['ngRoute'])
    .config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/listado', {
                templateUrl: 'clientes/listado/listado.view.html',
                controller: 'listadoClientesController'
            });
        }
    ])
    .controller('listadoClientesController', [
        'httpService',
        '$scope',
        function (httpService, $scope) {

            $scope.eliminar = function(id) {

                httpService.delete(`http://localhost:8003/api/clientes/${id}`).then(response => {
                    $scope.clientes = response.data;

                    return response.data;
                });

                /**
                 * Obtener la lista de clientes actualizada
                 */
                $scope.listado();
            };

            $scope.listado = function() {
                return httpService.get('http://localhost:8003/api/clientes').then(response => {
                    if(response.statusText !== 'OK') {
                        console.warn(`Hubo un error ${JSON.stringify(response)}`);
                        return false;
                    }
                    $scope.clientes = response.data;

                    return response.data;
                });
            };

            /**
             * Otener listado de clientes al cargar la pagina
             */
            $scope.listado();
        }
    ]);
