function resetForm() {
  document.getElementById("form").reset();
}

document.addEventListener("DOMContentLoaded", function() {
  const galleryPlus = document.querySelector('header .nav-bar ul li:nth-child(2) a');
  const subMenu = document.querySelector('header .nav-bar ul li:nth-child(2) ul');

  galleryPlus.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se siga al hacer clic

    // Alternar la clase 'show' en el submenú para mostrar u ocultar
    subMenu.classList.toggle('show');
  });
});
