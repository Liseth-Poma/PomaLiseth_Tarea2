const socket = io();

const send = document.querySelector("#send-message");
const allMessages = document.querySelector("#all-messages");

send.addEventListener("click", () => {
  const message = document.querySelector("#message").value;
  socket.emit("message", message);
});

socket.on("message", ({ user, message }) => {
  const msg = document.createRange().createContextualFragment(`
        <div class="message">
                <div class="image-container">
                    <img src="/img/perfil.jpg">
                </div>
                <div class="message-body">
                    <div class="user-info">
                        <span class="username">${user}</span>
                        <span class="time">Hace 1 minuto</span>
                    </div>
                    <p>${message}</p>
                </div>
            </div>
        `);
  allMessages.append(msg);
});
