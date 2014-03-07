
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
        name: 'Welcome',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: {
          greeting : "Hello."
        }
      },{
        path:'/slide/2',
        name: 'slide 2',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: {
          greeting : "Sup."
        }
      },{
        path:'/slide/3',
        name: 'slide 3',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: {
          greeting : "salut."
        }
      },{
        path:'/slide/4',
        name: 'slide 4',
        status: '',
        description: '',
        _Controller: 'views/slide',
        _Template: 'slide.html',
        _Model: {
          greeting : "ciao."
        }
      },{
  			path:'/slide/5',
        name: 'slide 5',
        status: '',
        description: '',
  			_Controller: 'views/slide',
        _Template: 'slide.html',
  			_Model: {
          greeting : "cheerio."
        }
  		}
    ];

  return {directory:config, defaultPage:defaultPage, locationPath:pathname };
});