/**
 * Created by MaximilianObpacher on 09.05.16.
 */

angular
    .module("mealtime-frontend", ['angularFileUpload'])
    .controller("CreateOfferingController", function ($http, $scope, FileUploader) {
        var app = this;
        var url = window.location.href;

        // Catching post request
        app.saveOffering = function (name, price, count, description, address, onSite, takeAway) {
            $scope.uploader = new FileUploader({url: "http://localhost:3000/api/mealPictures"});

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
                    glutenfree: true,
                    lactosefree: false
                })

        };
    });