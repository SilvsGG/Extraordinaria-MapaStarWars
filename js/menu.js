 document.addEventListener('DOMContentLoaded', () => {
      let rango = localStorage.getItem('rango') || 'Oficial';
      rango = rango.charAt(0).toUpperCase() + rango.slice(1).toLowerCase();
      const apellido = localStorage.getItem('apellido') || 'Desconocido';

      document.getElementById('rango').textContent = rango;
      document.getElementById('apellido').textContent = apellido;
    });