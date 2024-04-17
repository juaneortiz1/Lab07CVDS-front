# Lab07: Desarrollo de Aplicaciones Web con Spring MVC y React

En este laboratorio, desarrollé una aplicación web utilizando Spring MVC para el backend y React para el frontend. La aplicación permite administrar información de empleados, como sus nombres, roles y salarios.

## Tecnologías Utilizadas

- **Spring MVC:** Framework de desarrollo web para Java.
- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Docker:** Plataforma de contenedores para facilitar la implementación y ejecución de la aplicación.
- **DBeaver:** Herramienta de gestión de bases de datos para interactuar con la base de datos PostgreSQL utilizada en el proyecto.

## Descripción del Proyecto

La aplicación consta de dos partes principales:

### Backend (Spring MVC)

El backend se desarrolló utilizando Spring MVC. Aquí se encuentran los controladores RESTful para manejar las operaciones CRUD (crear, leer, actualizar, eliminar) sobre los datos de los empleados. Se implementaron los siguientes endpoints:

- `/api/employees`: Para obtener todos los empleados y agregar nuevos empleados.
- `/api/employees/{id}`: Para obtener un empleado específico por su ID, actualizar o eliminar un empleado existente.

![image](https://github.com/juaneortiz1/Lab07CVDS-front/assets/97971732/55335259-71bc-453e-b83b-b8b6acb02fda)

Se configuró el backend para aceptar solicitudes CORS (Cross-Origin Resource Sharing) desde el frontend, lo que permitió la comunicación entre el frontend y el backend, que se ejecutan en diferentes dominios (localhost:3000 para el frontend y localhost:8080 para el backend).

![image](https://github.com/juaneortiz1/Lab07CVDS-front/assets/97971732/9e7d7eab-8ad3-4cae-b738-5a8f96571100)


### Frontend (React)

El frontend se desarrolló utilizando React. Se crearon componentes para mostrar la lista de empleados, agregar nuevos empleados, editar empleados existentes y eliminar empleados. Se utilizó Axios para realizar solicitudes HTTP al backend y actualizar dinámicamente la interfaz de usuario según las respuestas del servidor.

![image](https://github.com/juaneortiz1/Lab07CVDS-front/assets/97971732/27398fb5-84e6-4b36-9b8a-b766ce80d49c)

![image](https://github.com/juaneortiz1/Lab07CVDS-front/assets/97971732/cdf63b2a-9278-4319-876a-3995cebd5c98)


## Instrucciones de Ejecución

1. Clonar el repositorio del proyecto.
2. Ejecutar la base de datos PostgreSQL utilizando Docker.
3. Configurar la conexión a la base de datos en la aplicación Spring MVC.
4. Compilar y ejecutar la aplicación Spring MVC.
5. Instalar las dependencias del proyecto React y ejecutar la aplicación frontend.
6. Acceder a la aplicación desde un navegador web.



## Autor

Este proyecto fue desarrollado por Juan Esteban Ortiz Pastrana.

