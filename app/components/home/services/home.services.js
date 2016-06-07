(function () {
    'use strict';

    angular.module('mealtime-frontend.homeServices', [])
        .service('asyncService', asyncService);

    asyncService.$inject = ['$http', '$q'];

        function asyncService($http, $q) {
            
        }
})();