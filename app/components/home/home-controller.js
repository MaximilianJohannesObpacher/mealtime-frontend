
angular.module('mealtime-frontend')
    .controller('homeController', ['$scope', '$window', 'userService', 'ngToast', 'lastPage', function($scope, $window, userService, ngToast, lastPage){

        $scope.isLoggedIn = userService.loadGlobal() == null;

        if(lastPage.loadGlobal()=="login"){
            console.log("In login: ", lastPage.loadGlobal());
            this.isLoggedIn = true;
        }

        console.log("first page: ", lastPage.loadGlobal());
        if(lastPage.loadGlobal() == "ordermeal"){
            ngToast.create("Request sent successful!");
            lastPage.storeGlobal("");
        }

        this.searchOfferings = function(postalCode){
            $window.location.href="/#/showOfferings";
        };

        lastPage.storeGlobal("home");

        $scope.checkIfRedirectToLogin = function(){
            if(userService.loadGlobal() != null){
                $window.location.href="/#/createOffering";

            }
        else{
                lastPage.storeGlobal("createoffering");
                $window.location.href="/#/login";
            }
    }
}]);