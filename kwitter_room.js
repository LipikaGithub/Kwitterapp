
var firebaseConfig = {
  apiKey: "AIzaSyCUpsvuAU1xLlgE-KoyFNtN4u8r5xoL37w",
  authDomain: "kwitter-3247e.firebaseapp.com",
  databaseURL: "https://kwitter-3247e-default-rtdb.firebaseio.com",
  projectId: "kwitter-3247e",
  storageBucket: "kwitter-3247e.appspot.com",
  messagingSenderId: "717377717546",
  appId: "1:717377717546:web:9173aab8244e22350a0a53",
  measurementId: "G-JR6E19PDH4"
};

var app = initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
