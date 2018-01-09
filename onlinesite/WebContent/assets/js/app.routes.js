app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	$routeProvider.
when('/blog',{
	templateUrl:'./app/component/Blog/blog.html',
}).
when('/forum',{
	templateUrl:'./app/component/Forum/forum.html',
}).
when('/',{
	templateUrl:'./app/component/Login/login.html',
})
}]);

	

	
