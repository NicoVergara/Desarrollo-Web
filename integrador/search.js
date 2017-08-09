/**
 * 1. Seleccionar los elementos que vamos a utilizar:
 *    a. Formulario de búsqueda
 *    b. Input de búsqueda
 *    c. Botón de búsqueda
 *    d. Contenedor
 * Agregar los elementos que faltan!
 * Usar cualquiera de los selectores que vimos en clase:
 * 1 elemento = document.querySelector('selector');
 * 1 elemento = document.getElementById('id');
 * Lista      = document.querySelectorAll('selector');
 * Lista      = document.getElementsByTagName('tag');
 * Lista      = document.getElementsByClassName('clase');
 */
var formulario = document.querySelector('.nav-search');
var contenido = document.querySelector('.nav-main-content');

/**
 * 2. Escuchar cuando el usuario hace una búsqueda. Podemos
 *    escuchar el evento `submit` del formulario, o el evento
 *    `click` del botón.
 */


/**
 * 3. En el listener que agregamos recién, tomar el valor del
 *    input de búsqueda (lo que el usuario escribió).
 */

/**
  * 4. Una vez que tenemos el `query` de la búsqueda, ejecutamos
  *    una llamada Ajax para pedir los datos de la API de Mercado
  *    Libre. Usamos el método GET y usamos esta URL:
  *    https://api.mercadolibre.com/sites/MLA/search?q=query
  *    Donde `query` es lo que ingreso el usuario.
  */

/**
 * 5. El usuario puede escribir básicamente cualquier cosa!
 *    Tenemos que asegurarnos que esté en formato aceptable para
 *    poder mandarlo como parámetro de query string. Para eso, 
 *    encodeamos el valor del campo con encodeURIComponent(valor);
 *    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/encodeURIComponent
 */

/**
 * 6. Queremos mostrar los resultados de la búsqueda! Recuerden
 *    que el valor viene en formato JSON! Luego tomamos de la
 *    respuesta de la llamada Ajax, la propiedad
 *    `results`. Guardamos este valor en una variable.
 */

/**
 * 7. `results` es un array de objetos. Podemos recorrer el array
 *    y hacer algo con cada resultado.
 */

/**
 * 8. De cada resultado, queremos tomar la siguiente información
 *    para mostrarla:
 *    a. `title`
 *    b. `price`
 *    c. `permalink`
 *    d. `thumbnail`
 */

/**
 * 9. Armar (con Javascript :P) la siguiente estructura HTML por
 *    cada resultado de búsqueda:
 *    <a href="resultado.permalink">
 *      <img src="resultado.thumbnail">
 *      <h3>resultado.title</h3>
 *      <strong>resultado.price</strong>
 *    </a>
 */

/**
 * 10. Insertar cada resultado en nuestro contenido
 */