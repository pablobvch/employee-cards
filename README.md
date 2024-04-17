# Proyecto de Consulta de Legajo de Empleado

Este proyecto es una aplicación web desarrollada con [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) y [TypeScript](https://www.typescriptlang.org/), diseñada para consultar el legajo de un empleado ingresando su DNI. La aplicación incluye una interfaz de usuario para la entrada del DNI, un botón de consulta y limpieza, y muestra los datos del empleado (nombre completo, nacimiento, NRO de legajo) si el DNI coincide con alguno de los empleados simulados.

## Estructura del Proyecto

El proyecto está estructurado de manera ordenada, siguiendo las mejores prácticas para una aplicación Next.js. Los archivos y directorios están organizados de manera clara y lógica, facilitando la navegación y el mantenimiento del código.

## Tecnologías Utilizadas

- **Next.js**: Utilizado para la creación de la aplicación web, aprovechando su enrutamiento basado en archivos y su soporte para TypeScript.
- **Tailwind CSS**: Para el diseño y estilización de la interfaz de usuario, proporcionando una experiencia de usuario moderna y responsiva.
- **TypeScript**: Para escribir código JavaScript con tipos estáticos, mejorando la calidad del código y facilitando el mantenimiento.

## Pruebas

El proyecto incluye pruebas unitarias realizadas con Jest y React Testing Library. Estas pruebas aseguran la funcionalidad (limitada a 2 archivos de tests) de los componentes y la lógica de la aplicación.

## Mock de Datos

Se utiliza un mock para simular los datos de los empleados, permitiendo probar la funcionalidad de la aplicación sin necesidad de una base de datos real.

## Validación del DNI

Se han agregado validaciones para el DNI, asegurando que contenga al menos 7 caracteres, simulando los DNIs actuales en Argentina. En caso de que el DNI ingresado no coincida con ninguno de los empleados simulados, se mostrará un mensaje de error.

## Loader

Se ha implementado un loader que se activa al momento de iniciar la búsqueda y se oculta cuando la misma finaliza. Aunque el tiempo de respuesta de la aplicación es muy rápido, en escenarios reales, este loader enriquece la experiencia de usuario al proporcionar retroalimentación visual sobre el estado de la búsqueda.

## Primeros Pasos

Para comenzar a trabajar en este tipo de proyectos, se suelen seguir los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias ejecutando `npm install` o `yarn install`.
3. Inicia el servidor de desarrollo ejecutando `npm run dev` o `yarn dev`.
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

En este caso puntual, al visualizarlo desde stackblitz los mismos no seran necesarios y se podra ver la app corriendo en el panel derecho de la pantalla.

## Pruebas

Para ejecutar las pruebas unitarias, utiliza el comando `npm test` o `yarn test` desde el terminal.
