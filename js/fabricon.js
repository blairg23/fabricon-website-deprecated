(function () {
    var app = angular.module('fabricon', [
        'fabricon.controllers',   //# Fabricon-specific behavior.
        'ui.bootstrap',   //: Provides Twitter BootStrap compatibility.
        'ui.router'   //: State-based routing of the application.
    ]);
	
    app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    'content': {
                        templateUrl: './templates/home.html',
                        controller: 'HomeController'
                    }
                }
            })
            .state('about', {
                url: "/about",
                views: {
                    'content': {
                        templateUrl: './templates/about.html',
                        controller: 'AboutController'
                    }
                }
            })
            .state('contact', {
                url: "/contact",
                views: {
                    'content': {
                        templateUrl: './templates/contact.html',
                        controller: 'ContactController'
                    }
                }
            })
            .state('products', {
                url: "/products",
                views: {
                    'content': {
                        templateUrl: './templates/products.html',
                        controller: 'ProductsController'
                    }
                }
            })
            .state('type', {
                url: "/:type",
                views: {
                    'content': {
                        templateUrl: './templates/products.types.html',
                        controller: 'ProductsController'
                    }
                }
            })
            .state('style', {
                url: "/:type/:style",
                views: {
                    'content': {
                        templateUrl: './templates/products.types.styles.html',
                        controller: 'ProductsController'
                    }
                }
            });
            // .state('products.type.style', {
            //     url: "/:style",
            //     templateUrl: './templates/products.types.styles.html',
            //     controller: 'ProductsController'
            // })
            // .state('products.traits', {
            //     url: "/:traits",
            //     templateUrl: './templates/traits.html',
            //     controller: 'ProductsController'
            // });
        }
    );

    //+ NAVIGATION BAR
    app.directive("navigationBar", function() {
        return {
            restrict: "E",
            templateUrl: "./templates/navigation-bar.html",
            controller: 'NavigationBarController'
        };
    });
    //- NAVIGATION BAR

    //+ FOOTER
    app.directive("customFooter", function() {
        return {
            restrict: "E",
            templateUrl: "./templates/custom-footer.html"
        };
    });  
    //- FOOTER

    //+ SITE MAP
    app.directive("siteMap", function() {
        return {
            restrict: "E",
            templateUrl: "./templates/site-map.html"
        };
    });  
    app.directive("siteMapSocial", function() {
        return {
            restrict: "E",
            templateUrl: "./templates/site-map-social.html"
        };
    });  
//- SITE MAP
})();