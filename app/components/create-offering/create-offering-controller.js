/**
 * Created by MaximilianObpacher on 09.05.16.
 */

var mealtime = angular.module("mealtime-frontend");

mealtime.controller("CreateOfferingController", function ($http) {
    var app = this;
    var url = window.location.href;

    // Catching post request
    app.saveOffering = function (name, price, count, description, address, onSite, takeAway) {
        $http.post("http://localhost:3000/api/meals",
            {
                name: name,
                price: price,
                count: count,
                description: description,
                address: address,
                onSite: onSite,
                takeAway: takeAway,
                vegetarian: true,
                vegan: true,
                glutenfree:true,
                lactosefree: false
            })

    };
});