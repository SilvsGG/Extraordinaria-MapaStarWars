document.addEventListener("DOMContentLoaded", function () {
  // Mostrar animación fade-in (solo si existe)
  const fadeInElement = document.querySelector('.fade-in');
  if (fadeInElement) {
    fadeInElement.classList.add('show');
  }

  // Lógica de la página de identificación (index.html)
  const form = document.getElementById("idForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const rango = document.getElementById("rango").value;

      localStorage.setItem("nombre", nombre);
      localStorage.setItem("apellido", apellido);
      localStorage.setItem("rango", rango);

      window.location.href = "html/menu.html";
    });
  }

  // Lógica de la página del menú (menu.html)
  const nombreSpan = document.getElementById("nombreUsuario");
  const apellidoSpan = document.getElementById("apellidoUsuario");
  const rangoSpan = document.getElementById("rangoUsuario");

  if (nombreSpan && apellidoSpan && rangoSpan) {
    const nombre = localStorage.getItem("nombre") || "Desconocido";
    const apellido = localStorage.getItem("apellido") || "Desconocido";
    const rango = localStorage.getItem("rango") || "Sin rango";

    nombreSpan.textContent = nombre;
    apellidoSpan.textContent = apellido;
    rangoSpan.textContent = rango;
  }
});

