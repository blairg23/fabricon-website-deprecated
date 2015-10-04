var ui = angular.module('fabricon.controllers', []);

ui.controller('NavigationBarController', ['$scope', '$state',
    function($scope, $state) {
        $(".nav li").on("click", function() {
            $(".nav li").removeClass("active");
            $(this).addClass("active");
        });
        
        var nav_buttons = $(".nav li");
        for (var i = 0; i < nav_buttons.length; i++) {
            var nav_button = nav_buttons[i];

            $(nav_button).removeClass("active");
            if ($(nav_button).text().toUpperCase() === $state.current.name.toUpperCase()) {
                $(nav_button).addClass("active");
            }
        }
    }
]);

ui.controller('HomeController', ['$scope', '$state',
    function($scope, $state) {
        console.log("Home page!");   
    }
]);

ui.controller('AboutController', ['$scope', '$state',
    function($scope, $state) {
        console.log("About page!");   
    }
]);

ui.controller('ContactController', ['$scope', '$state',
    function($scope, $state) {
        console.log("Contact page!");   
    }
]);

ui.controller('TypeController', ['$scope', '$state',
    function($scope, $state) {
        console.log("Type page!", $state);   
    }
]);

ui.controller('StyleController', ['$scope', '$state',
    function($scope, $state) {
        console.log("Style page!", $state);   
    }
]);

var split_Cap_join = function(thing, split_separator, join_separator) {
    var thing_split = thing.split(split_separator);
    for (var i = 0; i < thing_split.length; i++) {
        if (thing_split[i][0] === undefined) { continue; }
        thing_split[i] = thing_split[i][0].toUpperCase()+thing_split[i].slice(1, thing_split[i].length);
    }
    thing = thing_split.join(join_separator);

    return thing;
};

