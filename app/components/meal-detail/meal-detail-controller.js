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

});