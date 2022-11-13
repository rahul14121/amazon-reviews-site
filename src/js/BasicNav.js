//Declaring the home value and link


//Code for the nav - heading at the top of the page, with links to other parts of the site
const navHeading = document.querySelector('#nav')
navHeading.innerHTML = `<nav class="nav-wraper">
<nav class="nav-extended">

  <div class="nav-wrapper container">
    <a href="#" class="brand-logo">Amazon Reviews</a>
    <ul class="right">
      <a href="#" class="btn-floating white">
      <i class="material-icons" style="color:blue">notifications_none</i>
      </a>
    </ul>
    
    <ul class="right hide-on-med-and-down">
      <li><a href="dashboard.html">Home</a></li>
      <li><a href="index4.html" onclick=signOut()>Log Out</a></li>
      <li><a href="#signInModal" class="modal-trigger" id="loginLogout">Login</a></li>
      </li>
    </ul>
    
  </div>
</nav>



`

//addEventListener to check if the DOM content is successfully loaded
//Sidenav is also loaded
document.addEventListener("DOMContentLoaded", function()
{
  var sidenav = document.querySelector(".sidenav");
  M.Sidenav.init(sidenav);
});