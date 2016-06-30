/**
 * Created by MaximilianObpacher on 19.06.16.
 */

var mealtime = angular.module("mealtime-frontend");

mealtime.controller("OrderMealController", function ($scope, $stateParams, $http, $window, globalService) {
    var app = this;

    // getting the meal
    $scope.meal_Id = $stateParams.mealId;

    loadMeal();

    function loadMeal() {
        $http.get("http://localhost:3000/api/meals/" + $scope.meal_Id).success(function (meal) {
            app.meal = meal;
        });
    }

    this.sendOrder = function (title, message, amount, eatIn){

        $http.post("http://localhost:3000/api/orders",
            {
                mealId: $scope.meal_Id,
                title: title,
                message: message,
                amount: amount,
                eatIn: eatIn,
                chefId: app.meal.chefId,
                guestId: globalService.loadGlobal()._id
            });

        $window.location.href = '/';
    };
    
    
    
});