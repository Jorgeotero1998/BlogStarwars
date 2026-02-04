# StarwarsBlog - Databank

Este proyecto es un Blog de Star Wars interactivo que consume datos de la API pública SWAPI.tech. Permite explorar personajes, planetas y vehículos del universo de Star Wars, ver sus detalles técnicos y gestionar una lista de favoritos.

This project is an interactive Star Wars Blog that consumes data from the SWAPI.tech public API. It allows users to explore characters, planets, and vehicles from the Star Wars universe, view technical specifications, and manage a favorites list.

## Características Técnicas / Technical Features
* **Consumo de API:** Uso de Fetch para obtener datos en tiempo real de personas, vehículos y planetas.
* **Arquitectura Flux:** Implementada con Context API para una gestión de estado global centralizada y eficiente.
* **Persistencia de Datos:** Uso de LocalStorage para almacenar favoritos y caché de detalles, optimizando la carga y evitando errores de límite de peticiones (429).
* **Buscador Inteligente:** Barra de búsqueda con autocompletado para acceso rápido a la base de datos.
* **Diseño Responsivo:** Interfaz construida con Bootstrap 5, optimizada para carruseles horizontales.
* **Sistema de Favoritos:** Agregar y eliminar elementos de una lista persistente.

* **API Consumption:** Use of Fetch API for real-time data retrieval of people, vehicles, and planets.
* **Flux Architecture:** Implemented with Context API for centralized and efficient global state management.
* **Data Persistence:** Use of LocalStorage to store favorites and details cache, optimizing performance and preventing rate limit errors (429).
* **Smart Search:** Search bar with autocomplete for quick database access.
* **Responsive Design:** Built with Bootstrap 5, optimized for horizontal scroll carousels.
* **Favorites System:** Add and remove items from a persistent list.

## Tecnologías Utilizadas / Technologies Used
* React.js
* React Router
* Context API (Flux)
* JavaScript (ES6+)
* Bootstrap 5
* HTML5 / CSS3

## Autor / Author
Este proyecto fue desarrollado por Jorge Otero, siguiendo los estándares de desarrollo de React y las especificaciones técnicas del Databank de Star Wars.

This project was developed by Jorge Otero, following React development standards and Star Wars Databank technical specifications.
