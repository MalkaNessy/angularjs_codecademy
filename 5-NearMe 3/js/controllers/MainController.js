app.controller('MainController',  ['$scope', 'places',  function($scope, places) {
  
  places.success(function(data) { 
    $scope.geodata = data;
	console.log("MainController $scope.geodata = " + $scope.geodata);
	$scope.mapMarkers = geodataToMarkers($scope.geodata);
  }); 
  
	console.log("MainController geodataToMarkers = " + geodataToMarkers);
	
 
  
  $scope.mapCenter = { 
    lat: 40.741934, 
    lng: -74.004897, 
    zoom: 17 
  }
  
 
}
                               
]);

