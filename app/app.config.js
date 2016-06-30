/**
 * Load modules for application
 */

angular
    .module('mealtime-frontend', [
        'ui.router'
    ])

    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:12017'
        })

    .service('globalService', function ($rootScope) {

        var myObject;

        this.storeGlobal = function (object) {
            myObject = object;
            $rootScope.isAuthenticated = true;
            console.log("in Store service");
            return object;
        };

        this.loadGlobal = function () {
            console.log("in Load service");
            return myObject;
        };

        return myObject;
    });

