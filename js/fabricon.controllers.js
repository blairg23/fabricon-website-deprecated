var fabriconControllers = angular.module('fabriconControllers', []);

var categories = null;
var subcategories = null;
fabriconControllers.controller('ContentController', ['$scope', '$http',
    function($scope, $http) {
        $scope.main_gallery = {};

        $http.get('./data/products.json').success(function(data) {
            $scope.categories = data;
            categories = data;
        
            $scope.main_gallery.images = {};
            $scope.main_gallery.images.__full__ = {};
            $scope.main_gallery.images.__full__.size = {};
            $scope.main_gallery.images.__full__.size.height = 50;
            $scope.main_gallery.images.__full__.size.width = 100;
        
            var gallery_images = [];
            for (var i = 0; i < categories.length; i++) {
                var row = categories[i];
                for (var j = 0; j < row.length; j++) {
                    var category = row[j];
                    var image_folder_path = category['image_folder_path'];
                    var full_size_category_images = category.images.__full__.images;

                    for (var k = 0; k < full_size_category_images.length; k++) {
                        var full_size_category_image_name = full_size_category_images[k];
                        
                        var gallery_image = {
                            'image_folder_path': image_folder_path,
                            'name': full_size_category_image_name
                        };

                        gallery_images.push(gallery_image);
                    }
                }
            }

            $scope.main_gallery.images.__full__.images = gallery_images;
        });
    }
]);

fabriconControllers.controller('CategoryController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $scope.main_gallery = {};
        $scope.sub_gallery = {};
        $scope.contents = {};

        $scope.categoryName = $routeParams.categoryName;
        $scope.categoryID = $routeParams.categoryID;

        console.log("CATEGORIES", categories);
        $scope.categories = categories;

        //+ MODIFY BASED ON ROW #
        var category_index = parseInt($scope.categoryID);
        if (category_index < 3) {
            $scope.category = $scope.categories[0][category_index];
            $scope.category_thumbnails = $scope.categories[0][category_index].images['__thumbnail__'].images;
        } else {
            $scope.category = $scope.categories[1][category_index-3];
            $scope.category_thumbnails = $scope.categories[1][category_index-3].images['__thumbnail__'].images;
        }
        //- MODIFY BASED ON ROW #

    	var data_url = $scope.category.data_url;
        $http.get(data_url).success(function(data) {
            $scope.subcategories = data;
            subcategories = data;
        });
    }    
]);

fabriconControllers.controller('SubCategoryController', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        console.log("SCOPE", $scope);
        console.log("ROUTE PARAMS", $routeParams);
        console.log("HTTP", $http);
    }
]);