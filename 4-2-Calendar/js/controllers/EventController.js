app.controller('EventController', ['$scope', 'eventsjson', '$routeParams', function($scope, eventsjson, $routeParams) {
	console.log("bygaga");
	console.log(eventsjson);
    eventsjson.success(function(data) {
    	console.log("success bygaga id:"+$routeParams.id);
    	console.log(data);
    	$scope.onevent = data.events[$routeParams.id];
			console.log("onevent = " + $scope.onevent);
		 }); 
}]);


