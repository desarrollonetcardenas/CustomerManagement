'use strict';

angular.module('myApp')
    .factory('httpService', [
        '$http',
        function ($http) {
            let funciones = {};
            try {
                funciones = {
                    get: async (uri)  => {
                        return await $http.get(uri);
                    }
                };
            } catch (error) {
                return error;
            }

            return funciones;
        }
    ]);
