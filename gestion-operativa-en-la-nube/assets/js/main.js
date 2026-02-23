document.addEventListener("DOMContentLoaded", () => {
    //Selecciona los contenedores que tienen los enlaces
  const contenedor = document.querySelectorAll(".box-links-de-api");

  
  // Recorre todos los <div> que contiene los enlaces
contenedor.forEach(boxLinkApi => {
  // Selecciona todos los <div> internos que contienen ícono + enlace
  const bloques = boxLinkApi.querySelectorAll("div");
    
bloques.forEach(bloque => {
    const icono = bloque.querySelector("i.fa-solid.fa-file-arrow-down");
    const enlace = bloque.querySelector("a");

    if (icono && enlace) {
      icono.addEventListener("click", () => {
        window.open(enlace.href, "_blank");
      });
    }
  });
    
})
 
});


// Clase para crear objetos que tendran el contenido de cada parte de la pagina 
export class ContenidoPagina {
  constructor ({contenido1 = "",contenido2 ="",contenido3 = "",contenido4 = ""}) {
  this.contenido1 = contenido1
  this.contenido2 = contenido2
  this.contenido3 = contenido3
  this.contenido4 = contenido4
  
  }
  
}; 

// funcion para cargar el contenido segun la ruta 
 export function cargarContenido(nombreRuta1,nombreRuta2,nombreRuta3,nombreRuta4,paginaADirigir1,paginaAdirigir2,paginaAdirigir3, paginaADirigir4,contenedorAColocar) {
  const hash = window.location.hash;
  //cargar el contenido correspondiente a la ruta 
  if(hash === nombreRuta1 || hash == "") {
      contenedorAColocar.innerHTML = [paginaADirigir1.contenido1,paginaADirigir1.contenido2,paginaADirigir1.contenido3].join("");
  } else if (hash === nombreRuta2 ) {
      contenedorAColocar.innerHTML = [paginaAdirigir2.contenido1, paginaAdirigir2.contenido2, paginaAdirigir2.contenido3, paginaAdirigir2.contenido4].join("");
  } else if(hash === nombreRuta3) {
      contenedorAColocar.innerHTML = [paginaAdirigir3.contenido1, paginaAdirigir3.contenido2, paginaAdirigir3.contenido3, paginaAdirigir3.contenido4].join("");
  }  else if (hash == nombreRuta4) {
    contenedorAColocar.innerHTML = [paginaADirigir4.contenido1, paginaADirigir4.contenido2, paginaADirigir4.contenido3, paginaADirigir4.contenido4].join("");
  }

  else {
      contenedorAColocar.innerHTML = "<h1> Perdon contenido no encontrado</h1>";
  }

}
