
const firebaseConfig = {
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push(
            {
                  name:user_name,
                  message:msg,
                  like:0
            }
      );
      document.getElementById("msg").value = "";

        
}
      } });  }); }
getData();
