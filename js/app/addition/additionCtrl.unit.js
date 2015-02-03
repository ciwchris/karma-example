(function() {
    'use strict';

    describe('Testing addition in a controller', function(){
        var vm;

        beforeEach(module('karma.example'));

        beforeEach(angular.mock.inject(function($rootScope, $controller){
            vm = $controller('AdditionCtrl', {});
        }));

        it('should add two numbers', function() {
            vm.valueOne = 5;
            vm.valueTwo = 5;

            expect(vm.calculateResult()).toBe(10);
        });
    });
})();
