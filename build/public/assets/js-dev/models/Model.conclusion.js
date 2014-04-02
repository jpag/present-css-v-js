define([], function() {
  
  var tab = "&nbsp; "
  var config =   {
    id : "slide-conclusion",
  	header : "Conclusions",
    numstates : 6,
    bulletpts : [
      "",
      
      // maybe remove this one:
      //"Hardware performance isn't something to rely on exclusively (use in moderation)",

      "CSS transitions can get complicated and hard to manage <br/>"+
        tab+"-mulitple prefixes<br/>"+
        tab+"-making timeline animations<br/>"+ 
        tab+"-syntax requires a lot of additional lines",
      
      "CSS transitions can be great for 'set and forget' animations",
      
      "Animations that utilize window.requestAnimationFrame are slick<br/>"+
      tab+"-browser will optimize based off of avaiable framerate<br/>"+
      tab+"-deactivates when tab is not active",
      
      // "Always have a fallback for legacy products.",
      
      // "There are alternatives to jQuery (84kb). <a href='http://zeptojs.com/'>Zepto<a/> 10kbs or <a href='https://github.com/dettmar/johanQuery'>subset jQuery</a> 911bytes",
      
      "Source: <a href='github.com/jpag/present-css-v-js'>github.com/jpag/present-css-v-js</a>",
      
      "thanks."
    ]

  }

  return config;

});