
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
        status: 'In Production',
        description: '',
  			_Controller: 'views/slide',
        _Template: 'slide.html',
  			_Model: {
          title   : 'A massive h1 title', 
          subtitle  : 'Some Subtitile'
        }
  		}
    ];

  return {directory:config, defaultPage:defaultPage, locationPath:pathname };
});