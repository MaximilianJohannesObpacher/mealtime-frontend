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

myApp.controller('CreateOfferingController', ['$scope','$http', '$window', 'fileUpload', 'globalService', function($scope, $http, $window, fileUpload, globalService){

    // imageupload
    $scope.uploadFile = function(){
        var file = $scope.myFile;
        console.log('file is ' );
        console.dir(file);
        var uploadUrl = "http://localhost:3000/api/mealPictures";
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    // Form Valiadtaion
    $scope.required = true;

    // Jquery check if either onSite or Takeaway is checked for form validation
    $scope.isOptionsRequired = function(){
        if($('#onSite:checked').length>0 || $('#takeAway:checked').length>0){
            return true;
        }
    };

    console.log("Current User:", globalService.loadGlobal().prename);

    this.saveOffering = function (name, price, count, description, onSite, takeAway, vegetarian, vegan, glutenfree, lactosefree) {


        if(description==undefined){
            description = "No Description";
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

        console.log("Current User:", globalService.loadGlobal().prename);
        console.log("Current User:", globalService.loadGlobal().address);
        console.log("Current User:", globalService.loadGlobal().id);


        $http.post("http://localhost:3000/api/meals",
            {
                name: name,
                price: price,
                count: count,
                chef: globalService.loadGlobal().prename,
                description: description,
                address: globalService.loadGlobal().address,
                onSite: onSite,
                takeAway: takeAway,
                vegetarian: vegetarian,
                vegan: vegan,
                glutenfree: glutenfree,
                lactosefree: lactosefree,
                chefId: globalService.loadGlobal()._id,
                guestId: []
            });

        $window.location.href = '/#/showOfferings';
    };



}]);

