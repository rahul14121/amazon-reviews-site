//Declaring the home value and link


//Code for the nav - heading at the top of the page, with links to other parts of the site
var navHeading = document.querySelector('#nav');
navHeading.innerHTML = "<nav class=\"nav-wraper\">\n<nav class=\"nav-extended\">\n\n  <div class=\"nav-wrapper container\">\n    <a href=\"#\" class=\"brand-logo\">Amazon Reviews</a>\n    <ul class=\"right\">\n      <a href=\"#\" class=\"btn-floating white\">\n      <i class=\"material-icons\" style=\"color:blue\">notifications_none</i>\n      </a>\n    </ul>\n    \n    <ul class=\"right hide-on-med-and-down\">\n      <li><a href=\"dashboard.html\">Home</a></li>\n      <li><a href=\"index4.html\" onclick=signOut()>Log Out</a></li>\n      <li><a href=\"#signInModal\" class=\"modal-trigger\" id=\"loginLogout\">Login</a></li>\n      </li>\n    </ul>\n    \n  </div>\n</nav>\n\n\n\n";

//addEventListener to check if the DOM content is successfully loaded
//Sidenav is also loaded
document.addEventListener("DOMContentLoaded", function () {
  var sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav);
});