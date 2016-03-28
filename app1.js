var minionModule = angular.module('app',[]);


minionModule.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
}]);

minionModule.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

minionModule.controller('GuageController',function($scope,$rootScope)
{


	$scope.init = function(){
            $('#slider').mousedown(function () {
				$rootScope.$broadcast("minute",123);
				
            });
	}
	
	$scope.$on('minute',function(event,args){
		$scope.minuteValue = args;
		console.log($scope.minuteValue);
	});
	
	$scope.display=function(){
		console.log($scope.minuteValue);
	}
});