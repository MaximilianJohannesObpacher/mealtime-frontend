/**
 * Created by MaximilianObpacher on 02.07.16.
 */

angular.module('mealtime-frontend')

    .controller('profileMealsController', ['$scope', '$http', '$stateParams', '$window', 'userService', function ($scope, $http, $stateParams, $window, userService) {

        console.log("Mealcontroller1!");

        if (userService.loadGlobal() != null) {
            
            app = this;

            console.log("Mealcontroller2!");

            $scope.user_Id = userService.loadGlobal().user_Id;
            $scope.isLoggedIn = userService.loadGlobal() == null;

            $http.post("http://localhost:3000/api/meals/" + $scope.user_Id,
                {
                    chefId: $scope.user_Id
                })
            //on success save user information globally
                .then(function (response) {
                        console.log("offerings: ", response.data);
                        app.offerings = response.data;

                    },

                    function (response) {
                        console.log("error on response!")
                    }
                )

        }

        else
        {
            console.log("Mealcontroller3!");
            $window.location.href = "/#/login"
        }
    }]);