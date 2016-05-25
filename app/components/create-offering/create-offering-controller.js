/**
 * Created by MaximilianObpacher on 09.05.16.
 */

var mealtime = angular.module("CreateOfferingController", []);

mealtime.controller("CreateOfferingController", function ($http) {
    var app = this;
    var url = window.location.href;

    // Catching post request
    app.saveOffering = function (meal, chef, price) {
        $http.post("http://localhost:3000/api/meals", {meal: meal, chef: chef, price: price}).success(function () {
            loadProducts();
        })
    };
});