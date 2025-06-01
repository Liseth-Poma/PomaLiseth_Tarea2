const socket = io();
const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");
const messageInput = document.querySelector("#message-input");

let username = "";


// Escuchar lista de usuarios conectados
socket.on("userList", (userList) => {
  const userListEl = document.getElementById("user-list");
  userListEl.innerHTML = ""; // Limpiar la lista antes de volver a agregar

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


// Registrar usuario al conectarse
socket.on("connect", () => {
  const storedUsername = getCookie("username");
  if (storedUsername) {
    username = storedUsername;
    socket.emit("register", username);
  } else {
    document.location.href = "/register.html";
  }
});

// Confirmación de registro
socket.on("registered", ({ username }) => {
  console.log(`Usuario ${username} registrado correctamente.`);
});

// Recibir mensaje
socket.on("message", ({ user, message }) => {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  const isMyMessage = (user === username);

  messageElement.classList.add('animate__animated', isMyMessage ? 'animate__fadeInRight' : 'animate__fadeInLeft');

  messageElement.innerHTML = `
    <div class="image-container">
      <img src="/img/perfil.jpg" alt="${user}'s Avatar">
    </div>
    <div class="message-body ${isMyMessage ? 'user1-message' : 'user2-message'}">
      <div class="user-info">
        <span class="username">${user}</span>
        <span class="time">Hace 1 minuto</span>
      </div>
      <p>${message}</p>
    </div>
  `;

  allMessages.appendChild(messageElement);
  allMessages.scrollTop = allMessages.scrollHeight;
});

// Enviar mensaje
send.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    socket.emit("message", message);
    messageInput.value = "";
  }
});

// Obtener cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const userList = document.getElementById('user-list');

function addUserOnline(username) {
  const li = document.createElement('li');
  li.className = 'user-online';
  li.innerHTML = `
    <span class="status-dot"></span>
    <span class="user-name">${username}</span>
    <span class="status-text">en línea</span>
  `;
  userList.appendChild(li);
}
