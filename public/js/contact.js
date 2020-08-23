//initialize firebase 

 var firebaseConfig = {
    apiKey: "AIzaSyDjUvj9rvnJ2SNatZj1yLysOyAo6bClCjA",
    authDomain: "kenyanationalyouthorchestra.firebaseapp.com",
    databaseURL: "https://kenyanationalyouthorchestra.firebaseio.com",
    projectId: "kenyanationalyouthorchestra",
    storageBucket: "kenyanationalyouthorchestra.appspot.com",
    messagingSenderId: "404544296823",
    appId: "1:404544296823:web:bd7dda1e9839679aa07372",
    measurementId: "G-PWZQFG8C9H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');

  // Save message
  saveMessage(name, email, phone);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
  });
}