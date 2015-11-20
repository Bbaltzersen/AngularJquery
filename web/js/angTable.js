angular.module('MyApp', [])
        .controller('DataCtrl', function ($http, $scope) {

            var membersSaved = {};
            membersSaved = $http.get('api/member').success(function(data){
                $scope.members = data;
            });
        });