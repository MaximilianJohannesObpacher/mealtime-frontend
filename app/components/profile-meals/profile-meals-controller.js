/**
 * Created by MaximilianObpacher on 02.07.16.
 */

angular.module('mealtime-frontend')

    .controller('profileMealsController', ['$scope', '$http', '$stateParams', '$window', 'userService', 'ngToast', function ($scope, $http, $stateParams, $window, userService, ngToast) {

        console.log("Mealcontroller1!");

        if (userService.loadGlobal() != null) {
            
            app = this;

            loadMeals();

            console.log("Mealcontroller2!");

            $scope.isLoggedIn = userService.loadGlobal() == null;

            function loadMeals() {
                $http.post("http://localhost:3000/api/meals/" + userService.loadGlobal()._id,
                    {
                        chefId: userService.loadGlobal()._id
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

            this.deleteOffering = function (offeringId) {
                console.log("indeleteOffering");

                if(offeringId != null){
                    $http.delete("http://localhost:3000/api/meals/" + offeringId,
                        {
                            meal_Id: offeringId
                        })
                        .then(function (response) {
                                ngToast.create("Offering deleted successful!");
                                loadMeals();
                                $window.location.href = "/#/profile/meals/" + userService.loadGlobal()._id;
                            },

                            function (response) {
                                console.log("error on response!")
                            }
                        );



                }
                else{
                    ngToast.create("Offering doesn't exist anymore!");
                }

            };
        }
            
        else
        {
            console.log("Mealcontroller3!");
            $window.location.href = "/#/login"
        }
    }]);