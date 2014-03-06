define([
	"BaseView"
], function(
	BaseView
) {

    return BaseView.extend({
        name :'Slide View',

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
        },

        clickEvent: function(ev) {
            Debug.trace(' ------ click ----- ');
        },

        keyup : function(ev){
            Debug.trace( ev );
        }

    });
});
