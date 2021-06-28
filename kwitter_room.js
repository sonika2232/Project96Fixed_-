
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDT8xiLylyDveT4noUdr2Vl0QU6-ncBat0",
      authDomain: "class-93-27c10.firebaseapp.com",
      databaseURL: "https://class-93-27c10-default-rtdb.firebaseio.com",
      projectId: "class-93-27c10",
      storageBucket: "class-93-27c10.appspot.com",
      messagingSenderId: "797672071130",
      appId: "1:797672071130:web:a1338dc0e6bf69a4712ae3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

        user_name = localStorage.getItem("user_name");

       document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

       //Start code
       function addRoom()
       {
       room_name= document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
       }

       function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
       console.log("roomname"+ Room_names);

       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
