/**
 * Created by MaximilianObpacher on 01.07.16.
 */

angular.module('mealtime-frontend')

    .controller('profileOrdersController', ['$scope', '$http', '$stateParams', '$window', 'userService',  function ($scope, $http, $stateParams, $window, userService) {

        if(userService.loadGlobal() != null) {

            app = this;

            $scope.user_Id = $stateParams.profileId;
            $scope.isLoggedIn = userService.loadGlobal() == null;

            loadOrders();
            
            function loadOrders() {
                $http.post("http://localhost:3000/api/orders/" + userService.loadGlobal()._id,
                    {
                        chefId: userService.loadGlobal()._id
                    })
                //on success save user information globally
                    .then(function (response) {
                            console.log("offerings: ", response.data);
                            app.orders = response.data;
                        },

                        function (response) {
                            console.log("error on response!")
                        }
                    )
            }


        }
        else{
            $window.location.href="/#/login"
        }
    }]);
