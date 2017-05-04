///<reference path="../../jasmine/jasmine.js"/>

describe('homeController', function () {

    describe('loading data', function () {
        var scope;
        var $q;
        var deferred;

        beforeEach(module('aglCodeChallenge'));

        beforeEach(angular.mock.inject(function ($rootScope, _$q_, $controller, dataService) {
            //create an empty scope
            scope = $rootScope.$new();

            $q = _$q_;

            // We use the $q service to create a mock instance of defer
            deferred = _$q_.defer();

            // Use a Jasmine Spy to return the deferred promise
            spyOn(dataService, 'getData').and.returnValue(deferred.promise);

            $controller('homeController', {
                $scope: scope,
                dataService: dataService
            });

        }));
        
        it('name should contain AGL Code Challenge by Muhammad Masood', function () {

            // Setup the data we wish to return for the .then function in the controller
            deferred.resolve({data: "[]"});

            // We have to call apply for this to work
            scope.$apply();

            expect(scope.name).toBe('AGL Code Challenge by Muhammad Masood');
        });
        
        

        it('groupedData should contain 2 groups', function () {

            // Setup the data we wish to return for the .then function in the controller
            deferred.resolve({ data: "[{	\"name\": \"Bob\",	\"gender\": \"Male\",	\"pets\": [{		\"name\": \"Garfield\",		\"type\": \"Cat\"	},	{		\"name\": \"Fido\",		\"type\": \"Dog\"	}]},{	\"name\": \"Jennifer\",	\"gender\": \"Female\",	\"pets\": [{		\"name\": \"Garfield\",		\"type\": \"Cat\"	}]}]"    });

            // We have to call apply for this to work
            scope.$apply();

            expect(scope.groupedData.Male.length).toBe(1);
            expect(scope.groupedData.Female.length).toBe(1);
        });

        it('groupedData should contain 2 cats for Male group', function () {

            // Setup the data we wish to return for the .then function in the controller
            deferred.resolve({ data: "[{	\"name\": \"Bob\",	\"gender\": \"Male\",	\"age\": 23,	\"pets\": [{		\"name\": \"Garfield\",		\"type\": \"Cat\"	},	{		\"name\": \"Garfield2\",		\"type\": \"Cat\"	},	{		\"name\": \"Fido\",		\"type\": \"Dog\"	}]}]" });

            // We have to call apply for this to work
            scope.$apply();

            expect(scope.groupedData.Male.length).toBe(2);
        });

    });
});