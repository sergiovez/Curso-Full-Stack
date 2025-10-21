console.log("Empezamos con la correccion")
// 1.Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
let primerParrafo = document.querySelector('p')
//primerParrafo.textContent = "hola que tal"

// 2.Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
let enlaces = primerParrafo.getElementsByTagName('a')
//enlaces[1].setAttribute("href", "https://www.google.com")

// 3.Selecciona el penúltimo hijo de una etiqueta con el id "milista"
let miLista = document.getElementById("milista")
console.log(miLista)
let hijoMilista = miLista.children
console.log(hijoMilista)
let penultimoHijoMilista = hijoMilista[hijoMilista.length-2]
console.log(penultimoHijoMilista)

// 4.Desactiva el atributo class del último p de la página
let parrafos = document.getElementsByTagName('p')
parrafos[parrafos.length-1].removeAttribute("class")

// 5.Crea un elemento h3 e insertalo al final del body
let newH3 = document.createElement("h3")
newH3.textContent = 'hola soy un h3'
document.body.appendChild(newH3)

// 6.Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
let newSpan = document.createElement("span")
newSpan.textContent = 'soy nuevo'
newH3.appendChild(newSpan)

// 7.Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
let segundoP = parrafos[2]
let newA = document.createElement('a')
newA.textContent = 'aqui'
newA.setAttribute('href', 'https://google.com')
segundoP.appendChild(newA)

// 8.Comprueba que todos los p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
let parrafosDiv = document.querySelectorAll('div.hero p')
for (let p of parrafosDiv){
    if (p.hasAttribute("class")){
        p.remove()
    }
}

// 9.Selecciona el último nodo hijo de body
let ultimoHijoBody = document.body.lastElementChild

// 10.Selecciona el siguiente elemento hermano del primer p
let parrafos = document.getElementsByTagName('p')
let primerParrafo = parrafos[0]
let siguienteHermano = primerParrafo.nextElementSibling

// 11.Borra el último elemento de body
document.body.lastElementChild.remove()

// 12.Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame  a "cambiado"
let imagenes = document.getElementsByTagName('img')
for (let img of imagenes){
    if (img.getAttribute('src')==='cambiame'){
        img.setAttribute('src', 'cambiado')
    }
}

// 13.Dale la clase "claseejemplo" al primer p
let parrafos = document.getElementsByTagName('p')
let primerParrafo = parrafos[0]
primerParrafo.className = "claseejemplo"

// 13.1.Añade la clase "claseejemplo" al primer p
let parrafos = document.getElementsByTagName('p')
let primerParrafo = parrafos[0]
primerParrafo.classList.add("claseejemplo")

// 14.Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
let listas = document.getElementsByTagName('ul')

for (let lis of listas){
    if (lis.children.length === 2){
        let tercerLi = document.createElement('li')
        tercerLi.textContent = 'tercer elemento'
        lis.appendChild(tercerLi)
    }
}

// 15.Selecciona el padre del primer p
let primerP = document.getElementsByTagName('p')[0]
let padrePrimerP = primerP.parentElement

// 16.Selecciona el hermano anterior del primer p
let primerP = document.getElementsByTagName('p')[0]
let hermanoAnteriorP = primerP.previousElementSibling

// 17.Selecciona el primer div con clase "container" y modifica su background-color a red
let divContainer = document.querySelector('div.container')
divContainer.style.backgroundColor = "red"

// 18.Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
let pTexto = document.querySelector('p#text')
pTexto.innerHTML = '<a href="google.com">Google</a>'

// 19.Selecciona los div con clase "eustakio"
let divEustakio = document.querySelectorAll('div.eustakio')

// 20.Selecciona el párrafos que un ID con valor "paisa"
let pPaisa = document.querySelectorAll('p#paisa')

// 21.Selecciona el primer párrafo hijo de un div
let primerP = document.querySelector('div > p:first-child')

// 22.Selecciona el penúltimo enlace de las página.
let enlances = document.getElementsByTagName('a')
let penultimoEnlace = enlace[enlaces.length-2]

// 23.Selecciona el antepenúltimo párrafo de los div y añádele la clase "portatil" si no la tiene, y en caso de tenerla, que la elimine.
let div = document.querySelectorAll('div p')
let antepenultimoParrafo = div[div.length-3]
antepenultimoParrafo.classList.toggle('portatil')

// 24.Selecciona el padre de del primer li de la página
let primerLi = document.querySelector('li')
let padrePrimerLi = primerLi.parentElement

// 25.Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
let listasOrdenadas = document.getElementsByTagName('ol')
for (let ol of listasOrdenadas){
    if (ol.length === 2){
        let nuevoLi = document.createElement('li')
        ol.insertBefore(nuevoLi, ol.children[1])
    }
}

// 26.Añade el atributo class con valor azul al último elemento p
let parrafos = document.getElementsByTagName('p')
let ultimoParrafo = parrafos[parrafos.length - 1]
ultimoParrafo.classList.add('azul')


// 27.Comprueba los elementos div que tengan el atributo class, si lo tiene se debe añadir el valor container, y si no lo tiene no se hace nada.
let divs = document.querySelectorAll('div[class]')
for (let div of divs){
  div.classList.add('container')
}

