(function() {
    'use strict';

    describe('AllCtrl', function(){
        var vm;

        beforeEach(angular.mock.module('karma.example'));

        beforeEach(angular.mock.inject(function($rootScope, $controller){
            vm = $controller('AllCtrl', {});
            vm.init();
        }));

        it('should support all arthimetic operations in order', function() {
            expect(_.pluck(vm.operations, 'symbol')).toEqual(['+','-','*','/'])
        });

        it('should add two numbers', function() {
            vm.operation = _.find(vm.operations, {'symbol':'+'});
            vm.valueOne = 5;
            vm.valueTwo = 5;

            expect(vm.calculateResult()).toBe(10);
        });

        it('should subtract two numbers', function() {
            vm.operation = _.find(vm.operations, {'symbol':'-'});
            vm.valueOne = 5;
            vm.valueTwo = 2;

            expect(vm.calculateResult()).toBe(3);
        });

        it('should multiply two numbers', function() {
            vm.operation = _.find(vm.operations, {'symbol':'*'});
            vm.valueOne = 5;
            vm.valueTwo = 5;

            expect(vm.calculateResult()).toBe(25);
        });

        it('should multiply two numbers', function() {
            vm.operation = _.find(vm.operations, {'symbol':'/'});
            vm.valueOne = 25;
            vm.valueTwo = 5;

            expect(vm.calculateResult()).toBe(5);
        });
    });
})();
