(function () {
	var app = angular.module('fabricon', [
    'ui.bootstrap',
    'ngRoute',
    'fabriconControllers'
  ]);
	
  app.config(['$routeProvider', 
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: './templates/front-page-content.html',
                controller: 'ContentController'
            }).
            when('/:categoryName', {
                templateUrl: './templates/front-page-content.html',
                controller: 'ContentController'
            }).
            when('/:categoryName/:subcategoryName', {
                templateUrl: './templates/category-content.html',
                controller: 'CategoryController'
            }).
            when('/:categoryName/:subcategoryName/:productName', {
                templateUrl: './templates/subcategory-product-content.html',
                controller: 'ProductController'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
  ]);

  //+ NAVIGATION BAR
  app.directive("navigationBar", function() {
    return {
      restrict: "E",
      templateUrl: "./templates/navigation-bar.html"
    };
  });
  //- NAVIGATION BAR
  
})();