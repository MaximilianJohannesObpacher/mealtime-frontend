angular.module('mealtime-frontend')

    .controller('registerController', ['$scope','$http', 'fileUpload', function($scope, $http, fileUpload) {

        this.submit = function (prename, lastname, email, birthdate, address, description, password) {
            
            $http.post("http://localhost:3000/api/profiles",
                {
                    prename: prename,
                    lastname: lastname,
                    email: email,
                    birthdate: birthdate,
                    address: address,
                    description: description,
                    password: password
                })

        };
    }])