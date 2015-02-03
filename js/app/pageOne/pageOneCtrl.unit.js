(function() {
    'use strict';

    describe('PageOneCtrl', function(){
        var vm;

        beforeEach(angular.mock.module('karma.example'));

        beforeEach(angular.mock.inject(function($rootScope, $controller){
            vm = $controller('PageOneCtrl', {});
            vm.init();
        }));

        it('should add two numbers', function() {
            vm.operation = vm.operations[0];
            vm.valueOne = 5;
            vm.valueTwo = 5;

            expect(vm.calculateResult()).toBe(10);
        });
    });
})();
