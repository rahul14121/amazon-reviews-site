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

/** Initialize Firebase */
firebase.initializeApp(firebaseConfig);
/** firebase.analytics(); */
var auth = firebase.auth();

firebase.auth().onAuthStateChanged(function (user) {

  if (user) {

    if (firebase.auth().currentUser.metadata.creationTime === firebase.auth().currentUser.metadata.lastSignInTime) {
      window.location = "login1.html";
    } else {
      uid = user.uid;
      var user = firebase.auth().currentUser;
      window.location = 'dashboard.html';
    }
  } else {}
});

/** Sign Up */
/** The sign up function for regular (not Google account) first time sign ups.
 * @param {string} email - The variable storing the email inputted by the user.
 * @param {string} password - The variable storing the email inputted by the user. 
 */
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(function (e) {
    return alert(e.message);
  });
  alert("Signed Up");
  return "signed up";
}

/** The sign in function for regular (not Google account) sign ins.
* @param {string} email - The variable storing the email inputted by the user.
* @param {string} password - The variable storing the email inputted by the user. 
*/
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(function (e) {
    return alert(e.message);
  });
  return "signed in";
}

/** The sign out function for regular (not Google account) sign outs. */
function signOut() {
  auth.signOut();
  alert("Signed Out");
  return "signed out";
}

/** The sign in function for Google accounts .
* @param {string} provider - The variable containing the authorization for a Google sign in
* @param {string} token - This gives you a Google Access Token. You can use it to access the Google API.
* @param {string} user - The signed-in user info.
*/
function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider); //Loads the redirect sign in with the provider passed (Google)
  firebase.auth().getRedirectResult(); //Result of the sign in is obtained

  return "google sign in complete";
};

module.exports = { signUp: signUp, signIn: signIn, signOut: signOut, googleSignIn: googleSignIn };