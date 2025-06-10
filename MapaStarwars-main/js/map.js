// Redirige al planeta correspondiente
function redirectToPlanet(planetId) {
  window.location.href = `html/planet.html?id=${planetId}`;
}

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const planetImages = document.querySelectorAll('.planet-img');
  const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const bg = document.getElementById('galactic-bg');

  // Inicializar tooltips de Bootstrap
  tooltipElements.forEach(el => new bootstrap.Tooltip(el));

  // Efecto parallax del fondo
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px)`;
  });

  // Añadir clase fade-in para hacer aparecer los planetas con efecto
  setTimeout(() => {
    planetImages.forEach(img => {
      img.classList.add('fade-in');
    });
  }, 100); // Delay pequeño para asegurar que se vea el efecto
});
