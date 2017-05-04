'use strict';

var app = angular.module('aglCodeChallenge', []);

app.controller('homeController',
    ['$scope', 'dataService',
        function ($scope, dataService) {
            $scope.name = "AGL Code Challenge by Muhammad Masood";
            
            $scope.groupData = function (data) {
                
                //filter and map
                var y = _.map(data, function (x) {
                    var pets = _.filter(x.pets, function (pet) { return pet.type.toLocaleLowerCase() == 'cat'; });
                    var temp = _.map(pets, function (pet) {
                        return _.defaults({ "genderOfOwner": x.gender, "petName": pet.name });
                    });

                    return temp;
                });

                //flatten
                y = _.flatten(y);

                //sorting
                y = _.sortBy(y, ['genderOfOwner', 'petName']);

                //console.log('y');
                //console.log(y);

                //group by
                var g = _.groupBy(y, function (item) {
                    return item.genderOfOwner;
                });

                //console.log('g');
                //console.log(g);

                return g;
            };

            //call the api
            dataService.getData().then(function (data) {
                console.log(data);
                //$scope.data = data.data;

                $scope.groupedData = $scope.groupData(JSON.parse(data.data));

            }, function (error) {
                console.log(error);
            });

}]);