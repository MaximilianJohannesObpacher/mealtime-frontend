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

    .service('userService', function () {
        
        var myObject;
        
        this.storeGlobal = function (object) {
            myObject = object;
            return object;
        };

        this.loadGlobal = function () {
            return myObject;
        };

        return myObject;
    })

    .service('lastPage', function () {

    var mypageid;

    this.storeGlobal = function (pageid) {
        mypageid = pageid;
        return pageid;
    };

    this.loadGlobal = function () {
        return mypageid;
    };

    return mypageid;
});

