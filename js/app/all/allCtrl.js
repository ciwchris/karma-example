(function() {
    'use strict';

    angular.module('karma.example')
        .controller('AllCtrl', AllCtrl);

    AllCtrl.$inject = [];

    function AllCtrl() {
        var vm = this;

        vm.valueOne = 0;
        vm.valueTwo = 0;
        vm.operations = [];
        vm.operation = null;

        vm.init = init;
        vm.calculateResult = calculateResult;

        //#region Exposed Functions

        function init() {
            vm.operations = [
                {symbol: '+', implementation: function(one, two) {return one + two;} },
                {symbol: '-', implementation: function(one, two) {return one - two;} },
                {symbol: '*', implementation: function(one, two) {return one * two;} },
                {symbol: '/', implementation: function(one, two) {return one / two;} }
            ];
            vm.operation = vm.operations[0];
        }

        function calculateResult() {
            return vm.operation.implementation(vm.valueOne, vm.valueTwo);
        };

        //#endregion
    }
})();
