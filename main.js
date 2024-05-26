function addUser(){
    user_name = document.getElementById("input").value;

    localStorage.setItem("user_name", user_name);
    
    window.location = "choose.html";
}