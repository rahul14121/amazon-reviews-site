var firebaseConfig = {
  apiKey: "AIzaSyBgBYcGBgX4LRH23dP3hTg7Qv9xoSl938M",
  authDomain: "reviews-dd628.firebaseapp.com",
  databaseURL: "https://reviews-dd628-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "reviews-dd628",
  storageBucket: "reviews-dd628.appspot.com",
  messagingSenderId: "1076523572946",
  appId: "1:1076523572946:web:0fd3b378da56bf2873970b",
  measurementId: "G-TR82RMTEEZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth and firestore references
var auth = firebase.auth();
var db = firebase.database();

auth.onAuthStateChanged(function (user) {
  var uid = {};
  var email = {};
  if (user) {
    // if the user exist go to the welcome page
    uid = user.uid;
    email = user.email;
    document.getElementById("signup-Email").value = user.email;
  }
});

// on page load initialize the tab component
document.addEventListener("DOMContentLoaded", function () {
  var iTab = document.querySelector(".tabs");
  M.Tabs.init(iTab);
});

// ---------DOM elements


/** ----------register form-------------*/
/** Register Form and save to auth then save details to database */

function signUp(userPass) {
  var signupForm = document.querySelector("#signup-form");
  /** get user info */

  var userFirstName = document.getElementById("signup-Fname").value;
  console.log(userFirstName);
  var userSurname = document.getElementById("signup-Lname").value; // Change LastName to lastName
  var userBusiness = document.getElementById("signup-Businessname").value;
  console.log(userBusiness);
  var userEmail = document.getElementById("signup-Email").value;

  /** create a user object to insert to DB */
  firebase.auth().onAuthStateChanged(function (user) {
    if (user == null) {
      user = userPass;
    }
    if (user) {
      uid = user.uid;
      var user = firebase.auth().currentUser;

      var firebaseRef = firebase.database().ref('/userData/');
      var userData = {
        userFirstName: userFirstName,
        userSurname: userSurname,
        userBusiness: userBusiness,
        userEmail: userEmail
      };
      firebaseRef.child(uid).set(userData).then(function (value) {
        setTimeout(function () {
          alert("Registration Complete. Loading the dashboard page now");
          window.location.replace("dashboard.html");
        }, 1000);
      });
    } else {
      window.location = 'index4.html';
    }
  });
  return "database reg complete";
}

module.exports = { signUp: signUp };