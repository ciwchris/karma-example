(function() {
    'use strict';

    angular.module('karma.example')
        .controller('AdditionCtrl', AdditionCtrl);

    AdditionCtrl.$inject = [];

    function AdditionCtrl() {
        var vm = this;

        vm.valueOne = 0;
        vm.valueTwo = 0;

        vm.calculateResult = calculateResult;

        //#region Exposed Functions

        function calculateResult() {
            return vm.valueOne + vm.valueTwo;
        };

        //#endregion
    }
})();
