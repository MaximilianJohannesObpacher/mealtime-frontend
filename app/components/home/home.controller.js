(function () {
    'use strict';

    angular.module('mealtime-frontend')
        .controller('homeController', homeController);

    homeController.$inject = ["$scope", "$http", "$window", "$q", ];

    function homeController() {
            return this;
       }
})();