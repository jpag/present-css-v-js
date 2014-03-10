define([], function() {
  
  var config = {
  	numstates : 4,
    header :  "Code Comparison",
    code : [
    	{
    		title: "css" ,
    		blurb : "0kb",
    		code : "top: 0px;<br/>-webkit-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> -moz-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> -ms-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> -o-transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> transition: top 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"
    	},{
    		title :"transform" ,
    		blurb : "0kb",
    		code : "-webkit-transform: translate3d(0px, 0px, 0px);<br/> -moz-transform: translate3d(0px, 0px, 0px);<br/> -ms-transform: translate3d(0px, 0px, 0px);<br/> -o-transform: translate3d(0px, 0px, 0px);<br/> transform: translate3d(0px, 0px, 0px);<br/> -webkit-transition: -webkit-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> -moz-transition: -mox-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> -ms-transition: -ms-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> -o-transition: -o-transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/> transition: -transform 500ms cubic-bezier(0.385, 0.205, 0.235, 0.835);<br/>"
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