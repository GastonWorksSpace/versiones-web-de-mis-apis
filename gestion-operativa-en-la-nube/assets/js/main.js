
// Abre los enlaces que estan al lado del icono de descargas en una nueva pestania al presionarlo
export const abrirLinksConIconos= (idDelContenedor) =>  {
  document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById(idDelContenedor);
    // Delegación de eventos: escucha clicks en todo el contenedor 
     contenedor.addEventListener("click", (e) => { 
     // Si el target es el ícono de descarga 
     if (e.target.matches("i.fa-solid.fa-file-arrow-down")) { 
       const enlace = e.target.nextElementSibling; // el <a> está justo después del <i> 
       if (enlace && enlace.tagName === "A") { window.open(enlace.href, "_blank"); } 
     }}); 
   });
   

  };




// Abre los enlaces de links-descarga-apis en una pestania a parte 
export const abrirLinksEnPestaniaAParte = (idDelContenedor) => {
  document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById(idDelContenedor);
    contenedor.addEventListener("click", (e) => {
      //si es una etiqueta <a> la que activo el evento abre el link en una pestania aparte
      if (e.target.tagName ==="A") {
        e.preventDefault();
        window.open(e.target.href, "_blank");
      }
    });
  })

}


// Clase para crear objetos que tendran el contenido de cada parte de la pagina 
// utiliza se utiliza Object.assing para crear atributos de forma dinamica sin necesidad de instanciarlos manualmente dentro de la clase
export class ContenidoPagina {
  constructor (contenidos = {}) {
  Object.assign(this,contenidos);
  }
  
}; 

// funcion para cargar el contenido segun la ruta 
 export function cargarContenido(rutas,contenedorAColocar) {
  const hash = window.location.hash || rutas.default;
  const pagina = rutas[hash];
  if(pagina) {
    
    
    contenedorAColocar.innerHTML = Object.values(pagina).join("");
  }
   else {
    contenedorAColocar.InnerHTML = "<h1>  Error 404 Perdon contenido que intentas acceder no fue encontrado/no existe </h1>";
  }
  console.log("Contenido a cargar:", pagina, "Contenedor donde estaria: ",contenedorAColocar);
 }



//Invocacion de las funciones 
abrirLinksConIconos("contenidoApis");


abrirLinksEnPestaniaAParte("contenidoApis");