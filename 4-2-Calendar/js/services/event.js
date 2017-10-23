app.factory('eventsjson', ['$http', function($http) {
  return $http.get('js/services/event.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);


//return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/events-api/events.json')