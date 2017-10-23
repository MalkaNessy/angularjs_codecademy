app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];

  
  $scope.mains = [
    {
      name: 'main1',
      description: 'Mozzarella, main1.',
      price: 1.95
    },
    {
      name: 'main2',
      description: 'Served with main2.',
      price: 1.95
    },
    {
      name: 'main3',
      description: 'Grilled main3.',
      price: 1.95
    }
  ];
  
  
 $scope.extras = [
    {
      name: 'expras1',
      description: 'Mozzarella, expras1.',
      price: 1.95
    },
    {
      name: 'expras2',
      description: 'Served with expras2.',
      price: 1.95
    },
    {
      name: 'expras3',
      description: 'Grilled expras3.',
      price: 1.95
    }
  ];
  
  
  
}]);