var data_json_path = '../fabricon-test/home/home.json';
var g_refresh_navigator = null;
ui.controller('ProductsController', ['$rootScope', '$scope', '$http', '$state',
    function($rootScope, $scope, $http, $state) {
        console.log("Products page!");
        console.log("$state:", $state);

        var products_state_change_start = function(event, toState, toParams, fromState, fromParams) {
            console.log("event:", event);
            console.log("toState:", toState);
            console.log("toParams:", toParams);
            console.log("fromState:", fromState);
            console.log("fromParams:", fromParams);

            //+ Set Data Source based on application "state".
            if ((toParams === null) || (toParams.type === undefined)) {
                data_json_path = './home/home.json';
            } else if (toParams !== fromParams) {
                if (toParams.type !== undefined) {
                    type = toParams.type;

                    //+ Format Data URL.
                    var type_directory = toParams.type;
                    type_directory = split_Cap_join(type_directory, '-', '-');
                    type_directory = split_Cap_join(type_directory, '_', '%20');
                    type_directory = split_Cap_join(type_directory, ' ', '%20');
                    //- Format Data URL.

                    data_json_path = './home/'+type_directory+'/'+toParams.type+'.json';
                }

                if ((toParams.type !== undefined) && (toParams.style !== undefined)) {
                    //+ Format Data URL.
                    var type_directory = toParams.type;
                    type_directory = split_Cap_join(type_directory, '-', '-');
                    type_directory = split_Cap_join(type_directory, '_', '%20');
                    type_directory = split_Cap_join(type_directory, ' ', '%20');
                    //- Format Data URL.

                    //+ Format Data URL.
                    var style_directory = toParams.style;
                    style_directory = split_Cap_join(style_directory, '-', '-');
                    style_directory = split_Cap_join(style_directory, '_', '%20');
                    style_directory = split_Cap_join(style_directory, ' ', '%20');
                    //- Format Data URL.

                    data_json_path = './home/'+type_directory+'/'+style_directory+'/'+toParams.style+'.json';    
                }
            } else {
                data_json_path = './home/home.json';
            }
            //- Set Data Source based on application "state".

            console.log(data_json_path);
            g_refresh_navigator();
        };

        //+ This gets called every time the Products page is interacted with.
        $rootScope.$on('$stateChangeStart', products_state_change_start);
        //-

        $scope.main_gallery = {};

        var refresh_navigator = function(data) {
            console.log("STATE TYPE:", $state.params.type);
            console.log("STATE STYLE:", $state.params.style);
            console.log("STATE TRAITS:", $state.params.traits);
            $scope.tiles = data;

            console.log($scope);

            //+ Set tile properties.
            for (var i = 0; i < $scope.tiles.length; i++) {
                var row = $scope.tiles[i];
                for (var j = 0; j < row.length; j++) {
                    var tile = row[j];
                    
                    console.log("LINK NAME:", tile.link_name);
                    tile.type = tile.link_name;

                    if ($state.params.type !== undefined) {
                        tile.type = $state.params.type;
                        tile.style = tile.link_name;
                    }

                    row[j] = tile;
                }
            }
            //- Set tile properties.

            $scope.main_gallery.images = {};
            $scope.main_gallery.images.full = {};
            $scope.main_gallery.images.full.size = {};
            $scope.main_gallery.images.full.size.height = 50;
            $scope.main_gallery.images.full.size.width = 100;
            
            //+ Populate Main Gallery.
            var gallery_images = [];
            for (var i = 0; i < $scope.tiles.length; i++) {
                var row = $scope.tiles[i];
                for (var j = 0; j < row.length; j++) {
                    var tile = row[j];

                    var image_folder_path = tile['image_folder_path'];
                    tile['image_folder_path'] = image_folder_path;
                    var full_size_category_images = tile.images.full.images;

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

            $scope.main_gallery.images.full.images = gallery_images;
            //- Populate Main Gallery.
        };

        g_refresh_navigator = function() { 
            $http.get(data_json_path).success(refresh_navigator);
        };

        console.log("Once: products_state_change_start");
        products_state_change_start(null, $state, $state.params, $state, null);
    }
]);

//+ DROPDOWN
var configure_type_dropdown = function($state, categories) {
    if (editing_type === true) {
        $( '#sifter-type-container-dropdown' ).empty();
        for (var i = 0; i < categories.length; i++) {
            var category_row = categories[i];
            
            for (var j = 0; j < category_row.length; j++) {
                var category = category_row[j];
                $( '#sifter-type-container-dropdown' ).append('<li><a href="">'+category.name+'</a></li>')
            }
        }
    }

    if (type_click_set === true) { return; }

    $( '#sifter-type-container-dropdown a' ).on( 'click', function( event ) {
        var type_text = event.target.innerText;
        console.log(type_text);
        $('#sifter-type-button').text(type_text);
        $("#sifter-type-button").css("font-weight", "bold");  
        $('#sifter-type-button').append("&nbsp;<span class='caret'></span>");
        
        $('#sifter-style-button').text("Style");
        $("#sifter-style-button").css("font-weight", "bold");  
        $('#sifter-style-button').append("&nbsp;<span class='caret'></span>");
        $("#sifter-style-button").prop("disabled", false);  
    
        $("#sifter-traits-button").text("Traits");
        $("#sifter-traits-button").css("font-weight", "bold");  

        reset_traits_dropdown();
        $("#sifter-traits-button").prop("disabled", true);  
    
        data_json_path = '../fabricon-test/home/'+type_text+'/'+type_text.toLowerCase()+'.json';
        console.log(data_json_path);
        editing_type = false;
        editing_style = true;

        g_refresh_navigator();
        $state.go('products.type', {'type': type_text.toLowerCase()});
    });

    type_click_set = true;
};

var configure_style_dropdown = function($state, categories) {
    if (editing_style === true) {
        $( '#sifter-style-container-dropdown' ).empty();
        for (var i = 0; i < categories.length; i++) {
            var category_row = categories[i];
            
            for (var j = 0; j < category_row.length; j++) {
                var category = category_row[j];
                $( '#sifter-style-container-dropdown' ).append('<li><a href="">'+category.name+'</a></li>')
            }
        }
    }

    if (style_click_set === true) { return; }
  
    $( '#sifter-style-container-dropdown a' ).on( 'click', function( event ) {
        var style_text = event.target.innerText;
        console.log(style_text);
        $('#sifter-style-button').text(style_text);
        $("#sifter-style-button").css("font-weight", "bold");  
        $('#sifter-style-button').append("&nbsp;<span class='caret'></span>");
        
        $("#sifter-traits-button").text("Traits");
        $("#sifter-traits-button").css("font-weight", "bold");  
        $('#sifter-traits-button').append("&nbsp;<span class='caret'></span>");

        reset_traits_dropdown();
        $("#sifter-traits-button").prop("disabled", false); 
    
        $state.go('products.type.style', {'style': style_text.toLowerCase()});
    });

    style_click_set = true;
};

var configure_traits_dropdown = function($state) {
    var options = [];
 
    $( '#sifter-traits-container-dropdown a' ).on( 'click', function( event ) {

       var $target = $( event.currentTarget ),
           val = $target.attr( 'data-value' ),
           $inp = $target.find( 'input' ),
           idx;

       if ( ( idx = options.indexOf( val ) ) > -1 ) {
          options.splice( idx, 1 );
          setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
       } else {
          options.push( val.toLowerCase() );
          setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
       }

       $( event.target ).blur();
          
       console.log( options );
      
       $state.go('products.type.style.traits', {'traits': options});

       return false;
    });
};

var reset_traits_dropdown = function() {
    var traits = $('#sifter-traits-container-dropdown').find("input[type=checkbox]");

    for (var i = 0; i < traits.length; i++) {
        var trait = traits[i];

        if ($(trait).prop('checked')) {
            $(trait).click();
        }

        console.log(trait);
    }    
};
//- DROPDOWN