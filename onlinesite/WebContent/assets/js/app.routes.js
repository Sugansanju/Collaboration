var app = angular.module('module',["ngRoute","ngStorage","ngCookies"]);

app.directive('navBar',function(){
	return{
		templateUrl:"./ui/navbar.html"
	}
});
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.
when('/blog',{
	templateUrl:'./ui/blog.html',
}).
when('/',{
	templateUrl:'./ui/main.html',
})
}]);

	

	
