
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
          id : "slide-start",
          numstates : 1,
          header : "Comparing animation techniques in HTML",
          h1 : true,
          hugebar : true,
          blurb : "A look at CSS and JS animation performance in rapid prototyping or development."
        }
      },{
        path:'/slide/2',
        name: 'Differences',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: "models/Model.whatisthedifference"
      },{
        path:'/slide/3',
        name: 'What is the code syntax?',
        status: '',
        description: 'Show case how to program each other, the properties for each',
        _Controller: 'views/slide',
        _Template: 'slideCodeSnippets.html',
        _Model: "models/Model.codesyntax"
      },{
        path:'/slide/4',
        name: 'Basic animation comparison',
        status: '',
        description: 'Compare animation of Top or Transform of a bar.',
        _Controller: 'views/slideComparedBasic',
        _Template: 'slideComparedBasic.html',
        _Model: {
          id : "slide-compare-basic",
          numstates : 7,
          header :  "Simple Comparison"
          //blurb : ""
        }
        //_Style : "slideComparedBasic.css"
      },{
        path:'/slide/5',
        name: 'Code comparison',
        status: '',
        description: 'looking at the code snippets from the previous slide.',
        _Controller: 'views/slideComparedBasic',
        _Template: 'slideCodeSnippets.html',
        _Model: "models/Model.comparedBasic"
        //_Style : "slideComparedBasic.css"
      },{
        path:'/slide/6',
        name: '400 object animation CSS',
        status: '',
        description: 'Multiple objects animating at once. Using CSS Top:',
        _Controller: 'views/slideComparedComplex',
        _Template: 'slideComparedComplex.html',
        //_Style : 'slideComparedComplex.css',
        _Model: {
          id : "slide-compared-complex",
          numstates : 1,
          header :  "400 object Animation<br/>in CSS",
          blurb : "top and color properties with keyframes and delay.",
          type : "css"
        }
      },{
        path:'/slide/7',
        name: '400 object Animation CSS transform',
        status: '',
        description: 'Multiple objects animating at once. Using CSS transfrom to change the y/top position',
        _Controller: 'views/slideComparedComplex',
        _Template: 'slideComparedComplex.html',
        //_Style : 'slideComparedComplex.css',
        _Model: {
          id : "slide-compared-complex",
          numstates : 1,
          header :  "400 object Animation<br/>with CSS -transform",
          blurb : "-transform and opacity with keyframes and delay.",
          type : "css-trans"
        }
      },{
        path:'/slide/8',
        name: '400 object Animation with jQuery',
        status: '',
        description: 'Multiple objects animating at once. Using top animating with jQuery.',
        _Controller: 'views/slideComparedComplex',
        _Template: 'slideComparedComplex.html',
        //_Style : 'slideComparedComplex.css',
        _Model: {
          id : "slide-compared-complex",
          numstates : 1,
          header :  "400 object Animation<br/>with jQuery",
          blurb : "animate top and opacity loop",
          type : "jquery"
        }
      },{
        path:'/slide/10',
        name: '400 object Animation with TweenLite',
        status: '',
        description: 'Multiple objects animating at once. Using top animating with TweenLite',
        _Controller: 'views/slideComparedComplex',
        _Template: 'slideComparedComplex.html',
        //_Style : 'slideComparedComplex.css',
        _Model: {
          id : "slide-compared-complex",
          numstates : 1,
          header :  "400 object Animation<br/>with TweenLite",
          blurb : "top and opacity on repeat with yoyo",
          type : "tweenlite"
        }
      },{
        path:'/slide/11',
        name: 'Complex Code comparison',
        status: '',
        description: 'looking at the code snippets from the previous slides.',
        _Controller: 'views/slide',
        _Template: 'slideCodeSnippetsComplex.html',
        _Model: "models/Model.comparedComplex"
        //_Style : "slideComparedBasic.css"
      },{
        path:'/slide/12',
        name: 'Conclusions',
        status: '',
        description: 'Wrap it up.',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: 'models/Model.conclusion'
      }
    ];

  return {directory:config, defaultPage:defaultPage, locationPath:pathname };
});