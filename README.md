Desarrollo de un Chat en Tiempo Real con Socket.IO para Comunicación entre Dispositivos
Autora: Liseth Carolina Poma Lagos

Resumen
En la presente práctica se ha mejorado un sistema de chat en tiempo real utilizando Socket.IO, agregando una sección visual que muestra la lista de usuarios conectados al servidor. Esta funcionalidad permite simular comportamientos similares a los observados en aplicaciones populares como WhatsApp o Telegram, donde los usuarios pueden ver quiénes están activos. Para lograrlo, se gestionaron eventos de conexión y desconexión de usuarios mediante un Map en el servidor y se actualizó la interfaz del cliente en función de los cambios recibidos. Este laboratorio permitió fortalecer habilidades en programación con JavaScript y en la implementación de funcionalidades en tiempo real. Además, se comprobó el correcto funcionamiento del sistema al probarlo en varias pestañas del navegador, logrando así una sincronización efectiva entre clientes. Esta experiencia refuerza la importancia del manejo eficiente de estados en aplicaciones colaborativas.

Palabras Clave: Socket.IO, tiempo real, usuarios conectados.

1. Introducción
La práctica consistió en mejorar una aplicación de chat construida previamente, integrando una nueva funcionalidad que permite mostrar en pantalla los usuarios que están conectados en tiempo real. Este ejercicio permitió reforzar conocimientos sobre el uso de WebSockets con Socket.IO y comprender cómo manejar eventos de conexión y desconexión de múltiples clientes. El objetivo fue simular una funcionalidad común en aplicaciones de mensajería modernas, logrando una sincronización fluida de información entre el servidor y los clientes. Además, se valoró la organización del trabajo en una nueva rama de desarrollo (feature-usuarios-conectados) y la documentación adecuada del proyecto.

2. Objetivo(s)
Manejar eventos de conexión y desconexión para mantener actualizada la lista de usuarios.
Emitir datos sincronizados entre el servidor y todos los clientes conectados.
Mostrar visualmente en el frontend la lista actual de usuarios activos.
Documentar el proyecto con buenas prácticas y evidencias.
3. Marco Teórico
Socket.IO

Socket.IO es una biblioteca para comunicación bidireccional y basada en eventos entre cliente y servidor, estableciendo conexiones a través de diferentes transportes como el sondeo largo HTTP, WebSocket y otros. Elige automáticamente la mejor opción según el navegador y las condiciones de la red. Los WebSockets son un protocolo que proporciona un canal de comunicación persistente y bidireccional sobre una sola conexión TCP, permitiendo que el servidor envíe datos a los clientes en tiempo real.

4. Descripción del Procedimiento
Se creó una nueva rama en el repositorio llamada feature-usuarios-conectados.
Creación de la nueva rama

En el archivo del servidor (realTimeServer.js), se utilizó un Map para almacenar los usuarios conectados con sus respectivos socket.id:

Copiar
const users = new Map();

const broadcastUsers = () => {
  const userList = Array.from(users.values()).map(u => u.username);
  io.emit("userList", userList);
};

io.on("connection", (socket) => {
  socket.on("register", (username) => {
    users.set(socket.id, { username, isNewUser: true });
    socket.emit("registered", { username, isNewUser: true });
    broadcastUsers(); // Emitimos usuarios conectados
  });

  socket.on("disconnect", () => {
    users.delete(socket.id);
    broadcastUsers(); // Actualizamos la lista al desconectarse
  });
});
Se emitió el evento userList a todos los clientes cada vez que se conectaba o desconectaba un usuario. En el cliente, se escuchó este evento para actualizar visualmente la lista:

Copiar
socket.on("userList", (userList) => {
  const userListEl = document.getElementById("user-list");
  userListEl.innerHTML = ""; // Limpiar la lista

  userList.forEach(username => {
    const li = document.createElement("li");
    li.className = "user-online";
    li.innerHTML = `
      <span class="status-dot"></span>
      <span class="user-name">${username}</span>
      <span class="status-text">en línea</span>
    `;
    userListEl.appendChild(li);
  });
});
En el frontend (HTML), se agregó el siguiente fragmento para mostrar la lista:

Copiar
<div class="user-list p-3 border-end" style="width: 250px; background-color: #f7f7f7;">
  <h6>Usuarios conectados</h6>
  <ul id="user-list" class="list-unstyled mb-0">
    <!-- Lista dinámica de usuarios -->
  </ul>
</div>
Se probó el chat abriendo varias pestañas y dispositivos para validar que la sincronización funcionara correctamente.
Prueba del chat con múltiples usuarios

Se agregaron estilos visuales para mejorar la presentación de la lista de usuarios, como un punto verde y el texto "en línea" similar a interfaces como WhatsApp y Messenger.
Lista de usuarios con estilos visuales

5. Análisis de Resultados
Durante la implementación se observó lo siguiente:

Al abrir múltiples pestañas y registrar diferentes usuarios, la lista de conectados se actualiza en todos los clientes.
Cuando un usuario cierra la pestaña o se desconecta, su nombre desaparece de la lista en tiempo real.
La gestión de usuarios con Map evitó duplicaciones y facilitó el manejo eficiente de conexiones.
La experiencia de usuario mejora notablemente al visualizar quiénes están activos.
6. Discusión
Esta práctica permitió aplicar conceptos de tiempo real de manera práctica, mejorando la lógica del sistema anterior al incorporar el seguimiento de usuarios conectados. Se comprobó que el uso de eventos disconnect y emit de Socket.IO es clave para mantener actualizada la información en todos los clientes. Comparado con el enfoque de polling (consulta constante), el uso de WebSockets resulta más eficiente y escalable. El trabajo también evidenció la importancia de mantener una estructura clara del código y realizar pruebas en diferentes contextos.

7. Conclusiones
Se logró implementar correctamente la funcionalidad de visualización de usuarios conectados en tiempo real.
El uso de Socket.IO permitió una comunicación fluida y eficiente entre servidor y clientes.
Esta mejora representa un paso importante hacia una aplicación de mensajería más completa.
La experiencia refuerza el valor de gestionar adecuadamente los estados en aplicaciones colaborativas.
La documentación clara y la organización del proyecto facilitaron la comprensión del código y el proceso.
8. Bibliografía
Introduction | Socket.IO. (n.d.). https://socket.io/docs/v4/
