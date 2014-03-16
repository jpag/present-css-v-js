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

        totalSlides : 0,

        cookielabel : 'slidedirection',

        eventManager : {
            'click' : function(ev){ 
                this.clickEvent(ev);
            },
            'touchend' : function(ev){
                this.touchEvent(ev);
            }
        },

        init : function(_config){
            this._super(_config);
            this.totalSlides = _config.numofslides;
            // Debug.trace( ' total num slides ' + this.totalSlides );

        },

        didInsertElement : function(){
            this._super();
            $('body').on({
                "keyup": $.proxy(this.keyup,this)
            });
            
            var self = this;

            if( document.cookie ){
                var split = document.cookie.split(";");
                for( var c = 0; c < split.length; c++){
                    Debug.trace( ' cookie : ' +c + ' - ' + split[c] );
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

            if( typeof this.settings._Model.numstates == 'undefined' || this.settings._Model.numstates < 2 ){
                // Debug.trace(' - hiding progress bar' );
                $("#progress-bar").hide();
            }

            setTimeout(function(){
                self.$el
                    .removeClass(self.cl.right + ' ' + self.cl.left + ' ' + self.cl.bottom);        
            }, 10);
            
        },

        clickEvent: function(ev) {
            Debug.trace(' ------ click ----- ');

            // go to next?
            this.gotoslide(1);
        },

        touchEvent: function(ev) {
            Debug.trace(' ------ touch ----- ');

            // go to next?
            this.gotoslide(1);
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
            var state = parseInt(this.$el.data('state')),
                states = parseInt(this.$el.data('states'));

            if(  states == 1 ||  
                (state == states) && num == 1  ||
                (state == 1) && num == -1 ){
                
                var currentLoc = window.location.pathname,
                    split = window.location.pathname.split('/'),
                    currentNum = parseInt(split.pop()),
                    destination = currentNum + num,
                    cl = (num > 0)? this.cl.left : this.cl.right,
                    totalNum = this.totalSlides;    

                document.cookie = this.cookielabel+"="+num;
            
                this.$el.addClass(cl);
                this.$el.on("webkitTransitionEnd transitionend oTransitionEnd", function(){

                    //why would this NOT be a slide ?
                    if( destination < 1 || destination > totalNum ){
                        // go to directory.
                        window.location = '/';
                    }else{
                        // we do not know the number of slides.
                        window.location = '/'+split[1]+'/'+destination;
                    }
                }); 
            }else{
                Debug.trace(' updating state ' + state );
                
                var next = state+num;

                this.$el
                    .data('state', next)
                    .removeClass('state-'+state )
                    .addClass('state-'+ next);

                TweenLite.to("#progress-bar .progress-state", .2 , {
                    width : Math.ceil(next/states * 100) + "%"
                });

                this.stateChanged(next);
                // $(document).trigger('statechanged',[next]);
            }
        },

        stateChanged : function(num) {
            Debug.trace(' state changed base');
        }

    });
});
