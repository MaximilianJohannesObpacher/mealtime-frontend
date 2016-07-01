/**
 * Created by MaximilianObpacher on 27.05.16.
 */

var mealtime = angular.module("mealtime-frontend");

mealtime.controller("ShowOfferingsController", ['$http', '$scope', '$window', 'globalService', function ($http, $scope, $window, globalService) {
    var app = this;


    $scope.checkIfLoggedInBool = function() {
        if (globalService.loadGlobal() != null) {
            return true;
        }
        else {
            return false;
        }
    };
    
    loadProducts();

    // Setting up offerings list
    function loadProducts() {
        $http.get("http://localhost:3000/api/meals").success(function (offerings) {
            app.offerings = offerings;
        });
    }
    
    /**function loadPictures() {
        $http.get("http://localhost:3000/api/mealPictures").success(function (pictures) {
            console.log(pictures);
            app.pictures = pictures;


            for(i=0; i++; i<pictures.size){
                images.push("data:image/png;base64," + pictures[i].img.data);
            }
            
            app.images = images;

        });
    } **/
}]);