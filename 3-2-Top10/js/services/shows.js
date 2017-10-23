app.factory('shows', ['$http', function($http) { 
  return $http.get('js/services/shows.JSON')  
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
	  console.log ("error");
              return err; 
            }); 
}]);

//local JSON:
// return $http.get('js/services/shows.JSON') 
// return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/shows-api/shows.json') 
