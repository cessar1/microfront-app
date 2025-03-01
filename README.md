# Proyecto de Microfrontends con Personajes de Series

Este proyecto consiste en una aplicación web que muestra una lista de personajes de dos series diferentes (ejemplo: *Rick and Morty* y *Harry Potter*) usando microfrontends. Los personajes se presentan con su nombre y su imagen, y la visualización está disponible en dos idiomas: inglés y español.

## Estructura del Proyecto

El proyecto se divide en tres carpetas:

1. **host**: El proyecto principal que carga y gestiona los microfrontends.
2. **microApp1**: Microfrontend que muestra los personajes de *Rick and Morty*.
3. **microApp2**: Microfrontend que muestra los personajes de *Harry Potter*.

## Requisitos Técnicos

- **Microfrontends**: El proyecto utiliza microfrontends para cargar los componentes de las dos aplicaciones de manera independiente.
- **Cambio de Idioma**: El proyecto cuenta con una opción de cambio de idioma (inglés / español), que permite cambiar los textos de la página, incluyendo los nombres y descripciones de los personajes.

## Instrucciones de Ejecución

1. **Levantar el Proyecto Host**:
   - Navega a la carpeta `host`.
   - Ejecuta el siguiente comando para iniciar el servidor de desarrollo:
     ```bash
     yarn dev
     ```
   
2. **Construir los Microfrontends**:
   - Navega a las carpetas `microApp1` y `microApp2`.
   - Ejecuta los siguientes comandos para construir y previsualizar cada microfrontend:

     Para `microApp1`:
     ```bash
     yarn build
     yarn preview
     ```

     Para `microApp2`:
     ```bash
     yarn build
     yarn preview
     ```

3. **Acceder a la Aplicación**:
   Una vez que los microfrontends y el host estén levantados, puedes acceder a la aplicación a través de la URL proporcionada por el proyecto host.

## Tecnologías Utilizadas

- **React** para la creación de los componentes.
- **Vite** para la configuración y optimización de la construcción de los proyectos.
- **Styled-components** para el manejo de los estilos.
- **i18next** para la internacionalización y gestión de idiomas.
- **Microfrontends** para la separación de los microservicios.

## Notas

- Cada microfrontend es completamente independiente, lo que significa que puede ser desarrollado, probado e implementado por separado.
- El cambio de idioma está implementado usando **i18next** para traducir dinámicamente los textos según el idioma seleccionado.
