/**
 * Load states for application
 * more info on UI-Router states can be found at
 * https://github.com/angular-ui/ui-router/wiki
 */
angular.module('mealtime-frontend')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        // any unknown URLS go to 404
        $urlRouterProvider.otherwise('/404');
        // no route goes to index
        $urlRouterProvider.when('', '/');
        // use a state provider for routing

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/home.html',
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/shared/404.html'
            })
            .state('createOffering', {
                // we'll add another state soon
                url: '/createOffering',
                templateUrl: 'app/components/create-offering/create-offering.html'
            })
            .state('showOfferings', {
                // we'll add another state soon
                url: '/showOfferings',
                templateUrl: 'app/components/show-offerings/show-offerings.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/components/login/login.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'app/components/register/register.html'
            })
            .state('show-profile', {
                url: '/profile/:profileId',
                templateUrl: 'app/components/show-profile/show-profile.html'
            })
            .state('edit-profile', {
                url: '/profile/edit/:profileId',
                templateUrl: 'app/components/edit-profile/edit-profile.html'
            })
            .state('/meal/:mealId', {
                url: '/meal/:mealId',
                templateUrl: 'app/components/meal-detail/meal-detail.html'
            })
            .state('/order/:mealId', {
                url: '/order/:mealId',
                templateUrl: 'app/components/order-meal/order-meal.html'
            })
            .state('profile/orders/:profileId', {
                url: '/profile/orders/:profileId',
                templateUrl: 'app/components/profile-orders/profile-orders.html'
            })
            .state('/profile/meals/:profileId', {
                url: '/profile/meals/:profileId',
                templateUrl: 'app/components/profile-meals/profile-meals.html'
            });
    }]);