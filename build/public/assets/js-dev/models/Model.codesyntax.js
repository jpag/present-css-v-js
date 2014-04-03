define([], function() {
  
  var tab = "&nbsp; ";

  var config = {
    id : "slide-syntax",
  	numstates : 4,
    hugebar : true,
    header :  "Code Syntax",
    code : [
        {
            title: "css transition" ,
            blurb : "",
            code : "[browser prefix]-transition: [property] [time] [ease] [delay] <br/>"+
                    "-webkit-transition: height 500ms"

        },{
            title: "css animation" ,
            blurb : "",
            code : "@[browser prefix]keyframes animation-name {<br/>"+
                    tab+"from {<br/>"+
                    tab+tab+"<br/>"+
                    tab+"}<br/>"+
                    tab+"to {<br/>"+
                    tab+tab+"<br/>"+
                    tab+"}<br/>"+
                "[browser prefix]-animation: [animation name] [time] [delay] [iterations] [direction] [fill-mode]<br/>"

        },{
            title: 'javascript jQuery',
            blurb : "",
            code : " $(el).animate({ <br/>"+
                tab+"[property-name] : [value] <br/>"+
                "})"
        },{
            title: 'javascript tweenlite',
            blurb : "",
            code : "Tween.to(el, [time], {<br/>"+
                tab+"[property-name]: [value]<br/>"+
                "})"
        }
    ]
  }

  return config;

});