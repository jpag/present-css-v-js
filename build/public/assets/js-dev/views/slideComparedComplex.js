define([
	"Slide"
], function(
	Slide
) {

    return Slide.extend({
        name :'Slide Compared basic',
        
        dropTop : 350,
        defaultTop : 0,
        time : 500,

        stateChanged : function(num){
            Debug.trace(' State is now! ' +  num );
            var self = this,
                jBar = ".slide .bar-wrapper.jquery .bar",
                tweenBar = ".slide .bar-wrapper.tweenlite .bar";
            if( num == 3 ){
                
                $(jBar).animate({
                    "top" : self.defaultTop
                });

            }else if( num == 4 ){
                $(jBar).animate({
                    "top" : self.dropTop
                },{
                    duration: self.time
                });

                TweenLite.to(tweenBar, (self.time/1000), {"top" : self.defaultTop});
                //$(tweenBar).css({"top" : self.defaultTop});
            }else if( num == 5 ){

                TweenLite.to(tweenBar, (self.time/1000) , {"top" : self.dropTop});
                //$(jBar).css({"top":self.defaultTop});

                $(jBar).animate({
                    "top" : self.defaultTop
                },{
                    duration: self.time
                });

            }else if( num == 6 ){
                TweenLite.to(tweenBar, (self.time/1000), {"top" : self.defaultTop});

                $(jBar).animate({
                    "top" : self.defaultTop
                },{
                    duration: self.time
                });
            }else if (num == 7){
                TweenLite.to(tweenBar, (self.time/1000) , {"top" : self.dropTop});

                $(jBar).animate({
                    "top" : self.dropTop
                },{
                    duration: self.time
                });
            }

        }

    });
});
