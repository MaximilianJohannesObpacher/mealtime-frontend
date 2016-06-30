
angular.module('mealtime-frontend')
    .controller('homeController', ['$scope','$http', '$window', 'fileUpload', 'globalService', function($scope, $http, $window, globalService){

        console.log("in homeController");

        $scope.checkIfLoggedIn = function(){
            console.log("Object: ", globalService.loadGlobal());

            if(globalService.loadGlobal() != null){
                $window.location.href="/#/createOffering"
        }
        else{
                $window.location.href="/#/login"
        }
    }
}]);