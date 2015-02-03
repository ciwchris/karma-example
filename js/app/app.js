(function(){
    'use strict';

    angular.module('karma.example', ['ngRoute'])
        .config(config);

        config.$inject = ['$routeProvider'];
        function config($routeProvider) {
            $routeProvider
                .when('/addition', {templateUrl: 'js/app/addition/addition.html', controller: 'AdditionCtrl', controllerAs: 'vm'})
                .when('/all', {templateUrl: 'js/app/all/all.html', controller: 'AddCtrl', controllerAs: 'vm'})
                .otherwise('/addition');
        }

        // Spies (both change location and service properties), injecting other service
        // Testing internal functions
        // Controller does everything
        // Service does everything
})();
