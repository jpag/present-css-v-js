define([
	"BaseView"
], function(
	BaseView
) {

    return BaseView.extend({
        name :'Slide View',

        cl : {
            bottom : "bottom",
            right : "right",
            left : "left"
        },

        keys : {
            right : 39,
            left: 37,
            esc : 27,
            space : 32,
            a : 65
        },

        cookielabel : 'slidedirection',

        eventManager : {
            'click' : function(ev){ 
                this.clickEvent(ev);
            },
            // 'keydown' : function(ev){
            //     this.keydown(ev);
            // }
        },

        init : function(_config){
            this._super(_config);
        },

        didInsertElement : function(){
            this._super();
            $('body').on({
                "keyup": $.proxy(this.keyup,this)
            });
            
            var self = this;

            Debug.trace( document.cookie );
            if( document.cookie ){
                var split = document.cookie.split(";");
                for( var c = 0; c < split.length; c++){
                    Debug.trace( ' c ' + split[c] );
                    if( split[c].indexOf(this.cookielabel) >= 0 ){

                        var r = split[c].split("=");

                        if( parseInt(r[1]) < 0 ){
                            self.$el
                                .removeClass(self.cl.right)
                                .addClass(self.cl.left)        
                        }

                        break;
                    }
                }
            }

            // this.$el.fadeIn(300);
            setTimeout(function(){
                self.$el
                    .removeClass(self.cl.right + ' ' + self.cl.left + ' ' + self.cl.bottom);        
            }, 10);
            
        },

        clickEvent: function(ev) {
            Debug.trace(' ------ click ----- ');
        },

        keyup : function(ev){
            Debug.trace( ev.keyCode );
            if(ev.keyCode == this.keys.right ){
                // increment :
                this.gotoslide(1);
            }else if(ev.keyCode == this.keys.left ){
                // decrement :
                this.gotoslide(-1);
            }else if( ev.keyCode == this.keys.esc ){

            }
        },

        gotoslide : function(num){

            var currentLoc = window.location.pathname,
                split = window.location.pathname.split('/'),
                currentNum = parseInt(split.pop()),
                destination = currentNum + num,
                cl = (num > 0)? this.cl.left : this.cl.right;
            
            document.cookie = this.cookielabel+"="+num;
    
            this.$el.addClass(cl);
            this.$el.on("webkitTransitionEnd transitionend oTransitionEnd", function(){

                //why would this NOT be a slide ?
                if( destination < 1 ){
                    // go to directory.
                    window.location = '/';
                }else{
                    // we do not know the number of slides.
                    window.location = '/'+split[1]+'/'+destination;
                }
            }); 
        }

    });
});
