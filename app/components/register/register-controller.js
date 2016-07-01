angular.module('mealtime-frontend')

    .controller('registerController', ['$rootScope','$scope','$http','$window', 'userService', function($rootScope, $scope, $http, $window, userService) {

        $scope.isLoggedIn = userService.loadGlobal() == null;

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
                userService.storeGlobal(response.data);
                $window.location.href = '/#/profile/'+response.data._id;
            }, function(response){
                $window.location.href = '/#/register';
            })
        };
    }]);