// importa la clase  usada para crear la estructura que tendra el contenido a mostrar
import {ContenidoPagina} from"./main.js";
// importa la funcion para cargar el contenido de la pagina segun el valor en la url
import {cargarContenido} from "./main.js";


 export const paginaNoEncontrada = new ContenidoPagina ({
  contenido1: `<h1> ERROR 404</h1> 
   <h2> El contenido que quieres acceder no existe u no lo encuentro :(</h2>
   <h3>Mientras te dejo este juego para entretenerte mientras tanto </h3>`,

});


