define([
	"Slide",
    "Stats"
], function(
	Slide
) {

    return Slide.extend({
        name :'Slide Compared Animations Complex',
        
        dropTop : 350,
        defaultTop : 0,
        time : 500,

        didInsertElement : function(){
            this._super();

            // setup stats:
            var stats = new Stats();
            stats.setMode(0); // 0: fps, 1: ms
            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.right = '0px';
            stats.domElement.style.top = '0px';

            this.$el.append( stats.domElement );

            setInterval( function () {

                stats.begin();

                // your code goes here

                stats.end();

            }, 1000 / 60 );

            // four different slides, one state animating loop

            // let us add the frame rate counter.
            // do we animate with tween,jquery,css, or transform?
            var type = this.settings._Model.type,
                self = this;

            if( type == 'css' ){
                this.$el.addClass("css-animate");

            }else if( type == 'css-trans' ){
                this.$el.addClass("css-trans");
            }else if( type == 'jquery' ){
                var blocks = $(".block");
                $(".block").each(function(t,el){
                    
                    // if( t > 10 ){
                    //     return;
                    // }

                    setTimeout(function(){
                        self.jqueryAnimate(el);
                    }, (25 * t) );
                    
                });

            }else if( type == 'tweenlite' ){

                var blocks = new Array(),
                    jQBlocks = $(".block");

                // for( var b = 0; b < jQBlocks.length; b++){
                //     blocks.push(jQBlocks[b]);
                // }
                $(".block").each(function(t,el){
                    setTimeout(function(){
                        var tl = new TimelineMax({repeat:-1, yoyo:true});
                        //staggerTo
                        tl.to(el, .25, {
                                opacity:0.5, 
                                // background: ""
                                top:20, 
                                ease:Linear.easeNone});    
                    }, (25*t) );
                    
                });

            }
        },

        jqueryAnimate : function(el) {
            var tp = 20,
                totalTime = 500,
                self = this;

            $(el).animate({
                top : tp,
                opacity : .5
            },{
                duration : totalTime/2,
                complete: function() {
                    // go back:
                    $(el).animate({
                        top : 0,
                        opacity : 1
                    },{
                        duration : totalTime/2,
                        complete : function(){
                            self.jqueryAnimate(el);
                        }
                    });
                }
            });
        }

        

    });
});
