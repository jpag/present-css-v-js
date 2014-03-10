define([], function() {
  
  var config = {
  	header : "Differences.",
    numstates : 3,
    bulletpts : [
      {
        title: "CSS",
        list : [
          "Typically percieved as 'faster' (specific properties are hardware accelerated) Transforms, and Opacity get the benefit.",
          "IE 9 doesn't know what these are."
        ],
      },{
        title: "JS",
        list : [
          "Requires a library or user programmed code to repaint/update each frame.",
          "Complex interactions and animations can be chained together"
        ]
      },{
        title: "Both",
        list : [
          "Alter values of an element's CSS properties (top,bottom,margin... etc.)"
        ],
      }
    ]

  }

  return config;

});