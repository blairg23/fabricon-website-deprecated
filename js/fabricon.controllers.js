var fabriconControllers = angular.module('fabriconControllers', []);

fabriconControllers.controller('CategoriesController', ['$scope', '$http',
    function($scope, $http) {
        $http.get('./data/products.json').success(function(data) {
            $scope.categories = data;
        });
    }
]);

fabriconControllers.controller('CategoryController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $scope.categoryName = $routeParams.categoryName;
        $scope.categoryID = $routeParams.categoryID;

        $http.get('./data/products.json').success(function(data) {
            $scope.categories = data;
            
            //+ MODIFY BASED ON ROW #
            var category_index = parseInt($scope.categoryID);
            if (category_index < 3) {
                $scope.category = $scope.categories[0][category_index];
                $scope.category_thumbnails = $scope.categories[0][category_index].images.thumbnails;
            } else {
                $scope.category = $scope.categories[1][category_index-3];
                $scope.category_thumbnails = $scope.categories[1][category_index-3].images.thumbnails;
            }
            //- MODIFY BASED ON ROW #
        	
        	var data_url = $scope.category.dataURL;
	        $http.get(data_url).success(function(data) {
	            $scope.subcategories = data;
	        });
        });
    }
]);