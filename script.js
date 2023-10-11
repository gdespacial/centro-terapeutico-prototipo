// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const menuToggler = document.getElementById("menu-toggler");
    const allLinks = document.querySelectorAll(".all-links a");
  
    // Agrega un controlador de eventos al menú hamburguesa para cerrarlo
    menuToggler.addEventListener("change", function () {
      if (!menuToggler.checked) {
        // Cierra el menú al desmarcar el interruptor
        menuToggler.checked = false;
      }
    });
  
    // Agrega controladores de eventos a los enlaces para cerrar el menú al hacer clic
    allLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        // Cierra el menú al hacer clic en un enlace
        menuToggler.checked = false;
      });
    });
  });


  