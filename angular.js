(function() {

      angular.module("testApp", ['ui.bootstrap']).controller('testCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.userData = undefined;
        $scope.selectedUser = undefined;
        $http.get('messages.json').then(function(response) { 
          $scope.userData = response.data;
        });
        $scope.selectUser = function(usr){
          $scope.selectedUser=usr;
        };
      }]);


    }());