/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('mealtime-frontend')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider ) {

        // any unknown URLS go to 404
        $urlRouterProvider.otherwise('/404');
        // no route goes to index
        $urlRouterProvider.when('', '/');
        // use a state provider for routing

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/views/home.html',
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
            })
            .state('showOfferings', {
                // we'll add another state soon
                url: '/showOfferings',
                templateUrl: 'app/components/show-offerings/show-offerings.html',
                controller: 'ShowOfferingsController',
                controllerAs: 'ctrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html',
                controller: 'loginController',
                controllerAs: 'ctrl'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/components/register/register.html',
                controller: 'registerController',
                controllerAs: 'ctrl'
            })
            .state('show-profile', {
                url: '/profile',
                templateUrl: 'app/components/show-profile/show-profile.html',
                controller: 'showProfileController',
                controllerAs: 'ctrl'
            })
            .state('/meal/:mealId', {
                url: '/meal/:mealId',
                templateUrl: 'app/components/meal-detail/meal-detail.html',
                controller: 'MealDetailController'
            });
    }]);