/**
 * Created by chput_000 on 31.05.2016.
 */
angular.module('mealtime-frontend')

    .controller('showProfileController', ['$scope','$http','globalService', '$window', function($scope, $http, globalService, $window) {
            console.log("inside show profile controller");
            var userData = globalService.loadGlobal();
            var app = this;
            app.prename = userData.prename;
            app.lastname = userData.lastname;
            app.email = userData.email;
            app.address = userData.address;
            app.description = userData.description;
            app._id = userData._id;

            this.show = function () {
                    console.log("in show ctrl call fun show");
                    //globalService.storeGlobal(userData);
                    $window.location.href = "#/profile/edit/"+app._id;
            };
    }]);
