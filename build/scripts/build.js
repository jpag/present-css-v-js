({
    appDir  : '../public/assets/js-dev',
    baseUrl : '.',
    dir     : '../public/assets/js',

    optimize            : 'uglify',
    skipDirOptimize     : true,
    normalizeDirDefines : 'skip',

    paths: {
        jQuery          : '_wrappers/jquery.wrapper',
        jEase           : '_lib/jquery.easing.1.3.min',
        TweenLite       : '_lib/tweenlite/TweenMax.min',
        Handlebars      : '_lib/handlebars-1.0.0',
        text            : '_lib/text',
        BaseView        : 'views/_BaseView',
        Slide           : 'views/slide',
        Stats           : '_lib/stats.min'
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

    modules: [
        {
            name    : 'Main'
        }
    ]
})