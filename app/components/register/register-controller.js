angular.module('mealtime-frontend')
    .directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }])

    .service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl){
            var fd = new FormData();
            fd.append('picture', file);
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
                .success(function(){
                })
                .error(function(){
                });
        }
    }])

    .controller('registerController', ['$scope','$http', 'fileUpload', function($scope, $http, fileUpload) {

        $scope.uploadFile = function () {
            var file = $scope.myFile;
            console.log('file is ');
            console.dir(file);
            var uploadUrl = "http://localhost:3000/api/profilePictures";
            fileUpload.uploadFileToUrl(file, uploadUrl);
        };

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