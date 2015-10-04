var fabriconControllers = angular.module('fabriconControllers', [
	'fabriconProducts'
]);

fabriconControllers.controller('StoreController', ['$scope',
	function($scope) {
		var productsCtrl = new fabriconProducts.ProductsController();

	    $scope.categories = productsCtrl.products.categories;
	    $scope.awnings = productsCtrl.products.awnings;
	    $scope.curtains = productsCtrl.products.curtains;
	    $scope.fabrics = productsCtrl.products.fabrics;
	    $scope.fabricStructures = productsCtrl.products.fabricStructures;
	    $scope.verticalRollers = productsCtrl.products.verticalRollers;
	    $scope.customProducts = productsCtrl.products.customProducts;    
	}
]);