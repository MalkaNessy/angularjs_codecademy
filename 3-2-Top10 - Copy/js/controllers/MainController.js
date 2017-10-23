//app.controller('MainController', ['$scope',  'shows', function($scope, shows) {
//    shows.success(function(data) {
//       $scope.showsjson = data;
//    });
//
//}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	
	 $http.get("js/services/shows.json")
		 .then(function mySuccess(response) {
        $scope.showsjson = response.data;
    }, function myError(response) {
        $scope.showsjson = response.statusText;
    });
	
	console.log("$http= " + $http);
	
	
}]);


// js/services/shows.json
//app.controller('myCtrl', function($scope, $http) {
//  $http.get("welcome.htm")
//  .then(function(response) {
//      $scope.myWelcome = response.data;
//  });
//});
