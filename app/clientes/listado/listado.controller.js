'use strict';

/**
 *
 * @param {Object} data
 */
// function validateData(response) {

//     if (!response.ok)
//         return false;

//     return true;
// }

angular
    .module('myApp.listado', ['ngRoute'])
    .config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/listado', {
                templateUrl: 'clientes/listado/listado.view.html',
                controller: 'clienteController'
            });
        }
    ])

    .controller('clienteController', [
        'httpService',
        function (httpService) {
            let vm = this;

            vm.cosa = 'asdfasdfas';

            return httpService.get('http://localhost:8003/api/clientes').then(response => {
                if(response.statusText !== 'OK') {
                    console.log(`Hubo un error ${JSON.stringify(response)}`);
                    return false;
                }
                vm.listadoClientes = response.data;
                return response.data;
            });

        }
    ]);
