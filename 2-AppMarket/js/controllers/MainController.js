app.controller('MainController', ['$scope', function($scope) {
  $scope.move = {
    icon: 'img/pict4.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  };

  $scope.shutterbugg = {
    icon: 'img/pict3.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  };

  $scope.gameboard = {
    icon: 'img/pict2.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  };

  $scope.forecast = {
    icon: 'img/pict1.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  };
  
  $scope.apps = [ 
  { 
    icon: 'img/pict1.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'img/pict2.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  } , 
  { 
    icon: 'img/pict3.jpg', 
    title: 'Shutt', 
    developer: 'Chico', 
    price: 2.99 
  } , 
  { 
    icon: 'img/pict4.jpg', 
    title: 'Bugg', 
    developer: ' Dusty', 
    price: 2.99 
  } 
];
  
}]);