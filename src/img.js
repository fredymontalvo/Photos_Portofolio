const navBar = document.querySelector('.main-header')
const imagenes = document.querySelectorAll('.img-gallery');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.image-light');


imagenes.forEach(imagen => {
  imagen.addEventListener('click', () => {
    aparecerImagen(imagen.getAttribute('src'));
  });
 console.log(imagen);
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target != imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("showImage");
    navBar.style.opacity = "1";
 } 
});


const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle('show');
  imagenesLight.classList.toggle('showImage');
  navBar.style.opacity = "0";
};

