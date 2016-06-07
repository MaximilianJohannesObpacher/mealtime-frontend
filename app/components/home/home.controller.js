(function () {
    'use strict';

    angular.module('mealtime-frontend')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

            var vm = this;

            //services
            vm.angularstrapService = asyncService;

            return vm;
       }
})();