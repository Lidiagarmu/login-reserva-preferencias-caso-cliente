## Aplicación de Login y Reserva de CitasEsta

Es una aplicación web sencilla que permite a los usuarios iniciar sesión y realizar reservas de citas. La interfaz incluye soporte para modo oscuro y validaciones de formulario.

## Tecnologías UtilizadasHTML: Estructura de la aplicación.

CSS: Estilos y soporte para modo oscuro.
JavaScript: Lógica de autenticación, reservas y gestión del modo oscuro.
Bootstrap: Estilos y diseño responsivo.

## Características Principales

Inicio de sesión con usuarios predefinidos.
Modo oscuro configurable y persistente.
Formulario de reserva de citas con validación de fechas.
Cierre de sesión con eliminación de datos en localStorage.

## Instalación y Uso Clona este repositorio en tu equipo:

git clone https://github.com/tu-usuario/tu-repo.gitAbre el archivo index.html en un navegador.

## Inicia sesión con uno de los siguientes usuarios predefinidos:

Usuario: Lidia | Contraseña: 000
Usuario: Ana | Contraseña: 111
Usuario: Fran | Contraseña: 222

Tras el inicio de sesión, serás redirigido al dashboard.html, donde podrás cambiar al modo oscuro y realizar una reserva.

Para cerrar sesión, presiona el botón Cerrar sesión.

## Estructura del Proyectoproject-root/

│── index.html # Página de login
│── dashboard.html # Página principal tras login
│── assets/
│ ├── css/
│ │ ├── styles.css # Estilos generales y modo oscuro
│── script/
│ ├── auth.js # Lógica de autenticación
│ ├── theme.js # Modo oscuro
│ ├── reserva.js # Gestión de reservas
│ ├── logout.js # Cierre de sesión
│── data/
│ ├── users.js # Usuarios predefinidos

## Detalles Técnicos

- Modo OscuroSe activa/desactiva mediante un botón de alternancia.
- Se almacena la preferencia del usuario en localStorage para persistencia.
- Formulario de ReservaSe validan los campos de entrada.
- No se permite seleccionar fechas pasadas.
- Muestra una alerta con los detalles de la reserva confirmada.
- Autenticación. Se comparan los datos ingresados con una lista predefinida de usuarios.
- Si el usuario y contraseña coinciden, se almacena en localStorage y se redirige al dashboard.html.
- Si no hay usuario autenticado, se impide el acceso al dashboard.html y se redirige al login.
