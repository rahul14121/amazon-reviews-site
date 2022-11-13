//addEventListener to check if the DOM content is loaded.
//Followed by code to execute if the DOM content is loaded
document.addEventListener('DOMContentLoaded', function()
{
  var elems = document.querySelectorAll('.dropdown-trigger'); //Returns elements in '.dropdown-trigger'
  var options = 
  {
    allignment: 'center', //alignment setting for dropdown
    closeOnClick: false, //dropdown will not close on click
    hover: true, //dropdown will hover
    inDuration: 300, //duration of the animation will take 300ms
  };
  var instances = M.Dropdown.init(elems, options); //passing the config and parameters to the dropdown initializer
});