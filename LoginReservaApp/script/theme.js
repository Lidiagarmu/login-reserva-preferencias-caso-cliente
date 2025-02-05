document.addEventListener("DOMContentLoaded", () => {
    const modoBtn = document.createElement("div");
    modoBtn.id = "modo-btn";
    document.body.appendChild(modoBtn);

    // Crear el contenedor del toggle
    Object.assign(modoBtn.style, {
        position: "fixed",
        top: "10px",
        right: "10px",
        width: "70px",
        height: "35px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        cursor: "pointer",
        backgroundColor: "#ddd",
        padding: "5px",
        transition: "background 0.3s ease-in-out",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden"
    });

    // Crear el círculo deslizante
    const toggleCircle = document.createElement("div");
    Object.assign(toggleCircle.style, {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        position: "relative",
        transition: "transform 0.3s ease-in-out"
    });
    modoBtn.appendChild(toggleCircle);

    // Crear iconos SVG
    const solSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

    const lunaSVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79z"></path></svg>`;

    toggleCircle.innerHTML = solSVG;

    // Función para actualizar el botón y el fondo
    const actualizarBoton = () => {
        if (document.body.classList.contains("dark-mode")) {
            toggleCircle.innerHTML = lunaSVG;
            modoBtn.style.backgroundColor = "#333";
            toggleCircle.style.transform = "translateX(35px)";
            document.body.style.backgroundColor = "#212529";
            document.body.style.color = "#f8f9fa";
            localStorage.setItem("theme", "dark");
        } else {
            toggleCircle.innerHTML = solSVG;
            modoBtn.style.backgroundColor = "#ddd";
            toggleCircle.style.transform = "translateX(0)";
            document.body.style.backgroundColor = "#f8f9fa";
            document.body.style.color = "#212529";
            localStorage.setItem("theme", "light");
        }
    };

    // Cargar el modo guardado
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
    actualizarBoton();

    // Evento de cambio de tema
    modoBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        actualizarBoton();
    });
});
