(function(){

    angular.module('mealtime-frontend')
        .service('currUser', currUserService);

    function currUserService(BASEURL, $http, auth) {

        this.register = register;
        this.login = login;
        this.loggedIn = auth.isAuthed;
        this.logout = auth.deleteToken;
        this.getUser = getUser;


        ////////////////

        function register(pre, last, mail, addr, descr, pass) {
            return $http.post(BASEURL + '/signup', {
                prename: pre,
                lastname: last,
                email: mail,
                address: addr,
                description: descr,
                password: pass
            });
        }

        function login(mail, pass) {
            return $http.post(BASEURL + '/login', {
                email: mail,
                password: pass
            });
        }

        function getUser() {
            var token = auth.getToken();
            return token? auth.parseJwt(token).user : {};
        }
    }

})();
