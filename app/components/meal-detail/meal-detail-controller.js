/**
 * Created by MaximilianObpacher on 17.06.16.
 */
var mealtime = angular.module("mealtime-frontend");

mealtime.controller("MealDetailController", function ($http, $scope, $stateParams) {
    var app = this;

    $scope.meal_Id = $stateParams.mealId;

    loadMeal();

    function loadMeal() {
        $http.get("http://localhost:3000/api/meals/" + $scope.meal_Id).success(function (meal) {
            app.meal = meal;
        });
    }

    /** Map excluded cause of google dependency not working
     * 
     * function initialize() {
        var mapProp = {
            center:new google.maps.LatLng(48.2625,11.6670),
            zoom:16,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    
    google.maps.event.addDomListener(window, 'load', initialize); **/



});