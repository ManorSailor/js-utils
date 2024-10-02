import "./style.css";
import { createEventSource } from "./utils";

const notificationsContainer = document.querySelector(".notifications");
const [connectBtn, disconnectBtn] = document.querySelectorAll(
  ".actions-container > *"
);

const updateNotifications = (data) =>
  (notificationsContainer.textContent = data);

const source = createEventSource("/sse/events");

connectBtn.addEventListener("click", (_) => {
  source.connect();
  updateNotifications("Connecting...");

  source.listenFor("notifications", (e) => {
    const data = JSON.parse(e.data);
    updateNotifications(data.content);
  });
});

disconnectBtn.addEventListener("click", (_) => {
  source.disconnect();
  updateNotifications("Disconnected");
});

updateNotifications("Disconnected");
