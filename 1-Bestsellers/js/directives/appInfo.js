app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
	
	/* templateUrl: 'js/directives/test.html' */
	/* template : "<h1>Made by a directive!</h1>" */
  }; 
});
console.log("directive complete");

app.directive('testInfo', function() {
	console.log("directive2 "); 
  return { 
       
   		templateUrl: 'js/directives/test.html'
	/* template : "<h1>Made by a directive!</h1>" */
  }; 
});

console.log("directive2 complete");