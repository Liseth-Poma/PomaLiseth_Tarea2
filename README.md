# PomaLiseth_Tarea2
Chat en Tiempo Real con Sockets
Nombre Completo del Estudiante
Juan Pérez

Fecha de Entrega
30 de mayo de 2025

Introducción
Este proyecto tiene como objetivo implementar un chat en tiempo real utilizando sockets. La importancia del uso de sockets radica en la capacidad de establecer una comunicación bidireccional entre el cliente y el servidor, permitiendo la transmisión de mensajes en tiempo real sin necesidad de recargar la página.

Repositorio Base
El proyecto se basa en el repositorio proporcionado por el docente: https://github.com/paulosk8/webChat/tree/main.

Se debe clonar el repositorio o crear uno nuevo y trabajar sobre las siguientes ramas:

Rama principal: Código inicial.
Rama implementacion-chat: Versión final del proyecto proporcionada como referencia.
Implementación del Proyecto
Estructura del Código del Chat
El código del chat se encuentra estructurado de la siguiente manera:

script.js: Este archivo contiene la lógica principal del chat, incluyendo el manejo de la conexión con el servidor, el envío y recepción de mensajes, y la manipulación del DOM para mostrar los mensajes en la interfaz.
server.js: Este archivo define el servidor y las rutas para la aplicación, así como la configuración de los sockets para la comunicación en tiempo real.
index.html: Este archivo contiene la estructura HTML de la interfaz del chat.
style.css: Este archivo define los estilos CSS para la interfaz del chat.
Mejoras Realizadas al Diseño del Chat
Se han realizado las siguientes mejoras al diseño del chat:

Utilización del framework CSS Bootstrap para mejorar la apariencia y el diseño responsivo de la interfaz.
Implementación de animaciones CSS para los mensajes entrantes y salientes, utilizando la librería Animate.css.
Mejora de la paleta de colores y la tipografía para lograr una interfaz más agradable y coherente.
Características Adicionales Implementadas
Además de las mejoras de diseño, se han agregado las siguientes características adicionales:

Notificaciones: Cuando llega un nuevo mensaje, se muestra una notificación en el navegador del usuario, siempre y cuando este haya otorgado el permiso correspondiente.
Emojis: Se ha integrado la librería EmojiJS para permitir el uso de emojis en los mensajes.
Nombre de Usuario: Los usuarios deben ingresar un nombre de usuario antes de comenzar a chatear, y este nombre se muestra en los mensajes.
