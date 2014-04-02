define([], function() {
  
  var tab = "&nbsp; ";

  var config = {
    id : "slide-compare-basic",
  	numstates : 4,
    header :  "Code",
    code : [
    	{
    		title: "css" ,
    		blurb : "compiled using SASS and prepos",
    		code : ".baseclass{<br/>"+
                        tab+"top: 0px;<br/>"+
                        tab+"-webkit-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                        tab+"-moz-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                        tab+"-ms-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                        tab+"-o-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                        tab+"transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                        "}<br/>"+
                        ".animateto{<br/>"+
                        tab+"top: 400px;<br/>"+
                        "}"
    	},{
    		title :"css -transform" ,
    		blurb : "compiled using SASS and prepos",
    		code : ".baseclass{<br/>"+
                    tab+"-webkit-transition: -webkit-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                    tab+"-moz-transition: -mox-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                    tab+"-ms-transition: -ms-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                    tab+"-o-transition: -o-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                    tab+"transition: -transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"+
                    "}<br/>"+
                    ".animateto{<br/>"+
                    tab+"-webkit-transform: translate3d(0px, 400px, 0px);<br/>"+
                    tab+" -moz-transform: translate3d(0px, 400px, 0px);<br/> "+
                    tab+"-ms-transform: translate3d(0px, 400px, 0px);<br/>"+
                    tab+"-o-transform: translate3d(0px, 400px, 0px);<br/> "+
                    tab+"transform: translate3d(0px, 400px, 0px);<br/>"+
                    "}"
    	},{
    		title: "jquery",
    		blurb : "96kb",
    		code : "$('.bar').animate({'top' : 350},{duration: 500});<br/>"
    	},{
    		title: "tweenlite",
    		blurb : "94kb",
    		code : "TweenLite.to('.bar', .5, {'top' : 350});<br/>"
    	}
    ]
  }

  return config;

});