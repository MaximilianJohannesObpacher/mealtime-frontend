
angular.module('mealtime-frontend')
    .controller('homeController', ['$scope', '$window', 'userService', 'ngToast', function($scope, $window, userService, ngToast){

        $scope.isLoggedIn = userService.loadGlobal() == null;
        
        $scope.checkIfRedirectToLogin = function(){
            if(userService.loadGlobal() != null){
                $window.location.href="/#/createOffering";

            }
        else{
                $window.location.href="/#/login";
            }
    }
}]);