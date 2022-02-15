
const firebaseConfig = {
    apiKey: "AIzaSyB212kh8IhNxqsVH_dYTpx1J_XzpIgJb_s",
    authDomain: "kwitterproject-66026.firebaseapp.com",
    databaseURL: "https://kwitterproject-66026-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-66026",
    storageBucket: "kwitterproject-66026.appspot.com",
    messagingSenderId: "950119354044",
    appId: "1:950119354044:web:4281c52a711893f2c7cab9",
    measurementId: "G-8S9DYCDZKR"
  };
function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

     window.location = "kwitter_room.html";
}

