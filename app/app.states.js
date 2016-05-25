/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('angularstrapApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    // any unknown URLS go to 404
    $urlRouterProvider.otherwise('/404');
    // no route goes to index
    $urlRouterProvider.when('', '/');
    // use a state provider for routing

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/components/home/views/home.view.html',
            controller: "homeController",
            controllerAs: 'ctrl'
        })
        .state('404', {
            url: '/404',
            templateUrl: 'app/shared/404.html'
        })
        .state('createOffering', {
            // we'll add another state soon
            url: '/createOffering',
            templateUrl: 'app/components/create-offering/create-offering.html',
            controller: 'CreateOfferingController',
            controllerAs: 'ctrl'
        });
}]);