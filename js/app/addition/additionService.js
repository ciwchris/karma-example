(function() {
    'use strict';

    angular.module('karma.example')
        .factory('additionService', additionService);

    additionService.$inject = ['$http'];

    function additionService($http) {
        var service = {
            add: add
        };
        return service;

        function add(valueOne, valueTwo) {
            return $http.post('api/addition', { "valueOne": valueOne, "valueTwo": valueTwo });
        }
    }

})();
