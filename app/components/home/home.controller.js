(function () {
    'use strict';

    angular.module('mealtime-frontend')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function homeController($scope, $http, $window, $q, asyncService) {

            var vm = this;

            //services
            vm.angularstrapService = asyncService;

            asyncService.getHeroText();

            // from async service
            vm.HeroHeader = asyncService.retrievedData.HeroHeader;
            vm.HeroText = asyncService.retrievedData.HeroText;

            // subsections

            return vm;
       }
})();