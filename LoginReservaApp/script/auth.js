// guarda el usuario y redirige a dashboard.html tras login.


import users from "../data/users.js";

document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert(`Bienvenid@, ${username}!`);
        localStorage.setItem("loggedUser", username);  // Guarda usuario en localStorage
        window.location.href = "dashboard.html";  // Redirige a dashboard
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// Redirigir si NO hay usuario logueado
if (window.location.pathname.includes("dashboard.html") && !localStorage.getItem("loggedUser")) {
    alert("Debes iniciar sesión primero.");
    window.location.href = "index.html"; // Lo manda al login
}


