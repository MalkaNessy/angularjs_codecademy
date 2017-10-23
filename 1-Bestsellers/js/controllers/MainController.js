app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products =  
    [ 
      { 
        name: 'The Book of Trees', 
        price: 19, 
        pubdate: new Date('2014', '03', '08'), 
        cover: 'img/pict1.jpg' ,
        likes:  0,
        dislikes: 0
      }, 
      { 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/pict2.jpg',
        likes:  0,
        dislikes: 0 
      } ,
   	  { 
        name: 'The Wind of Change', 
        price: 20, 
        pubdate: new Date('2015', '06', '07'), 
        cover: 'img/pict3.jpg',
        likes:  0,
        dislikes: 0 
      }, 
      { 
        name: 'Way to go', 
        price: 7, 
        pubdate: new Date('2016', '02', '04'), 
        cover: 'img/pict4.jpg',
        likes:  0,
        dislikes: 0
      } 
    ];
  $scope.plusOne = function(index) { 
  $scope.products[index].likes += 1;
  };
	
  $scope.minusOne = function(index) { 
  $scope.products[index].dislikes -= 1; 
  };
}]);
		
