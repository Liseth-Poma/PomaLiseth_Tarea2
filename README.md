# Chat en Tiempo Real con Sockets

**Nombre completo:** Liseth Carolina Poma Lagos
**Fecha de entrega:** 30 de mayo de 2025

---

## Introducción

Este proyecto tiene como objetivo implementar un **chat en tiempo real utilizando sockets**, permitiendo la comunicación instantánea entre múltiples usuarios desde diferentes dispositivos. Se parte de un repositorio base proporcionado por el docente, que sirve como referencia para entender la estructura general del sistema y su funcionamiento básico.

El uso de sockets es fundamental en aplicaciones en tiempo real, como chats, videojuegos multijugador y sistemas de colaboración en línea, ya que permiten una comunicación eficiente, bidireccional y basada en eventos entre el servidor y los clientes conectados.

---
## **Actividad 1: Clonación del Repositorio y Estructura Inicial**
Los estudiantes deben clonar el repositorio proporcionado:
git clone https://github.com/paulosk8/webChat.git
Explorar las ramas del repositorio:
Rama principal: Contiene el código inicial del proyecto.
Rama implementacion-chat: Contiene la versión final del proyecto como referencia.


## Repositorio Base

Repositorio original proporcionado por el docente:  
🔗 [https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)

**Ramas del repositorio:**

- `main`: Contiene el código inicial.
- `implementacion-chat`: Versión final del proyecto como referencia.

```bash
git clone https://github.com/paulosk8/webChat.git

![Clonar Repositorio](https://imgur.com/Eoj5vhI)

Crear una nueva rama para su propio desarrollo:
git checkout -b mi-implementacion

Despues de eso, ya se podrá abrir el proyecto con el editor de código e instalar todas sus dependencias con el comando **npm install**
![Instalar dependencias](https://imgur.com/eqyZS4w)

Y finalmente ejecutar el proyecto con el comando **npm start** que se estára ejecutando en el navegador web localmente
![Inicializar Proyecto](https://imgur.com/mhHvyeW)

## **Actividad 2: Mejora del Diseño del Chat**
Los estudiantes deben mejorar el diseño del chat utilizando herramientas como CSS, frameworks (ej. Bootstrap, Tailwind CSS) o librerías de componentes (ej. Material-UI).

Mejorar la interfaz visual (colores, tipografía, espaciado).
Agregar animaciones para mensajes entrantes/salientes.
Se realizó una mejora tanto en el chat como en el registro de usuario, la interaz simula un chat de whatsAap
### Interfaz del chat mejorada
![Interfaz Visual](https://imgur.com/gM7g8hF)

### Interfaz del registro de usuario mejorada
![Interfaz Visual del Registro de Usuario](https://imgur.com/gn1VrET)

Implementar un diseño responsivo para dispositivos móviles.

### Diseño responsivo
![Resposividad para pantallas móviles](https://imgur.com/eIRwenG)

## **Actividad 3: Características Adicionales (Opcional)**
Los estudiantes pueden agregar características adicionales para personalizar su chat. Algunas ideas incluyen:
Notificaciones: Mostrar notificaciones cuando llega un nuevo mensaje.

Se implementan notificaciones para que le lleguen al usuario a través de chrome, para ello primero se verifica si el navegador admite notificaciones, en caso de que sea posible, se podran integrar las notificaciones y cada vez que los usuarios envien un mensaje al chat este será notificado mediante el navegador.

En este código, primero verificamos si el navegador soporta la API de Notificaciones y solicitamos permiso al usuario para mostrar notificaciones. Luego, dentro del evento message, comprobamos si el permiso ha sido otorgado y, en caso afirmativo, mostramos una notificación con el nombre del usuario y el mensaje recibido
```bash
socket.on("message", ({ user, message }) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  if (isUser1) {
    messageElement.classList.add('animate__animated', 'animate__fadeInLeft');
  } else {
    messageElement.classList.add('animate__animated', 'animate__fadeInRight');
  }

  messageElement.innerHTML = `
    <div class="image-container">
      <img src="/img/perfil.jpg" alt="${user}'s Avatar">
    </div>
    <div class="message-body ${isUser1 ? 'user1-message' : 'user2-message'}">
      <div class="user-info">
        <span class="username">${user}</span>
        <span class="time">Hace 1 minuto</span>
      </div>
      <p>${emoji.replace_unified(message)}</p>
    </div>
  `;

  allMessages.appendChild(messageElement);
  allMessages.scrollTop = allMessages.scrollHeight;

  isUser1 = !isUser1; // Alternar la bandera de usuario 1

  // Mostrar notificación
  if (Notification.permission === 'granted') {
    new Notification(`Nuevo mensaje de ${user}`, {
      body: message,
      icon: '/img/perfil.jpg'
    });
  }
});


![Notificaciones de mensajes](https://imgur.com/Gqy2jVx)

Nombre de Usuario: Permitir que los usuarios ingresen un nombre antes de empezar a chatear.
Primero los usuarios deberan ingresar un nombre de usuario con el cual ingresaran al chat, como se puede ver en la siguiente imagen

![Ingresar Usuario](https://imgur.com/ST1EaIM)

