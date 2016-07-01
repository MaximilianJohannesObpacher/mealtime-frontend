
angular.module('mealtime-frontend')
    .controller('homeController', ['$scope', '$window', 'globalService', 'ngToast', function($scope, $window, globalService, ngToast){
        
        $scope.checkIfLoggedInBool = function() {
            if (globalService.loadGlobal() != null) {
                return true;
            }
            else {
                return false;
            }
        };

        $scope.checkIfRedirectToLogin = function(){
            if(globalService.loadGlobal() != null){
                $window.location.href="/#/createOffering";

            }
        else{
                $window.location.href="/#/login";
            }
    }
}]);