'use strict';

app.factory('dataService',
    ['$http',
        function ($http) {
            
            var factory = {};

            factory.getData = function () {
                return $http.get("/api/people");
            };

            return factory;


}]);