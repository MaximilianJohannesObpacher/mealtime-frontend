/**
 * Created by MaximilianObpacher on 09.05.16.
 */

var myApp = angular.module("mealtime-frontend");


myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
            .success(function(){
            })
            .error(function(){
            });
    }
}]);

myApp.controller('CreateOfferingController', ['$scope','$http', '$window', 'fileUpload', function($scope, $http, $window, fileUpload){

    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost:3000/api/mealPictures";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    this.saveOffering = function (name, price, count, description, address, onSite, takeAway, vegetarian, vegan, glutenfree, lactosefree) {

        if(name==undefined){
            name = "No name given!";
        }
        if(price==undefined){
            price = 0;
        }
        if(description==undefined){
            description = "No Description";
        }
        if(count==undefined){
            count = 1;
        }
        if(takeAway==undefined){
            takeAway = false;
        }
        if(onSite==undefined){
            onSite = false;
        }
        if(vegetarian==undefined){
            vegetarian = false;
        }
        if(vegan==undefined){
            vegan = false;
        }
        if(glutenfree==undefined){
            glutenfree = false;
        }
        if(lactosefree==undefined){
            lactosefree = false;
        }


        $http.post("http://localhost:3000/api/meals",
            {
                name: name,
                price: price,
                count: count,
                description: description,
                address: address,
                onSite: onSite,
                takeAway: takeAway,
                vegetarian: vegetarian,
                vegan: vegan,
                glutenfree: glutenfree,
                lactosefree: lactosefree
            });

        $window.location.href = '/#/showOfferings';
    };



}]);

/**mealtime.controller("CreateOfferingController", ['$scope', 'fileUpload', function($scope, fileUpload){
    var app = this;
    var url = window.location.href;

    var uploadUrl = "http://localhost:3000/api/meals";

    app.uploadFile = function(file, uploadUrl){

        var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                .success(function(){
                })
                .error(function(){
                });
        };

    // Catching post request
    app.saveOffering = function (name, price, count, description, address, onSite, takeAway, vegetarian, vegan, glutenfree, lactosefree) {
        console.log(picture);
        var blobFile = picture;
        var fd = new FormData;


        $http.post("http://localhost:3000/api/meals",
            {
                name: name,
                price: price,
                count: count,
                description: description,
                address: address,
                onSite: onSite,
                takeAway: takeAway,
                vegetarian: vegetarian,
                vegan: vegan,
                glutenfree: glutenfree,
                lactosefree: lactosefree
            })

    };
}]);**/


