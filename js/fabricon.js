(function () {
	var app = angular.module('fabricon', [
    // 'ngRoute',
    // 'fabriconControllers'
    'slick'
  ]);
	
  app.controller('StoreController', function(){
    this.products = products;
    this.awnings = awnings;
    this.curtains = curtains;
    this.fabrics = fabrics;
    this.fabricStructures = fabricStructures;
    this.verticalRollers = verticalRollers;
    this.customProducts = customProducts;    
	});

  //+ FRONT PAGE
  app.directive("frontPageContent", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/front-page-content.html"
    };
  });
  //- FRONT PAGE

  //+ Slick Slider
  app.directive('slickSlider',function($timeout){
    return {
     restrict: 'A',
     link: function(scope,element,attrs) {
       $timeout(function() {
           $(element).slick(scope.$eval(attrs.slickSlider)); 
       });
     }
    }
  }); 
  //- Slick Slider

  //+ AWNINGS
  app.directive("awningsAndCanopies", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings-and-canopies.html"
    };
  });

  app.directive("commercialAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/commercial-awnings.html"
    };
  });

  app.directive("deployableAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/deployable-awnings.html"
    };
  });

  app.directive("designsAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/designs-awnings.html"
    };
  });

  app.directive("fabricsAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/fabrics-awnings.html"
    };
  });

  app.directive("graphicsAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/graphics-awnings.html"
    };
  });

  app.directive("residentialAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/residential-awnings.html"
    };
  });

  app.directive("valancesAwnings", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/awnings/valances-awnings.html"
    };
  });  
  //- AWNINGS

  //+ Curtains and Screens
  app.directive("curtainsAndScreens", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/curtains-and-screens.html"
    };
  });

  app.directive("enclosuresCurtains", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/curtainsScreens/enclosures-curtains.html"
    };
  });

  app.directive("sunScreensCurtains", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/curtainsScreens/sun-screens-curtains.html"
    };
  });  
  //- Curtains and Screens

  //+ Fabrics
  app.directive("fabrics", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabrics.html"
    };
  });

  app.directive("naturalFabrics", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabrics/natural-fabrics.html"
    };
  });

  app.directive("syntheticFabrics", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabrics/synthetic-fabrics.html"
    };
  });    
  //- Fabrics

  //+ Fabric Structures
  app.directive("fabricStructures", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabric-structures.html"
    };
  });

  app.directive("frameSupportedFabricStructures", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabricStructures/frame-supported-fabric-structures.html"
    };
  });

  app.directive("shadeSailsFabricStructures", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabricStructures/shade-sails-fabric-structures.html"
    };
  });

  app.directive("tensileFabricStructures", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/fabricStructures/tensile-fabric-structures.html"
    };
  });

    //+ Deployable
    app.directive("deployableFabricStructures", function() {
      return {
        restrict:"E",
        templateUrl: "./templates/fabricStructures/deployable-fabric-structures.html"
      };
    });

    app.directive("customDeployable", function() {
      return {
        restrict:"E",
        templateUrl: "./templates/fabricStructures/deployable/custom-deployable.html"
      };
    });

    app.directive("tentsDeployable", function() {
      return {
        restrict:"E",
        templateUrl: "./templates/fabricStructures/deployable/tents-deployable.html"
      };
    });    

    app.directive("tipisDeployable", function() {
      return {
        restrict:"E",
        templateUrl: "./templates/fabricStructures/deployable/tipis-deployable.html"
      };
    });    
    //- Deployable
  //- Fabric Structures

  //+ Vertical Roller Screens
  app.directive("verticalRollerScreens", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/vertical-roller-screens.html"
    };
  });
  //- Vertical Roller Screens

  //+ Custom Products
  app.directive("customProducts", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/custom-products.html"
    };
  });

  app.directive("agriculturalCustom", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/custom/agricultural-custom.html"
    };
  });

  app.directive("fabricsCustom", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/custom/fabrics-custom.html"
    };
  });

  app.directive("recreationalCustom", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/custom/recreational-custom.html"
    };
  });      
  //- Custom Products

  //+ Consulting
  app.directive("consulting", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/consulting.html"
    };
  });  

  app.directive("codesConsulting", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/consulting/codes-consulting.html"
    };
  }); 

  app.directive("designConsulting", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/consulting/design-consulting.html"
    };
  }); 

  app.directive("engineeringConsulting", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/consulting/engineering-consulting.html"
    };
  });       
  //- Consulting

  //+ About Fabricon
  app.directive("aboutFabricon", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/about-fabricon.html"
    };
  });         
  //- About Fabricon

  //+ Resources
  app.directive("resources", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/resources.html"
    };
  });  
  //- Resources

  //+ Contact Us
  app.directive("contactUs", function() {
    return {
      restrict:"E",
      templateUrl: "./templates/contact-us.html"
    };
  });  
  //- Contact Us
  app.directive("navigationBar", function() {
    return {
      restrict: "E",
      templateUrl: "./templates/navigation-bar.html",
      controller: function() {
        this.tab = "front-page-content";

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("navigationBarDark", function() {
    return {
      restrict: "E",
      templateUrl: "./templates/navigation-bar-dark.html",
      controller: function() {
        this.tab = "front-page-content";

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  app.directive("navigationBarLight", function() {
    return {
      restrict: "E",
      templateUrl: "./templates/navigation-bar-light.html",
      controller: function() {
        this.tab = "front-page-content";

        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
      },
      controllerAs: "tab"
    };
  });

  var products = [
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
  ]; 

  var awnings = [
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
  ];

  var curtains = [
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
  ];

  var fabrics = [
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
  ]; 

  var fabricStructures = [
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
  ];    

  var verticalRollers = [
    [{
      name: 'Vertical Rollers', 
      size: {width: 25, height: 25},
      link: 'vertical-roller-screens',     
      images: {thumbnail: "img/awnings_canopies/60_index_awning.jpg"}
    }]
  ];

  var customProducts = [
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
  ];       
})();