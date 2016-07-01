/**
 * Created by MaximilianObpacher on 27.05.16.
 */

var mealtime = angular.module("mealtime-frontend");

mealtime.controller("ShowOfferingsController", ['$http', '$scope', '$window', 'userService', 'lastPage', 'ngToast', function ($http, $scope, $window, userService, lastPage, ngToast) {
    var app = this;


    $scope.isLoggedIn = userService.loadGlobal() == null;

    console.log("Last page: ", lastPage.loadGlobal());
    if(lastPage.loadGlobal() == "createoffering"){
        lastPage.storeGlobal("");
        ngToast.create("Offering created successful!");
    }

    lastPage.storeGlobal("showofferings");

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