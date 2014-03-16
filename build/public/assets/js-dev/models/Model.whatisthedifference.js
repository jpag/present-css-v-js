define([], function() {
  
  var config = {
    id : "slide-differences",
  	header : "Not all animations are <br/>created equal.",
    numstates : 3,
    bulletpts : [
      {
        title: "CSS",
        list : [
          "'Faster' (specific properties are hardware accelerated) Transforms, and Opacity get the benefit.",
          "Requires specific definitions for each browser (Prefixes)",
          "IE 9 doesn't know what these are."
        ],
      },{
        title: "JS",
        list : [
          "Requires a layer of programming to update each step.",
          "Easier to manage complex animations and interaction points."
        ]
      },{
        title: "Both",
        list : [
          "Alter values of an html element's CSS properties (top,bottom,margin... etc.)"
        ],
      }
    ]

  }

  return config;

});