# (Casi)CRUD con Ionic, Express y Sequelize

Este proyecto es una aplicación (casi)CRUD (Create, Read, Delete) que utiliza Ionic para la interfaz de usuario, Express como el servidor backend, y Sequelize como ORM para manejar la base de datos. La aplicación permite realizar operaciones CRUD sobre una base de datos MySQL, permitiendo gestionar usuarios o productos de una manera eficiente.

## Comenzando 🚀

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos 📋

Antes de instalar el software, asegúrate de tener lo siguiente instalado:

- [Node.js](https://nodejs.org/) (v14 o superior)
- [MySQL](https://www.mysql.com/) (v5.7 o superior)
- [Ionic CLI](https://ionicframework.com/docs/cli) (v6 o superior)
- [Git](https://git-scm.com/) (para clonar el repositorio)

Además, necesitarás un entorno configurado para trabajar con Sequelize y Express.

### Instalación 🔧

Sigue estos pasos para tener el entorno de desarrollo funcionando:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/tu-proyecto-crud.git
   cd tu-proyecto-crud
   ```

2. **Instala las dependencias del servidor y del cliente:**

   Primero, instala las dependencias del backend (Express):

   ```bash
   cd Books/backend
   npm install
   ```

   Luego, instala las dependencias del frontend (Ionic):

   ```bash
   cd ../myApp
   npm install
   ```

3. **Configura las variables de entorno:**

   Edita el archivo `db.connfig.js` en la carpeta `backend/config` con el siguiente contenido:

   ```
   HOST=localhost
   USER=root
   PASSWORD=tu_contraseña
   ```


5. **Inicia el servidor backend:**

   En la carpeta `backend`, ejecuta:

   ```bash
   npm start
   ```

6. **Inicia el servidor ionic:**

   En la carpeta `myApp`, ejecuta:

   ```bash
   ionic serve
   ```

   Esto abrirá la aplicación en tu navegador local.



### Finaliza con una demo

Una vez que el proyecto esté corriendo, puedes abrir la URL `http://localhost:8100` en tu navegador para interactuar con la aplicación. Registra nuevos usuarios, edítalos o elimínalos utilizando la interfaz.

### Acceso a los Endpoints 📬

Puedes acceder y probar los endpoints del backend utilizando la colección de Postman que hemos creado. Para obtener y probar los endpoints disponibles:

1. **Importa la colección de Postman**:  
   [Haz clic aquí para acceder a la colección de Postman](https://elements.getpostman.com/redirect?entityId=38969579-2abbc962-8517-4a4c-b44d-d4e313242692&entityType=collection)

2. **Ejemplo de Endpoints disponibles:**
   - `GET /api/books` - Lista todos los libros.
   - `POST /api/books` - Crea un nuevo libro.
   - `DELETE /api/books/:id` - Elimina un libro por ID.

   **Nota:** Asegúrate de tener el servidor backend corriendo en `http://localhost:3000` para poder probar los endpoints desde Postman.

## Construido con 🛠️

- [Ionic](https://ionicframework.com/) - El framework usado para la interfaz de usuario.
- [Express](https://expressjs.com/) - El framework web usado para el backend.
- [Sequelize](https://sequelize.org/) - ORM para manejar la base de datos.
- [MySQL](https://www.mysql.com/) - Base de datos usada.
