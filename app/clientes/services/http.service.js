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
                    },
                    delete: async (uri) =>  {
                        return await $http.delete(uri);
                    }
                };
            } catch (error) {
                return error;
            }

            return funciones;
        }
    ]);
