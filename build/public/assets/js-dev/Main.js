/*
 * CONFIG settings for REQUIRE JS
 * PATHS etc refs to all libs.
 */

requirejs.config({
    baseUrl: '/assets/js-dev/',

    /*
     * Define aliases for the paths used.
     * If you edit this section, make sure the analog edit goes into
     * build.js as well. These need to stay in sync.
     */

    paths: {
        jQuery          : '_wrappers/jquery.wrapper',
        jEase           : '_lib/jquery.easing.1.3.min',
        TweenLite       : '_lib/tweenlite/TweenMax.min',
        Handlebars      : '_lib/handlebars-1.0.0',
        text            : '_lib/text',
        BaseView        : 'views/_BaseView',
        Slide           : 'views/slide'
    },
    priority: ['jQuery'],
    shim: {
        "jEase":{
            deps    :["jQuery"],
            exports :"jEase"
        },
        "Handlebars":{
            deps    :["jQuery"],
            exports : "Handlebars"
        },
        "BaseView" : {
            deps    : ["jQuery", "Handlebars"],
            exports : "BaseView"
        }
    }
});

/* -----------------------------------
 * ----- Let us start up the APP -----
 * -----------------------------------
 */

require([
    'jQuery',
    'Handlebars',
    'TweenLite',
    'models/Main.siteMap',
    '_modules/debugger',
    '_modules/Global.setup',
    
    /* 
     * If you want to add default features that run 
     * by themselves everywhere you can plop there here
     * i.e. a nav. or footer.
     */

    'jEase',
    'text' 
], function(
    $,
    Handlebars,
    TweenLite,
    siteMap
) {
    
    window.App = window.App || {};
    
    // Determine what page or view to load here:
    App.init = function() {
        //Debug.trace( ' ----- INITIALIZE APP ----' );
        // Determine the path and what view to load:
        var view = null,
            Address = window.location.pathname.replace(siteMap.locationPath , "" );

        for( var s = 0; s < siteMap.directory.length; s++ ){
            if( Address == siteMap.directory[s].path ) {
                // Debug.trace("  - page match " + siteMap.directory[s].view );
                view = siteMap.directory[s];
                view.numofslides = siteMap.directory.length - 1; // remove directory from length
            }
        }

        if( view == null ){
            if( !siteMap.defaultPage ){
                siteMap.defaultPage = 0;
            }
            view = siteMap.directory[ siteMap.defaultPage ];
        }

        App.loadView( view, App.loadComplete );
    };

    /*
     * ----- Load Page View ----
     * load a specified view and template
     */
    App.loadView = function(vw,callBack) {
        require([
                    vw._Controller
                ], function( 
                    View
                ){
                    var view = new View(vw);
                    if( typeof callBack !== 'undefined' ){
                        callBack();
                    }
                });
    };  

    /*
     * ------- Reveal ------
     * animate out the loader and fade out
    */
    App.loadComplete = function() {
        // Debug.trace(' APP LOAD COMPLETE');
        // $("#siteloader")
        //         .delay(50)
        //         .animate({
        //             "top": "25px"
        //         })
        //         .animate({
        //             "opacity":0,
        //             'top':'-100px'
        //         }, {
        //             duration: 200,
        //             complete: App.revealAll
        //         });

        App.revealAll();
    };

    // remove the loader and show the content
    App.revealAll = function() {
        //$("#site-composite").fadeIn(500);
        $("#site-composite").show();
        //$("#siteloader-wrapper").remove();
    };

    App.init();

});

