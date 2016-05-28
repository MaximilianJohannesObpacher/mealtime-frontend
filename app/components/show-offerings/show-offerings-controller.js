/**
 * Created by MaximilianObpacher on 27.05.16.
 */

var mealtime = angular.module("mealtime-frontend");

mealtime.controller("ShowOfferingsController", function ($http) {
    var app = this;

    loadProducts();

    // Setting up offerings list
    function loadProducts() {
        $http.get("http://localhost:3000/api/meals").success(function (offerings) {
            app.offerings = offerings;
        });
    }
});