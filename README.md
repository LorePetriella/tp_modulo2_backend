# tp_modulo2_backend
## Desafío Integrador - Módulo 2


Esta aplicación permite acceder a una base de datos de libros y realizar distintas consultas según los parámetros proporcionados por el usuario al llamar al archivo `index.js`.

## Contenido del Repositorio

El repositorio contiene cuatro archivos principales:

- `aux_function.js`: Contiene una función para procesar los argumentos pasados por la línea de comandos.
- `books.js`: Define la lógica de las funciones para manipular la base de datos de libros.
- `DB.js`: Contiene la base de datos de libros en forma de una colección de objetos.
- `index.js`: Recibe y procesa los parámetros desde la terminal, utilizando las funciones definidas en `books.js`.

## Estructura de la Base de Datos (DB.js)

La base de datos `DB.js` contiene una colección de objetos, donde cada objeto representa un libro y tiene la siguiente estructura:
```
{
  id: 0, // Identificador único
  name: "Demian", // Nombre del libro
  author: "Herman Hesse", // Nombre del autor
  tags: ["Drama", "Historia", "Psicología"], // Lista de etiquetas
  sold: 320 // Unidades vendidas
}
```


## Funciones Disponibles (books.js)

El archivo `books.js` proporciona las siguientes funciones para interactuar con la base de datos:

- `getAll()`: Devuelve un array con todos los libros.
- `getById(id)`: Devuelve el libro cuyo ID coincide con el proporcionado.
- `getByName(name)`: Devuelve los libros cuyo nombre contiene la cadena proporcionada.
- `getByTag(tag)`: Devuelve los libros que contienen la etiqueta proporcionada.
- `getByAuthor(author)`: Devuelve los libros cuyo autor coincide con el proporcionado.
- `getSoldByAuthor(author)`: Devuelve la cantidad total de libros vendidos por el autor proporcionado.

## Uso de la Aplicación (index.js)

Para utilizar la aplicación, sigue los siguientes pasos:

1. Abrir una terminal en el directorio del proyecto.
2. Ejecutar el archivo `index.js` utilizando Node.js y proporciona los parámetros según la consulta deseada. Por ejemplo:

```
node index.js                   # Devuelve todos los libros.
node index.js -id 2            # Devuelve el libro con ID "2".
node index.js -name viaje      # Devuelve los libros cuyo nombre incluye "viaje".
node index.js -author jul      # Devuelve los libros cuyo autor incluye "jul".
node index.js -tag drama       # Devuelve los libros con la etiqueta "drama".
node index.js -sold julio_verne  # Devuelve la cantidad de libros vendidos por "julio verne".
```

**<span style="color:red">¡IMPORTANTE!</span>**

- <span style="color:red">Los nombres de autor y las etiquetas deben ingresarse con guiones bajos entre los términos, por ejemplo: julio_verne, ciencia_ficción.</span>
- <span style="color:red">El nombre de la propiedad que se intenta conocer debe estar antecedida por un guión medio.</span>



Si se ingresan parámetros incorrectos, se imprimirá un mensaje de error.






