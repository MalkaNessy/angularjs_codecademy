app.controller('DayController', ['$scope', 'eventsjson', function($scope, eventsjson) {
	eventsjson.success(function(data) {
    $scope.allevents = data;
		 }); 
}]);

