/**
 * Created by chput_000 on 31.05.2016.
 */
angular.module('mealtime-frontend')

    .controller('editProfileController', ['$scope','$http','globalService', '$window', function($scope, $http, globalService, $window) {
            var app = this;

        if(globalService.loadGlobal() != null){
            var userData = globalService.loadGlobal();
            app.oldprename = userData.prename;
            app.oldlastname = userData.lastname;
            app.oldemail = userData.email;
            app.oldaddress = userData.address;
            app.olddescription = userData.description;
            app.oldpassword = userData.password;
            app._id = userData._id;

            this.edit = function (newprename, newlastname, newemail, newaddress, newdescription, newpassword) {
                console.log("all new: prename: "+newprename+" lastname: "+newlastname+" email: "+newemail+" address: "+newaddress+" password: "+newpassword);
                console.log("but same id: "+app._id);
                if(!newprename) {
                    newprename = app.oldprename;
                }
                if(!newlastname) {
                    newlastname = app.oldlastname;
                }
                if(!newemail) {
                    newemail = app.oldemail;
                }
                if(!newaddress) {
                    newaddress = app.oldaddress;
                }
                if(!newdescription) {
                    newdescription = app.olddescription;
                }
                if(!newpassword) {
                    newpassword = app.oldpassword;
                }
                $http.put("http://localhost:3000/api/user",
                    {
                        _id: app._id,
                        prename: newprename,
                        lastname: newlastname,
                        email: newemail,
                        // birthdate: birthdate,
                        address: newaddress,
                        description: newdescription,
                        password: newpassword
                    }).then(function(response){
                    globalService.storeGlobal(response.data);
                    $window.location.href = '/#/profile/'+response.data._id;
                }, function(response){
                    $window.location.href = '/';
                })
            };

        }
        else{
            $window.location.href="/#/login";
        }


    }]);