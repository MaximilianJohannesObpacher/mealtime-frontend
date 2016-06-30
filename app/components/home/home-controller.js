
angular.module('mealtime-frontend')
    .controller('homeController', ['$scope', '$window', 'globalService', function($scope, $window, globalService){

        console.log("in homeController");

        $scope.checkIfLoggedIn = function(){
            if(globalService.loadGlobal() != null){
                $window.location.href="/#/createOffering"
        }
        else{
                $window.location.href="/#/login"
        }
    }
}]);