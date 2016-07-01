
angular.module('mealtime-frontend')
    .controller('homeController', ['$scope', '$window', 'globalService', function($scope, $window, globalService){

        console.log("in headerController");

        $scope.checkIfLoggedInBool = function() {
            console.log("in checkIfLoggedIn");
            if (globalService.loadGlobal() != null) {
                return true;
            }
            else {
                return false;
            }
        };

        $scope.checkIfRedirectToLogin = function(){
            console.log("in checkIfLoggedIn");
            if(globalService.loadGlobal() != null){
                $window.location.href="/#/createOffering";

            }
        else{
                $window.location.href="/#/login";
            }
    }
}]);