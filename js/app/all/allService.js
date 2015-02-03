(function() {
    'use strict';

    angular.module('karma.example')
        .factory('allService', allService);

    allService.$inject = ['$http'];

    function allService($http) {
        var service = {
            add: add,
            subtract: subtract,
            multiply: multiply,
            divide: divide
        };
        return service;

        function add(valueOne, valueTwo) {
            return $http.post('api/add', { "valueOne": valueOne, "valueTwo": valueTwo });
        }

        function subtract(valueOne, valueTwo) {
            return $http.post('api/subtract', { "valueOne": valueOne, "valueTwo": valueTwo });
        }

        function multiply(valueOne, valueTwo) {
            return $http.post('api/multiply', { "valueOne": valueOne, "valueTwo": valueTwo });
        }

        function divide(valueOne, valueTwo) {
            return $http.post('api/divide', { "valueOne": valueOne, "valueTwo": valueTwo });
        }
    }

})();
