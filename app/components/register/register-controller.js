angular.module('mealtime-frontend')

    .controller('registerController', ['$rootScope','$scope','$http','$window', function($rootScope, $scope, $http, $window) {

        this.register = function (prename, lastname, email, address, description, password) {

            $http.post("http://localhost:3000/api/users",
                {
                    prename: prename,
                    lastname: lastname,
                    email: email,
                    // birthdate: birthdate,
                    address: address,
                    description: description,
                    password: password
                }).then(function(response){
                $rootScope.currentUser = response.data;
                $window.location.href = '/#/profile';
            }, function(response){
                $window.location.href = '/#/register';
            })

        };
    }]);