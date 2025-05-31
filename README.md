# Chat en Tiempo Real con Sockets

**Nombre completo:** Liseth Carolina Poma Lagos
**Fecha de entrega:** 30 de mayo de 2025

---

## Introducción

Este proyecto consiste en el desarrollo de una aplicación de chat en tiempo real utilizando tecnologías web modernas. El objetivo principal es crear una plataforma sencilla y eficiente que permita a los usuarios comunicarse de manera instantánea.

El uso de sockets es fundamental en este tipo de aplicaciones, ya que permiten establecer una conexión bidireccional entre cliente y servidor. A diferencia de las solicitudes HTTP tradicionales, los sockets mantienen una conexión persistente, ideal para comunicaciones en tiempo real. Esta conexión continua posibilita el envío y la recepción de mensajes sin necesidad de recargar la página, mejorando así la experiencia del usuario y facilitando una interacción fluida.

---

## Actividad 1: Clonación del Repositorio y Estructura Inicial

Para comenzar, se debe clonar el repositorio proporcionado por el docente:

```bash
git clone https://github.com/paulosk8/webChat.git
```

Repositorio original:
🔗 [https://github.com/paulosk8/webChat/tree/main](https://github.com/paulosk8/webChat/tree/main)

**Ramas disponibles:**

* `main`: Contiene el código inicial del proyecto.
* `implementacion-chat`: Incluye la versión final como referencia.

A continuación, se crea una nueva rama para el desarrollo individual:

```bash
git checkout -b mi-implementacion
```

### Capturas del proceso:

![Clonar Repositorio](https://i.imgur.com/Eoj5vhI.png)
![Nueva Rama](https://i.imgur.com/b9PkuJN.png)

Luego, se abre el proyecto en un editor de código y se instalan las dependencias:

```bash
npm install
```

![Instalar dependencias](https://i.imgur.com/eqyZS4w.png)

Finalmente, se ejecuta el proyecto:

```bash
npm start
```

![Inicializar Proyecto](https://i.imgur.com/mhHvyeW.png)

---

## Actividad 2: Mejora del Diseño del Chat

Se mejoró el diseño visual de la aplicación utilizando CSS y herramientas como Bootstrap. Las mejoras incluyeron:

* Interfaz visual estilizada (colores, tipografía, espaciado).
* Animaciones para mensajes entrantes y salientes.
* Registro de usuario con interfaz mejorada.
* Simulación de interfaz tipo WhatsApp.
* Diseño responsivo para pantallas móviles.

### Capturas:

**Interfaz del chat mejorada:**
![Interfaz Visual](https://i.imgur.com/gM7g8hF.png)

**Registro de usuario:**
![Interfaz Registro](https://i.imgur.com/gn1VrET.png)

**Diseño responsivo:**
![Responsividad](https://i.imgur.com/eIRwenG.png)

---

## Actividad 3: Características Adicionales (Opcional)

Se implementaron funcionalidades adicionales para enriquecer la experiencia del usuario:

### Notificaciones en el navegador

Se incluyó el uso de notificaciones del navegador para alertar al usuario cuando llega un nuevo mensaje. Si el navegador soporta esta funcionalidad y el usuario otorga permiso, se mostrará una notificación con el nombre del remitente y el contenido del mensaje.

```javascript
socket.on("message", ({ user, message }) => {
  // Creación del mensaje visual en el chat

  // Mostrar notificación si está permitido
  if (Notification.permission === 'granted') {
    new Notification(`Nuevo mensaje de ${user}`, {
      body: message,
      icon: '/img/perfil.jpg'
    });
  }
});
```

![Notificaciones de mensajes](https://i.imgur.com/Gqy2jVx.png)

### Ingreso de nombre de usuario

Antes de acceder al chat, se solicita un nombre de usuario, lo cual permite una identificación personalizada dentro de la conversación.

![Ingresar Usuario](https://i.imgur.com/ST1EaIM.png)

---

## Conclusiones

Durante el desarrollo de este proyecto se obtuvo un aprendizaje significativo sobre la creación de aplicaciones en tiempo real mediante sockets. Comprender su funcionamiento y aplicación en una arquitectura web permitió establecer una comunicación eficiente entre los usuarios.

Además, se profundizó en el diseño de interfaces amigables, responsivas e intuitivas, inspiradas en plataformas populares de mensajería. También se exploraron funcionalidades adicionales como notificaciones push, las cuales enriquecen la experiencia del usuario.

Uno de los mayores retos fue lograr un diseño atractivo y funcional. Sin embargo, la integración de herramientas modernas permitió superar estos desafíos y obtener un resultado satisfactorio.

---

## Referencias

* Zagniotov, A. (n.d.). stubby4j. [https://stubby4j.com/docs/websockets\_configuration\_howto.html](https://stubby4j.com/docs/websockets_configuration_howto.html)
* Socket.IO. (n.d.). [https://socket.io/](https://socket.io/)
* Onix React. (2024, noviembre 18). What are Sockets? And what are Sockets for? - Medium. [https://medium.com/@onix\_react/what-are-sockets-and-what-are-sockets-for-8eef56436b7b](https://medium.com/@onix_react/what-are-sockets-and-what-are-sockets-for-8eef56436b7b)
