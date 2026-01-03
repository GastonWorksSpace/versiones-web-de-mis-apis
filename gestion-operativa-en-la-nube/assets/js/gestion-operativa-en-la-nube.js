// importa los objetos que contienen la api 2 y la 3
import api2 from "./api-2.js";
import api3 from "./api-3.js";
import api4 from "./api-4.js";
// importa la clase  usada para crear la estructura que tendra el contenido a mostrar
import {ContenidoPagina} from"./main.js";
// importa la funcion para cargar el contenido de la pagina segun el valor en la url
import {cargarContenido} from "./main.js";



//Selecciona el <div> que tendra el contenido de las apis 
const contenidoApi = document.getElementById("contenidoApis");


const inicio = new ContenidoPagina ( {  
  contenido1:`<section class="home">
               
    <h1 class ="titulo-de-materia"> Gestion operativa en la nube</h1>
    
        <div class="contenido">
            <p> En este escrito se dejan disponibles las respuestas de las APIs visibles desde esta misma pagina (usando la arquitectura SPA)</p>
        </div>
    
    </section> `,  

   contenido2:`<article>
   <div class="box-links-de-api">
     <h2> Descargar APIs</h2>
     <div>
       <i class="fa-solid fa-file-arrow-down"> </i>
       <a  id ="api-2-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/1IvCTwaAItjeSXRbBL8b61-5s_D6W0eaI/view?usp=drive_link"> GastonMelzi-APIM2</a>
     </div>
     <div> 
       <i class="fa-solid fa-file-arrow-down"> </i>
       <a id="api-3-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/114usn_Ci0rbJ0gAcSALivkDF0Z9td0Ax/view?usp=drive_link"> GastonMelzi-APIM3 </a> 
       
     </div>
     <div>
       <i class="fa-solid fa-file-arrow-down"> </i>
       <a class="api-4-gestion-operativa-en-la-nube" href="https://drive.google.com/file/d/1Kpt5zvSPxyfPtXsZ0q-Hb6_pBAXAiUM1/view?usp=sharing"> GastonMelzi-APIM4 </a>
     </div>
                        
    </div>
    </article>`})
// se pone cargar contenido dentro de una funcion asi puedo llamarla n veces sin tener que ponerle nuevamente los parametros 
function render() {
  
//carga el contenido de la pagina usando la funcion cargarContenido() de main.js
cargarContenido( "#inicio","#api-2", "#api-3","#api-4", inicio, api2, api3,api4,contenidoApi);
};

// Ejecutar al cargar la página 
document.addEventListener("DOMContentLoaded", render); 
// Ejecutar cada vez que cambie el hash 
window.addEventListener("hashchange", render);


