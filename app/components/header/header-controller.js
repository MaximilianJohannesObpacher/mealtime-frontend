/**
 * Created by chput_000 on 01.07.2016.
 */
angular.module('mealtime-frontend')
    .controller('headerController', ['$rootScope','$scope','$http','$window', 'globalService', function($rootScope, $scope, $http, $window, globalService) {
        var app = this;
        app.loggedIn;
        if(globalService.loadGlobal()){
            loggedIn = true;
        }else{
            loggedIn = false;
        }
    }]);

   