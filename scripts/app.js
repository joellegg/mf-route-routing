let app = angular.module("routingApp", ['ngRoute'])

app.config(($routeProvider) => {
    $routeProvider
        .when('/route66', {
            controller: 'Hwy1Ctrl',
            templateUrl: 'partials/hwy1.html'
        })
        .when('/route44', {
            controller: 'Hwy2Ctrl',
            templateUrl: 'partials/hwy2.html'
        })
})

app.controller('Hwy1Ctrl', function($scope) {
    $scope.highwayName = "Route 66";
    $scope.highwayDescription = "description about Route 66";
})

app.controller('Hwy2Ctrl', function($scope) {
    $scope.highwayName = "Route 44";
    $scope.highwayDescription = "description about Route 44";
})
