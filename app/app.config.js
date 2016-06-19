/**
 * Load modules for application
 */

angular
    
    .module('mealtime-frontend', [
        'ui.router',
        'mealtime-frontend.homeServices',
		'angularModalService'
    ])

    .constant('CONFIG', 
    {
	    DebugMode: true,
	    StepCounter: 0,
	    APIHost: 'http://localhost:12017'
	}); 