// 28.Obtén el valor del atributo alt de la última imagen
let imagenes = document.getElementsByName('img')
let ultimaImagen = imagenes[imagenes.length-1]
ultimaImagen.getAttribute('alt')

// 29.Suponiendo que tenemos Hola. Obtén los valores de los atributos y los imprimes por pantalla uno por uno.
let elemento = document.getElementById('ejemplo')
for (let atr of elemento.getAttribute){
  console.log(`${attr.name}: ${attr.value}`);
}

/* 30.Si tenemos lo siguiente, modifica el estilo para que el font-size sea de 40px, el color sea naranja y el texto se alinee a la derecha.
  h1{
    font-size: 20px;
    color: red;
    text-align: center;
  }*/
let h1 = document.querySelector('h1');
h1.style.fontSize = '40px';
h1.style.color = 'orange';
h1.style.textAlign = 'right';

/* 31.Suponiendo que tenemos el siguiente código. Añade debajo un tercer p que diga "soy el tres";
  <div id="parrafos">
    <p>hola soy el uno</p>
    <p>hola soy el dos</p>
  </div>*/
let contenedor = document.getElementById('parrafos');
let nuevoP = document.createElement('p');
nuevoP.textContent = 'soy el tres';
contenedor.appendChild(nuevoP);

// 32.Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto "hola yo soy el uno y medio".
let nuevoPMedio = document.createElement('p');
nuevoPMedio.textContent = 'hola yo soy el uno y medio';
let segundoP = contenedor.children[1];
contenedor.insertBefore(nuevoPMedio, segundoP);

// 33.Añade un nuevo elemento a una lista de modo que ocupe la primera posición.
let lista = document.querySelector('ul');
let nuevoLi = document.createElement('li');
nuevoLi.textContent = 'primer elemento';
lista.insertBefore(nuevoLi, lista.firstElementChild);

// 34.Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.
let elemento = document.querySelector('.class');
if (elemento) {
  elemento.remove();
}

// 35.Convierte el primer elemento de una lista en un enlace.
let primerLi = document.querySelector('li');
let enlace = document.createElement('a');
enlace.href = '#';
enlace.textContent = primerLi.textContent;
primerLi.textContent = ''; // Limpiar
primerLi.appendChild(enlace);

// 36.Borra el atributo title de todas las imágenes con la clase 'img'.
let imgs = document.querySelectorAll('img.img');
for (let img of imgs) {
  img.removeAttribute('title');
}

// 37.Añade un punto final al texto contenido por las etiquetas p.
let parrafos = document.getElementsByTagName('p');
for (let p of parrafos) {
  if (!p.textContent.trim().endsWith('.')) {
    p.textContent += '.';
  }
}

// 38.De un conjunto de etiquetas article hijos de un section con la clase 'products', selecciona aquellos que tengan la clase 'oferta' y establece el valor de su atributo data-iva a cero
let articulos = document.querySelectorAll('section.products > article.oferta');
for (let art of articulos) {
  art.setAttribute('data-iva', '0');
}

// 39.Añade el texto "Modificado" al tercer li de todos los ul
let listasUl = document.querySelectorAll('ul');
for (let ul of listasUl) {
  if (ul.children.length >= 3) {
    ul.children[2].textContent += ' Modificado';
  }
}

// 40.Incluye la clase porelasterisco en todos los p que tengan la clase preparado
let parrafos = document.querySelectorAll('p.preparado');
for (let p of parrafos) {
  p.classList.add('porelasterisco');
}

// 41.Inserta un div con la clase pepaino y cuyo border sea rojo, con dos etiquetas hijas p, en las que el primer párrafo sea la clase del div y el segundo párrafo sea el color del border.
let nuevoDiv = document.createElement('div');
nuevoDiv.className = 'pepaino';
nuevoDiv.style.border = '1px solid red';

let p1 = document.createElement('p');
p1.textContent = nuevoDiv.className;

let p2 = document.createElement('p');
p2.textContent = 'red';

nuevoDiv.appendChild(p1);
nuevoDiv.appendChild(p2);
document.body.appendChild(nuevoDiv);

// 42.De las listas no ordenadas, selecciona el primer y último hijo "li" y sus hermanos anteriores o posteriores y cambiales el color a rojo
let uls = document.querySelectorAll('ul');
for (let ul of uls) {
  let primerLi = ul.firstElementChild;
  let ultimoLi = ul.lastElementChild;
  if (primerLi) primerLi.style.color = 'red';
  if (ultimoLi) ultimoLi.style.color = 'red';
  if (primerLi.nextElementSibling) primerLi.nextElementSibling.style.color = 'red';
  if (ultimoLi.previousElementSibling) ultimoLi.previousElementSibling.style.color = 'red';
}

// 43.Seleccionar los span que sean hijos de un "p" cuyo padre del elemento "p" sea un div con la clase "padre"y cambia los estilos del div poniendo un color de fondo azul
let divsPadre = document.querySelectorAll('div.padre');
for (let div of divsPadre) {
  let spans = div.querySelectorAll('p > span');
  if (spans.length > 0) {
    div.style.backgroundColor = 'blue';
  }
}
