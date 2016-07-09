//main,js

//定义一个名为myApp的模块
var app = angular.module('myApp', []);

app.run(function($rootScope) {
	$rootScope.name = "Allen Iverson";
});

app.controller("PlayerController", ['$scope', function($scope) {
	$scope.playing = false;
	$scope.audio = document.createElement('audio');
	$scope.audio.src = "/home/yhzhang/media/music.mp3"
	$scope.play = function() {
		$scope.audio.play();
		$scope.playing = true;
	};
	$scope.stop = function() {
		$scope.audio.pause();
		$scope.playing = false;
	};
	$scope.audio.addEventListener('ended', function() {
		$scope.apply(function() {
			$scope.stop()
		});
	});
}]);


app.controller("RelatedController", ['$scope', function($scope) {
	
}]);

