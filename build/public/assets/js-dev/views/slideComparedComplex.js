define([
	"Slide",
    "Stats"
], function(
	Slide
) {

    return Slide.extend({
        name :'Slide Compared Animations Complex',
        
        totalTime : 500,
        numOfBlocks : 315,
        blockDimensions : {
            w: 27,
            h: 23,
            margin : 5
        },
        blocksList : [],
        // canvas context
        ctx : null,

        canvasD : {
            w : 700,
            h : 470
        },

        factor : 1.5,
        

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

            // let us add the frame rate counter.
            setInterval( function () {
                stats.begin();
                // your code goes here
                stats.end();
            }, 1000 / 60 );

            
            // do we animate with tween,jquery,css, or transform?
            var type = this.settings._Model.type,
                self = this;

            if( type == 'css' ){
                this.$el.addClass("css-animate");
            }else if( type == 'css-trans' ){
                this.$el.addClass("css-trans");
            }else if( type == 'jquery' ){
                $(".block").each(function(t,el){
                    setTimeout(function(){
                        self.jqueryAnimate(el);
                    }, (25 * t) );
                });
            }else if( type == 'tweenlite' ){
                $(".block").each(function(t,el){
                    setTimeout(function(){
                        var tl = new TimelineMax({repeat:-1, yoyo:true});
                        tl.to(el, .25, {
                                opacity:0.5, 
                                top:20, 
                                ease:Linear.easeNone});    
                    }, (25*t) );
                });
            }else if( type == 'canvas' ){
                // FYI this version uses a different view.html then the rest.

                // create the matrix of blocks first:
                // origin, current y and direction
                var row = 0,
                    col = 0,
                    numCols = 21;

                for( var b = 0; b < this.numOfBlocks; b++){
                    if( col > numCols ){
                        row++;
                        col = 0;
                        // this.blocksList[row] = new Array();
                    }
                    // just a list not a matrix. faster to loop through then two for loops.
                    var startX = ((this.blockDimensions.w+this.blockDimensions.margin) * col);
                    var startY = ((this.blockDimensions.h+this.blockDimensions.margin) * row);

                    this.blocksList.push({
                                            origin:[
                                                startX,
                                                startY
                                            ] , 
                                            current:[ 
                                                startX , 
                                                startY 
                                            ], 
                                            direction:1, 
                                            delay: (2*b) * 1/this.factor,
                                            alpha : 1
                                        });
                    col++;
                }

                var c = document.getElementById("canvas-el");
                this.ctx = c.getContext("2d");
                this.ctx.fillStyle = "#edb33f";
                
                this.animateCanvas();
            }
        },

        animateCanvas : function() {
            // Debug.trace(' animate ');
            var num = this.numOfBlocks;
            var maxY = 20;
            
            this.ctx.clearRect(0,0, this.canvasD.w, this.canvasD.h);
            this.ctx.save();
            for( var b = 0; b < this.blocksList.length; b++){
                var block = this.blocksList[b]
                    originY = block.origin[1],
                    currentX = block.current[0],
                    alphaIncrement = .03;
                    increment = 1 * this.factor;

                if( block.delay > 0 ){
                    block.delay--;
                }else{
                    // determine direction -- or ++ the current location 
                    if( block.direction == -1 ){
                        // going backwards  back UP
                        block.current[1] -= increment;
                        block.alpha += alphaIncrement;
                        if( block.current[1] <= originY){
                            block.direction = 1;
                        }
                    }else if( block.direction == 1 ){
                        // going down to the max pos.
                        block.current[1] += increment;
                        block.alpha -= alphaIncrement;
                        
                        if( block.current[1] >= (maxY + originY) ){
                            block.direction = -1;
                        }
                    }
                }

                this.ctx.fillStyle = "rgba(237, 179, 63, "+block.alpha+")";
                // draw block in this location:
                this.ctx.fillRect(currentX, block.current[1], this.blockDimensions.w, this.blockDimensions.h);
            }
            this.ctx.restore();
            this.canvasUpdate( this.animateCanvas );
        },

        canvasUpdate : function(func){
            window.requestAnimationFrame =  window.requestAnimationFrame || 
                                                window.mozRequestAnimationFrame || 
                                                window.webkitRequestAnimationFrame || 
                                                window.msRequestAnimationFrame ||
                                                (function (func){setTimeout(func, 16.666);});

            window.requestAnimationFrame( $.proxy(func,this) );
        },

        jqueryAnimate : function(el) {
            var tp = 20,
                totalTime = this.totalTime,
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
