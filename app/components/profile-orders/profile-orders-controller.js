/**
 * Created by MaximilianObpacher on 01.07.16.
 */

angular.module('mealtime-frontend')

    .controller('profileOrdersController', ['$scope', '$http', '$stateParams', '$window', 'userService',  function ($scope, $http, $stateParams, $window, userService) {

        if(userService.loadGlobal() != null) {

            $scope.user_Id = $stateParams.profileId;
            $scope.isLoggedIn = userService.loadGlobal() == null;
        }
        else{
            $window.location.href="/#/login"
        }
    }]);
