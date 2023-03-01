# HW 05: Express | Integración

## **Duración estimada 🕒**

x minutos

<br />

---

## **Rick & Morty App**

### **INTRO**

En base a lo practicado en la homework Exercises, vamos a crear rutas con sus respectivas solicitudes HTTP que se van a ir guardando en un array que simulará nuestra base de datos. En esta homework consumiremos la información de la API de Rick & Morty que luego enviaremos a nuestro frontend.

<br />

---

### **👩‍💻 EJERCICIO 1**

### **Crear servidor con Express**

1. Instala la librería **`express`**.

2. Anteriormente habías creado tu servidor con Node puro en el archivo **`server.js`**, ahora lo cambiaremos para utilizar directamente el framework Express. Por lo que debes eliminar todo el contenido de este archivo.

3. Dentro del archivo **`server.js`** importa a `express` e incializa un nuevo servidor en el puerto 3001. Esta sería una forma de seguir buenas prácticas:

```javascript
const express = require('express');
const server = express();
const PORT = 3001;

server.lister(PORT, () => {
   console.log('Server raised in port ' + PORT);
});
```

😎 Acabas de crear tu servidor con Express!!

<br />

---

### **👩‍💻 EJERCICIO 2**

### **Reconstruyendo los controladores**

En este ejercicio recontruiremos nuestros dos controladores de modo que funcionen con express.

### **getCharByID**

Elimina todo lo que tienes en este archivo, y si estos pasos:

1. Guarda esta url en una constante llamada **`URL`**: "_https://rickandmortyapi.com/api/character/_".

2. Crea una función **`getChatById`** y expórtala. Recibe por parámetro a **`req`** y **`res`**. Luego crea una constante con el nombre **`params`** e iguálalo a **req.params**.

3. Haz una petición a la API, y recibe el personaje con el ID que obtuviste de params. Sólo necesitas las propiedades: **id**, **name**, **species**, **image** y **gender**.

4. En el caso de que salga todo OK, la ruta debe responder un JSON con la información del personaje.

5. Si hay un error debes responder con un status 500, y un JSON con la propiedad **`message`** de **error**.

</br>

### **getCharDetail**

1. En este caso debes repetir todo lo que hiciste en el controlador anterior, con la diferencia que esta vez debes agregar la propiedad **origin** de tu personaje.

<br />

---

### **👩‍💻 EJERCICIO 3**

### **Crear Rutas**

En la constante **app** ahora tenemos acceso a los métodos HTTP, vamos a necesitar para este ejercicio el método `get` y traer información. Este método recibe dos argumentos: el endpoint (path) y una función callback. Esta función callback recibe dos parámetros: **`req`** y **`res`**.

Dirígete a la carpeta **routes** y crea un archivo llamado **`index.js`**. En este archivo deberás:

1. importar mediante destructuring la función **`Router`** de **express**.

2. importa los dos controlladores que hemos creado en la homewrok anterior: **`getCharById`** y **`getCharDetail`**.

3. Debajo de esto crea una constante con el nombre **`router`** e iguálalo de la siguiente manear con la función **`Router`** ejecutada:

```javascript
const router = Router();
```

4. Ahora crearemos nuestras primeras dos rutas de express. Para esto, a partir de la constante **`router`**, llama al método **get**. Este método debe recibir dos argumentos. El primero será el path de la ruta, que en este caso es "_/onsearch/:id_". El segundo argumento será la función **`getCharById`**.

5. Ahora haremos lo mismo con detail. A partir de **`router`** llama al método **get**. Como primer parámetro le pasaras el path "_/detail/:id_". El segundo argumento será la función **`getCharDetail`**.

6. Por último exporta a la constante **`router`**.

7. Importa este **`router`** dentro del archivo **`server`**. Crea un middleware que tenga como parámetro a la variable **`express`** siendo ejecutado por el método **json**. Crea otro middleware que como primer argumento le pases el path "_/_", y como segundo el router.

<br />

---

### **👩‍💻 EJERCICIO 3**

## **Ruta Fav**

Dentro de tu carpeta **`util`** simularemos una base de datos, que en este caso será un arreglo. Para esto crea un archivo que se llame **`favs`**. Dentro de él crea y exporta un arreglo vacío.

1. Crea la ruta **POST/`rickandmorty`/fav**, la cual recibe un personaje por **`req.body`**. A este personaje lo deberás pushear dentro de este arreglo.

2. Crea la ruta **GET/`rickandmorty`/fav**, la cual debe obtener todos los personajes guardados en el arreglo **`favs`**.

3. Crea la ruta **DELETE/`rickandmorty`/fav/:id**, que elimine el personaje en el arreglo **fav** a partir del **id** que recibe por parámetro.

<br />

---

### **👩‍💻 EJERCICIO 4**

### **Conectar rutas con frontend**

Por último, recordemos que en el front habíamos configurado la ruta para que consuma los datos desde nuestro servidor.

Ahora dirígete a la carpeta **front** y haz los siguientes cambios:

1. En el componente Detail donde llamamos a la API de Rick & Morty en la ruta **https://rickandmortyapi.com/api/character/** cámbiala por la ruta que creamos en el back: **http://localhost:3001/rickandmorty/detail**

2. En la action para agregar favorito, ahora debes enviar los personajes al endpoint **http://localhost:3001/rickandmorty/fav** con el método `post`.

3. En la action para eliminar favorito, ahora debes enviar el personaje a eliminar al endpoint **http://localhost:3001/rickandmorty/fav** con el método `delete`.

✨✨Llegamos al final de esta homework creamos nuestro servidor y tres rutas para nuestro front!! 🚀🚀
