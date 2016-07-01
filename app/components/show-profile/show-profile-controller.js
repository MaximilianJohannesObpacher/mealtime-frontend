/**
 * Created by chput_000 on 31.05.2016.
 */
angular.module('mealtime-frontend')

    .controller('showProfileController', ['$scope', '$http','$window', 'globalService', function ($scope, $http, $window, globalService) {

        if(globalService.loadGlobal() != null) {
            var userData = globalService.loadGlobal();
            var app = this;
            app.prename = userData.prename;
            app.lastname = userData.lastname;
            app.email = userData.email;
            app.address = userData.address;
            app.description = userData.description;
            app._id = userData._id;
        }
        else{
            $window.location.href="/#/login"
        }
    }]);
