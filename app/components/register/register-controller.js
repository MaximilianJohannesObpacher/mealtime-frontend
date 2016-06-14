angular.module('mealtime-frontend')

    .controller('registerController', ['$scope','$http', function($scope, $http) {

        this.sendUserToServer = function (prename, lastname, email, address, description, password) {
            
            console.log("Inregcon");
            
            $http.post("http://localhost:3000/api/profiles",
                {
                    prename: prename,
                    lastname: lastname,
                    email: email,
                    // birthdate: birthdate,
                    address: address,
                    description: description,
                    password: password
                })

        };
    }]);