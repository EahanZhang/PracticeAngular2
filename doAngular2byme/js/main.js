//main,js

//定义一个名为myApp的模块
var app = angular.module('myApp', []);

app.run(function($rootScope) {
	$rootScope.name = "Allen Iverson";
});

app.controller('ParentController', function($scope) {
	$scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
	$scope.sayhello = function() {
		$scope.person.greeted = true;
	}
});
