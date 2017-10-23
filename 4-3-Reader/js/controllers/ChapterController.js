app.controller('ChapterController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
 books.success(function(data) {
    // Your code here
  
    $scope.book = data[$routeParams.bookId];
	$scope.chapter = $scope.book.chapters[$routeParams.chapterId];
	console.log("--------------------- " )
    console.log("$routeParams.chapterId = " + $routeParams.chapterId )
	console.log("$scope.book.chapters.length - 1 = " + ($scope.book.chapters.length - 1) ) 
	console.log("$scope.nextChapterIndex = " + $scope.nextChapterIndex ) 
	console.log("$scope.prevChapterIndex = " + $scope.prevChapterIndex ) 
	 
    // If there no more chapters left, go back to the bookshelf view
    if($routeParams.chapterId >= $scope.book.chapters.length - 1) {
	  
      $scope.nextChapterIndex = "#";
	  console.log("if inside $routeParams.chapterId = " + $routeParams.chapterId )
	  console.log("if inside $scope.currentChapterIndex = " + $scope.currentChapterIndex )
	  console.log("if inside $scope.nextChapterIndex = " + $scope.nextChapterIndex)
    } 
	  if ($routeParams.chapterId <=0){
		 console.log("2if inside $routeParams.chapterId = " + $routeParams.chapterId )
	     $scope.prevChapterIndex = "#";
		 console.log("2if inside $scope.prevChapterIndex = " + $scope.prevChapterIndex)
	}
	
  });

  // Using these properties to create the URLs in line 1 and line 11 of view/chapter.html
  $scope.currentBookIndex = parseInt($routeParams.bookId);
  $scope.currentChapterIndex = parseInt($routeParams.chapterId);
  $scope.nextChapterIndex = $scope.currentChapterIndex + 1;
  $scope.prevChapterIndex = $scope.currentChapterIndex - 1;
}]);
