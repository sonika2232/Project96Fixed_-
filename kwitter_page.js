//YOUR FIREBASE LINKS

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

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
function send()
{
msg= document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value="";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
//End code
      } });  }); }
getData();
