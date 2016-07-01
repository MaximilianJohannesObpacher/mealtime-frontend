/**
 * Created by MaximilianObpacher on 19.06.16.
 */

var mealtime = angular.module("mealtime-frontend");

mealtime.controller("OrderMealController", function ($scope, $stateParams, $http, $window, userService) {
    var app = this;

    if(userService.loadGlobal()!=null){
        // getting the meal
        $scope.meal_Id = $stateParams.mealId;
        $scope.isLoggedIn = userService.loadGlobal() == null;

        loadMeal();

        function loadMeal() {
            $http.get("http://localhost:3000/api/meals/" + $scope.meal_Id).success(function (meal) {
                app.meal = meal;
            });
        }

        $scope.required = true;

        this.sendOrder = function (title, message, amount, eatIn){

            $http.post("http://localhost:3000/api/orders",
                {
                    mealId: $scope.meal_Id,
                    title: title,
                    message: message,
                    amount: amount,
                    eatIn: eatIn,
                    chefId: app.meal.chefId,
                    guestId: userService.loadGlobal()._id
                });

            $window.location.href = '/';
        };

    }

    else{
        $window.location.href='/#/login';
    }
    

    
    
    
});