define([], function() {
  
  var config = {
    id : "slide-differences",
  	header : "Not all animations are <br/>created equal.",
    numstates : 4,
    hugebar : true,
    bulletpts : [
      {
        title: "CSS - transitions",
        list : [
          "'Faster' (specific properties are hardware accelerated) Transforms, and Opacity properties get the boost.",
          "Requires specific definitions for each browser (Prefixes)",
          "IE 9 doesn't know what these are."
        ],
      },{
        title: "JS - animations",
        list : [
          "Requires a layer of programming to update each step.",
          "Easier to manage complex animations and interaction points."
        ]
      },{
        title: "Both",
        list : [
          "Alter values of an html's CSS properties (top,bottom,margin... etc.)"
        ],
      },{
        title: "Disclaimer",
        list : [
          "These aren't perfect tests. They are examples."
        ],
      }
    ]

  }

  return config;

});