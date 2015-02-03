(function(){
    'use strict';

    angular.module('karma.example', ['ngRoute'])
        .config(config);

        config.$inject = ['$routeProvider'];
        function config($routeProvider) {
            $routeProvider
                .when('/pageOne', {templateUrl: 'js/app/pageOne/page-one.html', controller: 'PageOneCtrl', controllerAs: 'vm'})
                .otherwise('/pageOne');
        }

        // Route: addition, subtraction, all (spies)
        // Controller does everything
        // Service does everything
})();
