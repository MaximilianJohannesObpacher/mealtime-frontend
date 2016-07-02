/**
 * Created by MaximilianObpacher on 01.07.16.
 */

angular.module('mealtime-frontend')

    .controller('profileOrdersController', ['$scope', '$http', '$stateParams', '$window', 'userService', 'ngToast', function ($scope, $http, $stateParams, $window, userService, ngToast) {

        if (userService.loadGlobal() != null) {

            app = this;

            var orderMeal;

            $scope.user_Id = $stateParams.profileId;
            $scope.isLoggedIn = userService.loadGlobal() == null;

            loadOrders();
            loadRequests();

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

            function loadRequests() {
                $http.post("http://localhost:3000/api/orderhistory/" + userService.loadGlobal()._id,
                    {
                        guestId: userService.loadGlobal()._id
                    })
                //on success save user information globally
                    .then(function (response) {
                            console.log("requests: ", response.data);
                            app.requests = response.data;
                        },

                        function (response) {
                            console.log("error on response!")
                        }
                    )
            }

            this.answerOrder = function (orderId, mealId, guestId, amount, answer) {

                if (orderId != null) {

                    $http.put("http://localhost:3000/api/orders/" + orderId,
                        {
                            accepted: answer,
                            answered: true
                        })
                        .then(function (response) {
                                console.log("answersuccess!")
                            },

                            function (response) {
                                console.log("error on response!")
                            }
                        );
                }

                if (answer == true) {

                    console.log("Ordermealid:", mealId);

                    $http.get("http://localhost:3000/api/meals/" + mealId).success(function (meal) {
                        console.log("Ordermeal:", meal);

                        $http.put("http://localhost:3000/api/meals/" + mealId,
                            {
                                amount: meal.amount - amount,
                                // guestIds: meal.guestIds.push(guestId)
                            })
                            .then(function (response) {
                                    ngToast.create("Order accepted successful!");
                                    loadOrders();
                                    loadRequests();
                                    $window.location.href = "/#/profile/orders/" + userService.loadGlobal()._id;
                                },

                                function (response) {
                                    console.log("error on response!")
                                }
                            );
                    });


                }

                if (answer == false){

                    setTimeout(reloadFunction, 500);
                    function reloadFunction(){
                        ngToast.create("Order declined successful!");
                        loadOrders();
                        loadRequests();
                        $window.location.href = "/#/profile/orders/" + userService.loadGlobal()._id;
                    }

                }
            };


        }
        else {
            $window.location.href = "/#/login"
        }
    }]);
