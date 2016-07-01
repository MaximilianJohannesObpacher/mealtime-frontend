/**
 * Load modules for application
 */

angular
    .module('mealtime-frontend', [
        'ui.router',
        'angularModalService',
        'ngToast'
    ])

    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:12017'
        })

    .service('globalService', function () {
        
        var myObject;
        
        this.storeGlobal = function (object) {
            myObject = object;
            return object;
        };

        this.loadGlobal = function () {
            return myObject;
        };

        return myObject;
    });

