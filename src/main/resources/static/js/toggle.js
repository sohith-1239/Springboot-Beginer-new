currentUserIndex=0;
var userArray=[{"name":"john Doe","gender":"Male","image":"images/john_doe.png"},
    {"name":"jane Doe","gender":"Female","image":"images/jane_doe.png"}];
    function toggleUser(){
        currentUserIndex=1-currentUserIndex;
        var nextUser=userArray[currentUserIndex];
        displayUser(nextUser);
    }
    function displayUser(user) {
        document.getElementById("userImage").src=user.image;
        document.getElementById("userName").textContent=user.name;
        document.getElementById("userGender").textContent=user.gender;
    }
