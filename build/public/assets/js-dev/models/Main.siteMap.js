
// you can create an entire site just by using this page

define([], function() {
  //  The default page to use from 'config' array number
  //  array starts with 0.
  var defaultPage = 0;

  //if you are running this site in a subfolder 
  // you are gonna need to define the sub folder here
  // always have first slash not last slash:
  // i.e. www.example.com/v2/prototypesite/ would looke like pathname = "/v2/prototypesite";
  var pathname = "";

  // if you have a re-occuring subview that doesn't auto intitate in main
  // declare it here and save lines of code
  

  var config = [
  		{
        path:'/directory',
        name: 'Site Directory',
        _Controller: 'views/directory',
        _Template:'directory.html',
        _Model : {}
      },{
        path:'/slide/1',
        name: 'Introduction',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: {
          numstates : 1,
          header : "Animations <br/>in CSS or JS"
        }
      },{
        path:'/slide/2',
        name: 'What is the difference',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: "models/Model.whatisthedifference"
      },{
        path:'/slide/3',
        name: 'Basic animation comparison',
        status: '',
        description: '',
        _Controller: 'views/slideComparedBasic',
        _Template: 'slideComparedBasic.html',
        _Model: {
          numstates : 7,
          header :  "Animating only top compared.",
        },
        _Style : "slideComparedBasic.css"
      },{
        path:'/slide/4',
        name: 'Code comparison',
        status: '',
        description: '',
        _Controller: 'views/slideComparedBasic',
        _Template: 'slideComparedBasicCode.html',
        _Model: "models/Model.comparedBasic",
        _Style : "slideComparedBasic.css"
      }

      /*,{
        path:'/slide/4',
        name: 'slide 4',
        status: '',
        description: '',
        _Controller: 'views/slideComparedComplex',
        _Template: 'slideComparedComplex.html',
        _Style : 'slideComparedComplex.css',
        _Model: 'models/Model.comparedComplex'
      }*/
    ];

  return {directory:config, defaultPage:defaultPage, locationPath:pathname };
});