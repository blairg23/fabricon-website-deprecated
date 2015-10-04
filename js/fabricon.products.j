var fabriconProducts = angular.module('fabriconProducts', []);

fabriconProducts.controller('ProductsController', ['$scope',
	function($scope) {
		$scope.products = {
			categories: [
				[{
					name: 'Awnings & Canopies', 
					size: {width: 25, height: 25},
					link: 'awnings-and-canopies',     
					images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
				},
				{
					name: 'Curtains & Screens',
					size: {width: 25, height: 25},      
					link: 'curtains-and-screens',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
				},      
				{
					name: 'Fabrics',
					size: {width: 25, height: 25},
					link: 'fabrics',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
				}],
				[{
					name: 'Fabric Structures',
					size: {width: 25, height: 25},
					link: 'fabric-structures',
					images: {thumbnail: "img/fabric_structures/90_tensile_cc.jpg"}
				},          
				{
					name: 'Vertical Roller Screens',
					size: {width: 25, height: 25},
					link: 'vertical-roller-screens',      
					images: {thumbnail: "img/vertical_roller_screens/full_awning_chinese_2.jpg"}
				},
				{
					name: 'Custom Products',
					size: {width: 25, height: 25},
					link: 'custom-products',
					images:{thumbnail:"img/custom_products/full_custom_3.jpg"}
				}]
			],
			awnings: [
				[{
					name: 'Commercial', 
					size: {width: 25, height: 25},
					link: 'commercial-awnings',
					images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
				},
				{
					name: 'Deployable',
					size: {width: 25, height: 25},      
					link: 'deployable-awnings',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
				},      
				{
					name: 'Designs',
					size: {width: 25, height: 25},
					link: 'designs-awnings',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
				}],
				[{
					name: 'Fabrics',
					size: {width: 25, height: 25},
					link: 'fabrics-awnings',
					images: {thumbnail: "img/fabric_structures/90_tensile_cc.jpg"}
				},          
				{
					name: 'Graphics',
					size: {width: 25, height: 25},
					link: 'graphics-awnings',      
					images: {thumbnail: "img/vertical_roller_screens/full_awning_chinese_2.jpg"}
				},
				{
					name: 'Residential',
					size: {width: 25, height: 25},
					link: 'residential-awnings',      
					images: {thumbnail: "img/vertical_roller_screens/full_awning_chinese_2.jpg"}
				},    
				{
					name: 'Valances',
					size: {width: 25, height: 25},
					link: 'valances-awnings',
					images:{thumbnail:"img/custom_products/full_custom_3.jpg"}
				}]
		    ],

		  	curtains: [
				[{
					name: 'Enclosures', 
					size: {width: 25, height: 25},
					link: 'enclosures-curtains',     
					images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
				},
				{
					name: 'Sun Screens',
					size: {width: 25, height: 25},
					link: 'sun-screens-curtains',
					images:{thumbnail:"img/custom_products/full_custom_3.jpg"}
				}]
		    ],

		  	fabrics: [
				[{
					name: 'Natural', 
					size: {width: 25, height: 25},
					link: 'natural-fabrics',     
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
				},
				{
					name: 'Synthetic',
					size: {width: 25, height: 25},      
					link: 'synthetic-fabrics',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
				}]
		    ], 

		  	fabricStructures: [
			    [{
					name: 'Frame Supported', 
					size: {width: 25, height: 25},
					link: 'frame-supported-fabric-structures',
					images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
			    },
			    {
					name: 'Shade Sails',
					size: {width: 25, height: 25},      
					link: 'shade-sails-fabric-structures',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
			    }],      
			    [{
					name: 'Tensile',
					size: {width: 25, height: 25},
					link: 'tensile-fabric-structures',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
			    },         
			    {
					name: 'Deployable',
					size: {width: 25, height: 25},
					link: 'deployable-fabric-structures',
					images:{thumbnail:"img/custom_products/full_custom_3.jpg"}
			    }]
		    ],    
			verticalRollers: [
			    [{
					name: 'Vertical Rollers', 
					size: {width: 25, height: 25},
					link: 'vertical-roller-screens',     
					images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
			    }]
		  	],
			customProducts: [
			    [{
					name: 'Agricultural', 
					size: {width: 25, height: 25},
					link: 'agricultural-custom',     
					images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
			    },
			    {
					name: 'Fabrics',
					size: {width: 25, height: 25},      
					link: 'fabrics-custom',
					images: {thumbnail: "img/fabrics/60_index_fabric.jpg"}
			    },      
			    {
					name: 'Recreational',
					size: {width: 25, height: 25},
					link: 'recreational-custom',
					images:{thumbnail:"img/custom_products/full_custom_3.jpg"}
			    }]
		  	]
		}	
	}
]);