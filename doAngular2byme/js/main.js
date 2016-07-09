//main,js

//定义一个名为myApp的模块
var app = angular.module('myApp', []);

app.run(function($rootScope) {
	$rootScope.name = "Allen Iverson";
});

app.controller("MyController1", ['$scope', function($scope) {

}]);


app.controller("RelatedController", ['$scope', function($scope) {
	
}]);


app.controller("MyController", function($scope) {
	$scope.person = {
		name: "Allen Iverson"
	};
	$scope.count = 0;
	var updateClock = function() {
		$scope.clock = new Date();
	};

	var timer = setInterval(function() {
		$scope.$apply(updateClock);
		$scope.count += 1;
	}, 1000);
	updateClock();
});
