angular.module('mealtime-frontend')
.controller('loginController', ['$rootScope','$scope','$http','$window', 'globalService', function($rootScope, $scope, $http, $window, globalService) {
    
        this.login = function (email, password) {
            
            console.log("email: " + email + " and password: " + password);
            
            //global user variable which initially equals null (should probably not be defined here) and provides data about logged in user
            $rootScope.currentUser = null;
            
            //sending credentials (mail + pwd) to server which checks if user exists and if password is right (so far no password check)
            $http.post("http://localhost:3000/api/user",
                {
                    email: email,
                    password: password
                })
                //on success save user information globally
                .then(function(response){
                    console.log("response status: "+response.status);
                        console.log("response status text: "+response.statusText);
                        console.log("response status: "+response.data.email);
                    $rootScope.currentUser = response.data;
                    globalService.storeGlobal(response.data);
                    $window.location.href = '/#/profile';
                }, 
                    //on error print error message and redirect to login
                    function(response){
                        $window.location.href = '/#/login';
                }
                )
        };
    }]);
