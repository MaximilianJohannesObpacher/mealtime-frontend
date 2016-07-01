angular.module('mealtime-frontend')
    .controller('loginController', ['$scope', '$http', '$window', 'userService', 'lastPage', function ($scope, $http, $window, userService, lastPage) {

        this.login = function (email, password) {

            console.log("email: " + email + " and password: " + password);
            //global user variable which initially equals null (should probably not be defined here) and provides data about logged in user

            $scope.isLoggedIn = userService.loadGlobal() == null;

            //sending credentials (mail + pwd) to server which checks if user exists and if password is right (so far no password check)
            $http.post("http://localhost:3000/api/user",
                {
                    email: email,
                    password: password
                })
            //on success save user information globally
                .then(function (response) {
                        console.log("response status: " + response.status);
                        console.log("response status text: " + response.statusText);
                        console.log("response mail: " + response.data.email);
                        console.log("response prename: " + response.data.prename);

                        userService.storeGlobal(response.data);

                        if (lastPage.loadGlobal() == "home") {
                            lastPage.storeGlobal("");
                            $window.location.href = '/';
                        }
                        else if (lastPage.loadGlobal() == "createoffering") {
                            lastPage.storeGlobal("");
                            $window.location.href = '/#/createOffering';
                        }
                        else if (lastPage.loadGlobal() == "showofferings") {
                            lastPage.storeGlobal("");
                            $window.location.href = '/#/showOfferings';
                        }
                        else {
                            $window.location.href = '/#/profile/' + response.data._id;
                        }

                    },
                    //on error print error message and redirect to login
                    function (response) {
                        $window.location.href = '/#/login';
                    }
                )
        };
    }]);
