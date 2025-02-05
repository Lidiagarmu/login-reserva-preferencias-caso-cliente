// borra al usuario y vuelve al login

document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
});


