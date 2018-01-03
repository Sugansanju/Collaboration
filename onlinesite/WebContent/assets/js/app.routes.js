
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.
when('/blog',{
	templateUrl:'./ui/blog.html',
}).
when('/',{
	templateUrl:'./ui/main.html',
})
}]);

	

	
